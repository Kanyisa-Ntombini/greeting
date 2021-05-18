function GreetMe() {
    var greetingString;
    var theName;

    function greetEng () {
        greetingString = "Hello";
    }

    function greetSamoa () {
        greetingString = "Talofa";
    }

    function greetSotho () {
        greetingString = "Dumela";
    }

    function setName (name) {
        theName = name;
    }

    function getGreeting () {
        return greetingString + ", " + theName;
    }

    function createNamesObj () {
        if (namesGreeted['userName'] === undefined) {
            namesGreeted['userName'] = 0;
        } else {
            namesGreeted['userName'] ++;
        }
    }

    function countNames() {
        if (namesObjExist()) {

        }
    }

    return {
        createNamesObj,
        greetEng,
        greetSamoa,
        greetSotho,
        getGreeting,
        setName, 
        countNames
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

    //ADD CLICKS
    if (localStorage['countClicks']) {
        localStorage['countClicks'] = Number(localStorage['countClicks']) + 1;
    } else {
        localStorage['countClicks'] = 1;
    }

    /* ======================= OUTPUT ============================ */
    //PRINT OUT GREETING (OUTPUT)
    var outGreet = document.querySelector(".outgreet");
    outGreet.innerHTML = greeting.getGreeting();

    //PRINT OUT COUNTER (OUTPUT)
    //display counter
    var displayCount = document.querySelector(".count");
    displayCount.innerHTML = localStorage.getItem('countClicks');
}
greetBtn.addEventListener('click', greetMeBtnEvent);

function resetBtnEvent() {
    localStorage.clear();

     //display counter
     var displayCountResetBtn = document.querySelector(".count");
     displayCountResetBtn.innerHTML = 0;
}
resetBtn.addEventListener('click', resetBtnEvent);