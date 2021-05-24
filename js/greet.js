function GreetMe() {
    var theNameInput = '';
    var checkNameMessage = '';
    var checkNumberMessage = '';
    var checkLangMessage = '';
    var langInputChecked = '';
    var langInput;
    var greetMe = '';

    function setName(name) {
        theNameInput = name;
    }

    /* CHECKING IF A NAME HAS BEEN INSERTED */
    function checkName() {
        return theNameInput.length > 0;
    }

    function nameErrorMessage () {
        if (checkName()) {
            checkLanguage();
        } else {
            checkNameMessage = 'Please enter a name';
        }
    }

    function getNameError() {
        return checkNameMessage;
    }

    function checkNumber() {
        return /\d/.test(theNameInput);
    }

    function numberErrorMessage() {
        if (checkNumber()) {
            checkNumberMessage = 'Please do not enter a number';
        } else {
            checkLanguage();
        }
    }

    function getNumberError() {
        return checkNumberMessage;
    }

    //LANGUAGE
    function setLang(language) {
        langInputChecked = language;
    }

    function checkLanguage() {
        return langInputChecked != null;
    }

    function langErrorMessage() {
        if (checkLanguage()) {
            langInput = langInputChecked.value;
        } else {
            checkLangMessage = 'Please choose a language';
        }
    }

    function getLangError() {
        return checkLangMessage;
    }

    function getLanguage() {
        if (langInput == 'sotho') {
            greetMe = 'Dumela';
        } else if (langInput == 'samoa') {
            greetMe = 'Talofa';
        } else if (langInput == 'english') {
            greetMe = 'Hello';
        }  
    }


    /* OUTPUT */
    function getName() {
            var upper = theNameInput.charAt(0).toUpperCase();
            var lower = theNameInput.slice(1);
            return upper + lower;
    }

    function showGreeting() {
        return greetMe  + ', ' + getName();
    }

    /* COUNTER */
    function greetingsCounter() {
        //ADD CLICKS
        if (localStorage['countClicks']) {
            localStorage['countClicks'] = Number(localStorage['countClicks']) + 1;
        } else {
            localStorage['countClicks'] = 1;
        }
    }
    
    function getCounter() {
        return localStorage.getItem('countClicks');
    }
    
    return {
        setName,
        checkName,
        nameErrorMessage,
        getNameError,
        checkNumber,
        numberErrorMessage,
        getNumberError,
        setLang,
        checkLanguage,
        langErrorMessage,
        getLangError,
        getLanguage,
        getName,
        showGreeting,
        greetingsCounter,
        getCounter
    }
}