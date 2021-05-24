//INSTANCE OF THE FACTORY FUNCTION
var myGreeting = GreetMe();
var namesGreeted = {};

//GREET ME BUTTON
const greetMeBtn = document.querySelector('.greet');
function greetMeFuncEvent() {
    //CLEAR FIELDS
    var errorName1 = document.querySelector('.err-name');
    errorName1.innerHTML = "";

    var errorLang1 = document.querySelector('.err-lang');
    errorLang1.innerHTML = "";

    var outGreet1 = document.querySelector(".greeting");
    outGreet1.innerHTML = '';

    //HTML STUFF
    var enterName = document.querySelector('.enter-name').value.toLowerCase();
    var langChosen = document.querySelector('.lang-btn:checked');
    var errorName = document.querySelector('.err-name');
    var errorLang = document.querySelector('.err-lang');
    var outGreet = document.querySelector('.greeting');
    var outCounter = document.querySelector('.count');

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

            //COUNTER
            /* CHECK IF NAME IS REPEATED */
            /* STORE namesGreeted in local storage */

            if (namesGreeted[enterName] === undefined) {
                namesGreeted[enterName] = 0;
                //count clicks
                if (localStorage['countClicks']) {
                    localStorage['countClicks'] = Number(localStorage['countClicks']) + 1;
                } else {
                    localStorage['countClicks'] = 1;
                }
            }
            outCounter.innerHTML = localStorage.getItem('countClicks');

        } else {
            myGreeting.langErrorMessage();
            errorLang.innerHTML = myGreeting.getLangError();
        }
    }

    //CLEAR INPUT FIELD
    var input1 = document.querySelector(".enter-name");
    input1.value = '';
}
greetMeBtn.addEventListener('click', greetMeFuncEvent);

//RESET BUTTON
const resetBtn = document.querySelector('.reset');
function resetFuncEvent() {
    localStorage.clear();

    //CLEAR INPUT FIELD
    var input2 = document.querySelector(".enter-name");
    input2.value = '';

    //CLEAR ERROR NAME FIELD
    var errorName2 = document.querySelector('.err-name');
    errorName2.innerHTML = "";

    //CLEAR LANG FIELD
    var errorLang2 = document.querySelector('.err-lang');
    errorLang2.innerHTML = "";

    //CLEAR display counter
    var displayCountResetBtn = document.querySelector(".count");
    displayCountResetBtn.innerHTML = 0;

    //CLEAR GREETING (OUTPUT)
    var outGreet2 = document.querySelector(".greeting");
    outGreet2.innerHTML = '';

    //CLEAR RADIO BUTTONS
    var radioBtn = document.querySelector('.lang-btn');
    radioBtn.checked = false;
}
resetBtn.addEventListener('click', resetFuncEvent);