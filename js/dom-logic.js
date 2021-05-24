//INSTANCE OF THE FACTORY FUNCTION
var myGreeting = GreetMe();
var namesGreeted = {'hey': 4};

var outCounterRefresh = document.querySelector('.count');
outCounterRefresh.innerHTML = myGreeting.getCounter();

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

    //HTML STUFF
    var enterName = document.querySelector('.enter-name').value.toLowerCase();
    var langChosen = document.querySelector('.lang-btn:checked');
    var errorName = document.querySelector('.err-name');
    var errorLang = document.querySelector('.err-lang');
    var outGreet = document.querySelector('.greeting');
    var outCounter = document.querySelector('.count');

    /* INPUT NAME */
    myGreeting.setName(enterName);

    /* PROCESS */
    //Check if name is entered
    if (!myGreeting.checkName()) {
        myGreeting.nameErrorMessage();
        errorName.innerHTML = myGreeting.getNameError();
    } 

    //Check if number is entered
    if (myGreeting.checkNumber()) {
        myGreeting.numberErrorMessage();
        errorName.innerHTML = myGreeting.getNumberError();
    }

    //Check if language is entered
    myGreeting.setLang(langChosen);
    if(myGreeting.checkName() && !myGreeting.checkNumber()) {
        if (myGreeting.checkLanguage()) {
            myGreeting.langErrorMessage();
            myGreeting.getLanguage();
            myGreeting.getName();
            outGreet.innerHTML = myGreeting.showGreeting();

            //COUNTER & CHECK IF NAME REPEATS

            let namesGreetedStored = JSON.parse(localStorage.getItem('keys'));
            console.log(namesGreetedStored);

            //does names object exist
            if (namesGreetedStored === null) {
                myGreeting.greetingsCounter();
                //create the names object
                let obj = {};
                obj[enterName] = 0;
                localStorage['keys'] = JSON.stringify(obj);
                //alert('one')
                
            } else {
                //alert('two');
                /* STORE names object in local storage */
                if (namesGreetedStored[enterName] === undefined) {
                    namesGreetedStored[enterName] = 0;
                    console.log(namesGreetedStored);
                    localStorage['keys'] = JSON.stringify(namesGreetedStored);
                    
                    myGreeting.greetingsCounter();
                }
            }
            outCounter.innerHTML = myGreeting.getCounter();

        } else {
            myGreeting.langErrorMessage();
            errorLang.innerHTML = myGreeting.getLangError();
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
    var radioBtn = document.querySelector('.lang-btn');
    radioBtn.checked = false;
}
resetBtn.addEventListener('click', resetFuncEvent);