function GreetMe() {
    var greetingString;
    var counter = 0;
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

    function sayName (name) {
        theName = name;
    }

    function count() {
        counter ++;
    }

    function getGreeting () {
        return greetingString + ", " + theName;
    }

    function getCount () {
        return counter;
    }

    return {
        greetEng,
        greetSamoa,
        greetSotho,
        getGreeting,
        sayName,
        count,
        getCount
    }
}

const greetBtn = document.querySelector(".greetBtn");

var greeting = GreetMe();

function greetMeEvent () {
    var outGreet = document.querySelector(".outgreet");

    // WHAT THE USER TYPES IN
    var setName = document.querySelector(".inputName").value;
    var radioLangBtn = document.querySelector(".radioTypeLang:checked").value;
    
    greeting.sayName(setName);
    setName.value = "";
    if (radioLangBtn === 'english') {
        greeting.greetEng();
        greeting.count();
        outGreet.innerHTML = greeting.getGreeting();
    } else if (radioLangBtn === 'samoa') {
        greeting.greetSamoa();
        greeting.count();
        outGreet.innerHTML = greeting.getGreeting();
    } else if (radioLangBtn === 'sotho') {
        greeting.greetSotho();
        greeting.count();
        outGreet.innerHTML = greeting.getGreeting();
    }

    //COUNTER
    var count = document.querySelector(".count");
    count.innerHTML = greeting.getCount();
}

greetBtn.addEventListener("click", greetMeEvent);