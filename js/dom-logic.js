//INSTANCE OF THE FACTORY FUNCTION
let myGreeting = GreetMe();
let namesGreeted = {'initialise': 1};

let outCounterRefresh = document.getElementById('count');
outCounterRefresh.innerHTML = localStorage.getItem('countClicks');

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

    //HTML STUFF
    let enterName = document.querySelector('.enter-name').value.toLowerCase();
    let langChosen = document.querySelector('.lang-btn:checked');
    let errorName = document.querySelector('.err-name');
    let errorLang = document.querySelector('.err-lang');
    let outGreet = document.querySelector('.greeting');
    let outCounter = document.getElementById('count');

    /* INPUT NAME */
    myGreeting.setName(enterName);

    /* PROCESS */
    //Check if name is entered
    if (!myGreeting.checkName()) {
        myGreeting.nameErrorMessage();
        errorName.innerHTML = myGreeting.getNameError();
    } 

    //Check if number is entered
    if (myGreeting.checkNumber()) {
        myGreeting.numberErrorMessage();
        errorName.innerHTML = myGreeting.getNumberError();
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
                /* STORE names object in local storage */
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

    //CLEAR INPUT FIELD
    let input2 = document.querySelector(".enter-name");
    input2.value = '';

    //CLEAR ERROR NAME FIELD
    let errorName2 = document.querySelector('.err-name');
    errorName2.innerHTML = "";

    //CLEAR LANG FIELD
    let errorLang2 = document.querySelector('.err-lang');
    errorLang2.innerHTML = "";

    //CLEAR display counter
    let displayCountResetBtn = document.getElementById("count");
    displayCountResetBtn.innerHTML = '';

    //CLEAR GREETING (OUTPUT)
    let outGreet2 = document.querySelector(".greeting");
    outGreet2.innerHTML = '';

    //CLEAR RADIO BUTTONS
    let radioBtn = document.querySelector('.lang-btn:checked');
    radioBtn.checked = false;
}
resetBtn.addEventListener('click', resetFuncEvent);