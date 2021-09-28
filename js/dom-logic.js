//Factory functio
let myGreeting = GreetMe();


function printName(){
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
    } else if (myGreeting.checkNumber()) {
        errorName.innerHTML = myGreeting.getNumberErrorMessage();
    }

    //Store names in localStorage
    if (localStorage.getItem('fullNamesKey') == null) {
        let fullNamesList = [];
	    localStorage['fullNamesKey'] = JSON.stringify(fullNamesList);
    } else {
        let fullNamesList = JSON.parse(localStorage.getItem(fullNamesKey));
        if (fullNamesList.indexOf(myGreeting.getFullName()) < 0) {
            fullNamesList.push(myGreeting.getFullName());
            localStorage.fullNamesKey = JSON.stringify(fullNamesList);
        }
    }

    //Language is chosen
    myGreeting.setLang(langChosen.value);
    myGreeting.checkLang();
    myGreeting.getLang();

    if (myGreeting.checkLang()) {
        outGreet.innerHTML = myGreeting.displayGreeting();
    } else {
        errorLang.innerHTML = myGreeting.getLangErrorMessage();
    }

    //Counter is displayed
    let getNamesList = JSON.parse(localStorage.getItem('fullNamesKeys'));
    outCounter.innerHTML = getNamesList.length;
}

const greetBtn = document.querySelector('.greet');
greetBtn.addEventListener('click', printName);


/*

//INSTANCE OF THE FACTORY FUNCTION
let myGreeting = GreetMe();
let namesGreeted = {'initialise': 1};

let outCounterRefresh = document.getElementById('count');
if (JSON.parse(localStorage.getItem('keys')) == null) {
    outCounterRefresh.innerHTML = 0;
} else {
    let newNamesStored1 = JSON.parse(localStorage.getItem('keys'));
    outCounterRefresh.innerHTML = Object.keys(newNamesStored1).length;
}

//GREET ME BUTTON
const greetMeBtn = document.querySelector('.greet');
function greetMeFuncEvent() {
    //CLEAR FIELDS
    let errorName1 = document.querySelector('.err-name');
    errorName1.innerHTML = "";

    let errorLang1 = document.querySelector('.err-lang');
    errorLang1.innerHTML = "";

    let outGreet1 = document.querySelector(".greeting");
    outGreet1.innerHTML = '';

    let resetMessage1 = document.querySelector('.resetMessage');
    resetMessage1.innerHTML = '';

    
    /* INPUT NAME 
    myGreeting.setName(enterName);

    /* PROCESS 
    //Check if name is entered
    if (!myGreeting.checkName()) {
        myGreeting.nameErrorMessage();
        errorName.innerHTML = myGreeting.getNameError();
        setTimeout(function(){ errorName.innerHTML = '' }, 3000);
    } 

    //Check if number is entered
    if (myGreeting.checkNumber()) {
        myGreeting.numberErrorMessage();
        errorName.innerHTML = myGreeting.getNumberError();
        setTimeout(function(){ errorName.innerHTML = '' }, 3000);
    }

    //Check if language is entered
    myGreeting.setLang(langChosen);
    if(myGreeting.checkName() && !myGreeting.checkNumber()) {
        if (myGreeting.checkLanguage()) {
            myGreeting.langErrorMessage();
            myGreeting.getLanguage();
            myGreeting.getName();
            outGreet.innerHTML = myGreeting.showGreeting();

            //COUNTER & CHECK IF NAME REPEATS

            let namesGreetedStored = JSON.parse(localStorage.getItem('keys'));

            //does names object exist
            if (namesGreetedStored === null) {
                //create the names object
                let obj = {};
                obj[enterName] = 0;
                localStorage['keys'] = JSON.stringify(obj);
                
            } else {
                /* STORE names object in local storage 
                if (namesGreetedStored[enterName] === undefined) {
                    namesGreetedStored[enterName] = 0;
                    localStorage['keys'] = JSON.stringify(namesGreetedStored);
                }
            }
            let newNamesStored = JSON.parse(localStorage.getItem('keys'));
            outCounter.innerHTML = Object.keys(newNamesStored).length;

        } else {
            myGreeting.langErrorMessage();
            errorLang.innerHTML = myGreeting.getLangError();
            setTimeout(function(){ errorLang.innerHTML = '' }, 3000);
        }
    }

    //CLEAR INPUT FIELD
    let input1 = document.querySelector(".enter-name");
    input1.value = '';

    //CLEAR RADIO BUTTONS
    let radioBtn1 = document.querySelector('.lang-btn:checked');
    radioBtn1.checked = false;
}
greetMeBtn.addEventListener('click', greetMeFuncEvent);

//RESET BUTTON
const resetBtn = document.querySelector('.reset');
function resetFuncEvent() {
    localStorage.clear();

    let resetMessage = document.querySelector('.resetMessage');
    resetMessage.innerHTML = 'Users have been cleared successfully';

    //CLEAR display counter
    let displayCountResetBtn = document.getElementById("count");
    displayCountResetBtn.innerHTML = 0;

    //CLEAR INPUT FIELD
    let input2 = document.querySelector(".enter-name");
    input2.value = '';

    //CLEAR ERROR NAME FIELD
    let errorName2 = document.querySelector('.err-name');
    errorName2.innerHTML = "";

    //CLEAR LANG FIELD
    let errorLang2 = document.querySelector('.err-lang');
    errorLang2.innerHTML = "";

    //CLEAR GREETING (OUTPUT)
    let outGreet2 = document.querySelector(".greeting");
    outGreet2.innerHTML = '';

    //CLEAR RADIO BUTTONS
    let radioBtn = document.querySelector('.lang-btn:checked');
    radioBtn.checked = false;
}
resetBtn.addEventListener('click', resetFuncEvent);*/