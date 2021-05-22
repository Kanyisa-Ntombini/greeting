function GreetMe() {

    /* WE GOT THE NAME, CHECKED IT AND MADE THE FIRST LETTER A CAPITAL */
    var theName = '';
    function setName(name) {
        theName = name.toLowerCase();
        //alert(theName);
    }

    function checkNumber() {
        return /\d/.test(theName);
    }

    function getName() {
            var upper = theName.charAt(0).toUpperCase();
            var lower = theName.slice(1);
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