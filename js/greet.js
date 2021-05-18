function GreetMe() {
    var greetingString;
    var theName;

    function setName (name) {
        theName = name;
    }

    function getName() {
        return theName;
    }

    function chooseLanguage(someInput) {
        if (someInput === 'english') {
            greetingString = "Hello";
        } else if (someInput === 'samoa') {
            greetingString = "Talofa";
        } else if (someInput === 'sotho') {
            greetingString = "Dumela";
        }
    }

    function getLanguage() {
        return greetingString;
    }

    function greetEng () {
        greetingString = "Hello";
    }

    function greetSamoa () {
        greetingString = "Talofa";
    }

    function greetSotho () {
        greetingString = "Dumela";
    }


    function getGreeting () {
        return greetingString + ", " + theName;
    }

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
        getName,
        chooseLanguage,
        getLanguage,
        getCounter,
        greetingsCounter,
        createNamesObj,
        greetEng,
        greetSamoa,
        greetSotho,
        getGreeting
    }
}

const greetBtn = document.querySelector(".greetBtn");
const resetBtn = document.querySelector('.reset');
var greeting = GreetMe();
var namesGreeted = {};

function greetMeBtnEvent () {

    /* ======================= INPUT ============================ */
    // WHAT THE USER TYPES IN
    var setName = document.querySelector(".inputName").value;
    var radioLangBtn = document.querySelector(".radioTypeLang:checked").value;
    
    /* ======================= PROCESS ============================ */
    //MAKE THE GREETING
    greeting.setName(setName);
    if (radioLangBtn === 'english') {
        greeting.greetEng();
    } else if (radioLangBtn === 'samoa') {
        greeting.greetSamoa();
    } else if (radioLangBtn === 'sotho') {
        greeting.greetSotho();       
    }
    //CREATE THE OBJECT TO STORE THE NAMES AND COUNT THE NAMES
    greeting.createNamesObj();

    /* ======================= OUTPUT ============================ */
    //CLEAR INPUT FIELD 
    var inputField1 = document.querySelector('.inputName');
    inputField1.value = '';

    //PRINT OUT GREETING (OUTPUT)
    var outGreet = document.querySelector(".outgreet");
    outGreet.innerHTML = greeting.getGreeting();

    //PRINT OUT COUNTER (OUTPUT)
    //display counter
    var displayCount = document.querySelector(".count");
    displayCount.innerHTML = greeting.getCounter();
}
greetBtn.addEventListener('click', greetMeBtnEvent);

function resetBtnEvent() {
    localStorage.clear();

    //CLEAR INPUT FIELD 
    var inputField2 = document.querySelector('.inputName');
    inputField2.value = '';

     //display counter
     var displayCountResetBtn = document.querySelector(".count");
     displayCountResetBtn.innerHTML = '';

    //CLEAR GREETING (OUTPUT)
    var outGreet2 = document.querySelector(".outgreet");
    outGreet2.innerHTML = 'Hello....';
}
resetBtn.addEventListener('click', resetBtnEvent);