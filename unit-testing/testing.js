describe('Greetings function:' , 
    function() {
        it ('should check if a name is entered', 
            function () {
                let testGreeting = GreetMe();
                testGreeting.setName('');
                assert.deepEqual(false, testGreeting.checkName());

                let testGreeting2 = GreetMe();
                testGreeting2.setName('Grapes');
                assert.deepEqual(true, testGreeting2.checkName());
            }
        );

        it ('should ensure only the first letter is in uppercase', 
            function () {
                let testGreeting = GreetMe();
                testGreeting.setName('autUMn');
                testGreeting.checkName();
                testGreeting.checkNumber();
                testGreeting.makeName();
                assert.deepEqual('Autumn', testGreeting.getFullName());
            }
        );

        it ('should check if a number is entered', 
            function () {
                let testGreeting = GreetMe();
                testGreeting.setName(23);
                assert.deepEqual(true, testGreeting.checkNumber());

                let testGreeting2 = GreetMe();
                testGreeting.setName('Apple');
                assert.deepEqual(false, testGreeting.checkNumber());
            }
        );

        it ('should check if error messages are generated', 
            function () {
                let testGreeting = GreetMe();
                testGreeting.setName('');
                testGreeting.checkName();
                testGreeting.checkNumber();
                assert.deepEqual('Please enter a name', testGreeting.getNameErrorMessage());
            
                let testGreeting2 = GreetMe();
                testGreeting2.setName(44);
                testGreeting2.checkNumber();
                assert.deepEqual('Please do not enter a number', testGreeting2.getNumberErrorMessage());
            }
        );

        it ('should check if a language was selected', 
            function () {
                let testGreeting = GreetMe();
                testGreeting.setLang('');
                testGreeting.checkLang();
                testGreeting.getLang();
                assert.deepEqual('Please choose a language', testGreeting.getLangErrorMessage());
            }
        );

        /*

        

        //Test for greeting
        it ('should check if the right greeting is made', 
            function () {
                let testGreeting = GreetMe();
                testGreeting.setName('Spring');
                testGreeting.checkName();
                testGreeting.checkNumber();
                testGreeting.makeErrorMessages();
                testGreeting.setLang('sotho');
                testGreeting.checkLang();
                testGreeting.getLang();
                assert.deepEqual('Dumela Spring!', testGreeting.displayGreeting());

                let testGreeting2 = GreetMe();
                testGreeting2.setName('Summer');
                testGreeting2.checkName();
                testGreeting2.checkNumber();
                testGreeting2.makeErrorMessages();
                testGreeting2.setLang('samoa');
                testGreeting2.checkLang();
                testGreeting2.getLang();
                assert.deepEqual('Talofa Summer!', testGreeting2.displayGreeting());
            
                let testGreeting3 = GreetMe();
                testGreeting3.setName('Winter');
                testGreeting3.checkName();
                testGreeting3.checkNumber();
                testGreeting3.makeErrorMessages();
                testGreeting3.setLang('english');
                testGreeting3.checkLang();
                testGreeting3.getLang();
                assert.deepEqual('Hello Winter!', testGreeting3.displayGreeting());
      
            }
        );*/

        //Test for counter
    }
);