describe('Greetings function:' , 
    function() {
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
                testGreeting.setName('autUMn');

                assert.deepEqual('Autumn', testGreeting.getName());
            }
        );

        it ('should check if a language was selected', 
            function () {
                let testGreeting = GreetMe();
                assert.deepEqual(true, testGreeting.checkLanguage('samoa'));

                let testGreeting2 = GreetMe();
                assert.deepEqual(false, testGreeting2.checkLanguage(null));
            }
        );
    }
);