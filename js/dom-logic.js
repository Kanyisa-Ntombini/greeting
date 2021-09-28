//Counter displayed when page refreshes
if (localStorage.getItem('fullNamesKey') == null) {
    document.querySelector('.count').innerHTML = '0';
} else {
    let getNamesList = JSON.parse(localStorage.getItem('fullNamesKey'));
    document.querySelector('.count').innerHTML = getNamesList.length;
}

//Factory function
let myGreeting = GreetMe();

function printName(){
    //Reset
    document.querySelector('.error-name').innerHTML = "";
    document.querySelector('.error-lang').innerHTML = "";
    document.querySelector('.greeting').innerHTML = '';
    document.querySelector('.reset-message').innerHTML = '';
    document.querySelector('.reset-message').innerHTML = '';


    //HTML ELEMENTS
    const enterName = document.querySelector('.enter-name').value;
    const langChosen = document.querySelector('.langBtn:checked');
    const errorName = document.querySelector('.error-name');
    const errorLang = document.querySelector('.error-lang');
    const outGreet = document.querySelector('.greeting');
    const outCounter = document.querySelector('.count');

    //Name is entered
    myGreeting.setName(enterName);
    myGreeting.checkName();
    myGreeting.checkNumber();
    myGreeting.makeName();
    
    if (! myGreeting.checkName()) {
        errorName.innerHTML = myGreeting.getNameErrorMessage();
        setTimeout(function(){ errorName.innerHTML = '' }, 3000);
    } else if (myGreeting.checkNumber()) {
        errorName.innerHTML = myGreeting.getNumberErrorMessage();
        setTimeout(function(){ errorName.innerHTML = '' }, 3000);
    }

    //Store names in localStorage
    if (localStorage.getItem('fullNamesKey') == null) {
        let fullNamesList = [myGreeting.getFullName()];
	    localStorage['fullNamesKey'] = JSON.stringify(fullNamesList);
        console.log('if')
    } else {
        let fullNamesList = JSON.parse(localStorage.getItem('fullNamesKey'));
        if (fullNamesList.indexOf(myGreeting.getFullName()) < 0) {
            fullNamesList.push(myGreeting.getFullName());
            localStorage.fullNamesKey = JSON.stringify(fullNamesList);
        }
    }

    //Language is chosen
    if (langChosen == null) {
        myGreeting.setLang('');
    } else {
        myGreeting.setLang(langChosen.value);
    }
    myGreeting.checkLang();
    myGreeting.getLang();

    if (myGreeting.checkLang()) {
        outGreet.innerHTML = myGreeting.displayGreeting();
    } else {
        errorLang.innerHTML = myGreeting.getLangErrorMessage();
        setTimeout(function(){ errorLang.innerHTML = '' }, 3000);
    }

    //Counter is displayed
    let getNamesList = JSON.parse(localStorage.getItem('fullNamesKey'));
    outCounter.innerHTML = getNamesList.length;

    //CLEAR INPUT FIELD
    document.querySelector(".enter-name").value = '';
    //CLEAR RADIO BUTTONS
    langChosen.checked = false;
}

const greetBtn = document.querySelector('.greet');
greetBtn.addEventListener('click', printName);

//RESET BUTTON
const resetBtn = document.querySelector('.reset');
function resetFuncEvent() {
    localStorage.clear();

    //Reset message
    document.querySelector('.reset-message').innerHTML = 'Users have been cleared successfully';

    //CLEAR display counter
    document.querySelector(".count").innerHTML = 0;

    //CLEAR INPUT FIELD
    document.querySelector(".enter-name").value = '';

    //CLEAR ERROR NAME FIELD
    document.querySelector('.error-name').innerHTML = "";

    //CLEAR LANG FIELD
    document.querySelector('.error-lang').innerHTML = "";

    //CLEAR GREETING (OUTPUT)
    document.querySelector(".greeting").innerHTML = '';

    //CLEAR RADIO BUTTONS
    document.querySelector('.lang-btn:checked').checked = false;
}
resetBtn.addEventListener('click', resetFuncEvent);