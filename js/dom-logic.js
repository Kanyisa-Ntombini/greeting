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

    /*var radioBtn = document.querySelector('.lang-btn:checked');
    radioBtn.checked = false; THIS MAKES ME UNABLE TO CHOOSE A LANGUAGE */

    /* INPUT NAME */
    var enterName = document.querySelector('.enter-name').value.toLowerCase();
    myGreeting.setName(enterName);

    //HTML STUFF
    var langChosen = document.querySelector('.lang-btn:checked');
    var errorName = document.querySelector('.err-name');
    var errorLang = document.querySelector('.err-lang');
    var outGreet = document.querySelector('.greeting');
    var outCounter = document.querySelector('.count');

    //PROCESS of sorting the name inputed and the language
    if (enterName.toString().length > 0) { /* MAKE SURE SOMETHING IS TYPED */
        /* CHECK IF ITS NOT A NUMBER */
        if (!myGreeting.checkNumber()) {
            /* CHECK IF A LANGUAGE IS CHOSEN*/
            if (myGreeting.checkLanguage(langChosen)) {
                myGreeting.getLanguage(langChosen.value);

                //PRINT OUT GREETING
                outGreet.innerHTML = myGreeting.showGreeting();

                //COUNTER
                /* CHECK IF A NAME IS REPEATED */
                if (namesGreeted[enterName] === undefined) {
                    /* ADD CLICKS */
                    if (localStorage['countClicks']) {
                        localStorage['countClicks'] = Number(localStorage['countClicks']) + 1;
                    } else {
                        localStorage['countClicks'] = 1;
                    }
                    namesGreeted[enterName] = 0;
                }

                outCounter.innerHTML = localStorage.getItem('countClicks');

            } else {
                errorLang.innerHTML = "Please choose a language";
            }
            
        } else {
            errorName.innerHTML = "Please do not enter a number";
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