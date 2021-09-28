function GreetMe() {
    let storedName = '';
    let storedLang = '';
    let greetMe = '';
    let fullName = '';
    let checkNameMessage = '';
    let checkNumberMessage = 'original';
    let langErrorMessage = '';
    /*let checkLangMessage = '';
    let langInputChecked = '';
    let langInput;
    */

    //Enter the name
    function setName(name) {
        storedName = name;
    }

    function checkName() {
        return storedName.length > 0;
    }

    function checkNumber() { //gives true if it is a number
        return /\d/.test(storedName);
    }

    function getNameErrorMessage() {
        if (! checkName()) {
            return 'Please enter a name';
        }
    }

    function getNumberErrorMessage() {
        if (checkNumber()) {
            return 'Please do not enter a number';
        }
    }

    function makeName() {
        if (checkName() && checkNumber()) {
            let upper = storedName.charAt(0).toUpperCase();
            let lower = storedName.slice(1).toLowerCase();
            fullName = upper + lower;
        }
    }

    //Choose the language
    function setLang(lang) {
        storedLang = lang;
    }

    function checkLang() {
        return storedLang.length > 0;
    }

    function getLang() {
        if (checkLang()) {
            if (storedLang == 'sotho') {
                greetMe = 'Dumela';
            } else if (storedLang == 'samoa') {
                greetMe = 'Talofa';
            } else if (storedLang == 'english') {
                greetMe = 'Hello';
            }  
        } else {
            langErrorMessage = 'Please choose a language';
        }
    }

    function getLangErrorMessage() {
        return langErrorMessage;
    }

    //Display greeting
    function displayGreeting() {
        if (checkName() && ! checkNumber() && checkLang()) {
            return greetMe + ' ' + fullName + '!';
        } else {
            return 'Please type in the name and choose a language again';
        }
    }

    /* CHECKING IF A NAME HAS BEEN INSERTED */
    /*function checkName() {
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
    

    function showGreeting() {
        return greetMe  + ', ' + getName();
    }

    /* COUNTER */
    /*function greetingsCounter() {
        //ADD CLICKS
        if (localStorage['countClicks']) {
            localStorage['countClicks'] = Number(localStorage['countClicks']) + 1;
        } else {
            localStorage['countClicks'] = 1;
        }
    }
    
    function getCounter() {
        return localStorage.getItem('countClicks');
    }*/

    return {
        setName,
        checkName,
        checkNumber,
        makeName,
        getNameErrorMessage,
        getNumberErrorMessage,
        setLang,
        checkLang,
        getLang,
        getLangErrorMessage,
        displayGreeting
        /*checkName,
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
        
        showGreeting*/
    }
}