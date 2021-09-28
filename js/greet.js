function GreetMe() {
    let storedName = '';
    let storedLang = '';
    let greetMe = '';
    let fullName = '';
    let checkNameMessage = '';
    let checkNumberMessage = '';
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
        if (checkName() && ! checkNumber()) {
            let upper = storedName.charAt(0).toUpperCase();
            let lower = storedName.slice(1).toLowerCase();
            fullName = upper + lower;
        }
    }

    function getFullName() {
        return fullName;
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


    /* COUNTER
    In localStorage everything is stored as a string. So we use the number method to convert it first to a  number
    
    function greetingsCounter() {
        //ADD CLICKS
        if (localStorage['countClicks']) {
            localStorage['countClicks'] = Number(localStorage['countClicks']) + 1;
        } else {
            localStorage['countClicks'] = 1;
        }
    }
    
    function getCounter() {
        return localStorage.getItem('countClicks'); //returns a string
    }*/

    return {
        setName,
        checkName,
        checkNumber,
        makeName,
        getFullName,
        getNameErrorMessage,
        getNumberErrorMessage,
        setLang,
        checkLang,
        getLang,
        getLangErrorMessage,
        displayGreeting,
        greetingsCounter,
        getCounter
    }
}