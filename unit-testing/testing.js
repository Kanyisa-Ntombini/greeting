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

        it ('should check if the right name is stored', 
            function () {
                let testGreeting = GreetMe();
                testGreeting.setName('Autumn');

                assert.deepEqual('Autumn', testGreeting.getName());
            }
        );

        it ('should check if a number is entered', 
            function () {
                let testGreeting = GreetMe();
                testGreeting.setName(23);

                assert.deepEqual(true, testGreeting.checkNumber());
            }
        );

        it ('should ensure only the first letter is in uppercase', 
            function () {
                let testGreeting = GreetMe();
                testGreeting.setName('autUMn'.toLocaleLowerCase());
            
                assert.deepEqual('Autumn', testGreeting.getName());
            }
        );

        it ('should check if a language was selected', 
            function () {
                let testGreeting = GreetMe();
                testGreeting.setLang('samoa');
                assert.deepEqual(true, testGreeting.checkLanguage());

                let testGreeting2 = GreetMe();
                testGreeting2.setLang();
                assert.deepEqual(false, testGreeting2.checkLanguage());
            }
        );

        //Test for greeting
        //Test for counter
    }
);