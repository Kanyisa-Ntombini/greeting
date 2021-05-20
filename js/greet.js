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
    /* INPUT NAME */
    var enterName = document.querySelector('.enter-name').value;
    myGreeting.setName(enterName);

    //HTML STUFF
    var langChosen = document.querySelector('.lang-btn:checked');
    var errorName = document.querySelector('.err-name');
    var errorLang = document.querySelector('.err-lang');
    var outGreet = document.querySelector('.greeting');

    //PROCESS of sorting the name inputed and the language
    if (enterName.toString().length > 0) {
        if (!myGreeting.checkNumber()) {
            if (myGreeting.checkLanguage(langChosen)) {
                console.log(myGreeting.getLanguage(langChosen.value));
                outGreet.innerHTML = myGreeting.showGreeting();

                //CREATE THE OBJECT TO STORE THE NAMES AND COUNT THE NAMES
                myGreeting.createNamesObj();

                //PRINT OUT COUNTER (OUTPUT)
                var displayCount = document.querySelector(".count");
                displayCount.innerHTML = myGreeting.getCounter();
            } else {
                errorLang.innerHTML = "Please choose a language";
            }
            
        } else {
            errorName.innerHTML = "Please do not enter a number";
        }
    }

    //CLEAR FIELD s
    var inputField1 = document.querySelector('.enter-name');
    inputField1.value = '';

    var errorName1 = document.querySelector('.err-name');
    errorName1.innerHTML = '';

    var errorLang1 = document.querySelector('.err-lang');
    errorLang1.innerHTML = '';
}
greetMeBtn.addEventListener('click', greetMeFuncEvent);

//RESET BUTTON
const resetBtn = document.querySelector('.reset');
function resetFuncEvent() {
    localStorage.clear();

    //CLEAR ERRORS
    var errorName2 = document.querySelector('.err-name');
    errorName2.innerHTML = '';
    var errorLang2 = document.querySelector('.err-lang');
    errorLang2.innerHTML = '';

    //CLEAR INPUT FIELD 
    var inputField2 = document.querySelector('.enter-name');
    inputField2.value = '';

     //CLEAR display counter
     var displayCountResetBtn = document.querySelector(".count");
     displayCountResetBtn.innerHTML = 0;

    //CLEAR GREETING (OUTPUT)
    var outGreet2 = document.querySelector(".greeting");
    outGreet2.innerHTML = '';
}
resetBtn.addEventListener('click', resetFuncEvent);