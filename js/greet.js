function GreetMe() {

    /* WE GOT THE NAME, CHECKED IT AND MADE THE FIRST LETTER A CAPITAL */
    var theName = '';
    function setName(name) {
        theName = name;
    }

    function checkNumber() {
        return /\d/.test(theName);
    }

    function getName() {
            var upper = theName.charAt(0).toUpperCase();
            var lower = theName.slice(1).toLowerCase();
            return upper + lower;
    }

    // WE ARE CHOOSING A LANGUAGE
    var greetMe = ''
    function checkLanguage(language) { //checking if language was selected
        return language != null;
    }

    function getLanguage(language) {
        if (language == 'sotho') {
            greetMe = 'Dumela';
        } else if (language == 'samoa') {
            greetMe = 'Talofa';
        } else if (language == 'english') {
            greetMe = 'Hello';
        }  
    }

    //DISPLAY GREETING
    function showGreeting() {
        return greetMe  + ', ' + getName();
    }

    //COUNTER
    function greetingsCounter() {
        //ADD CLICKS
        if (localStorage['countClicks']) {
            localStorage['countClicks'] = Number(localStorage['countClicks']) + 1;
        } else {
            localStorage['countClicks'] = 1;
        }
    }

    function createNamesObj () {
        if (namesGreeted[theName] === undefined) {
            greetingsCounter();
            namesGreeted[theName] = 0;
        }
    }

    function getCounter() {
        return localStorage.getItem('countClicks');
    }
    
    return {
        setName,
        checkNumber,
        getName,
        checkLanguage,
        getLanguage,
        showGreeting,
        greetingsCounter,
        createNamesObj,
        getCounter
    }
}

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
    var enterName = document.querySelector('.enter-name').value;
    myGreeting.setName(enterName);

    //HTML STUFF
    var langChosen = document.querySelector('.lang-btn:checked');
    var errorName = document.querySelector('.err-name');
    var errorLang = document.querySelector('.err-lang');
    var outGreet = document.querySelector('.greeting');
    var outCounter = document.querySelector('.count');

    //PROCESS of sorting the name inputed and the language
    if (enterName.toString().length > 0) {
        if (!myGreeting.checkNumber()) {
            if (myGreeting.checkLanguage(langChosen)) {
                myGreeting.getLanguage(langChosen.value);

                //PRINT OUT GREETING
                outGreet.innerHTML = myGreeting.showGreeting();

                //PRINT OUT COUNTER
                myGreeting.greetingsCounter();
                //myGreeting.createNamesObj();
                outCounter.innerHTML = myGreeting.getCounter();
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
    var radioBtn = document.querySelector('.lang-btn:checked');
    radioBtn.checked = false;
}
resetBtn.addEventListener('click', resetFuncEvent);