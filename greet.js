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

    return {
        greetEng,
        greetSamoa,
        greetSotho,
        getGreeting,
        setName
    }
}

const greetBtn = document.querySelector(".greetBtn");
var greeting = GreetMe();

function greetMeEvent () {
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

greetBtn.addEventListener("click", greetMeEvent);