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

                assert.deepEqual(false, testGreeting.checkNumber());
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

        it ('should check the right language is selected', 
        function () {
            let testGreeting2 = GreetMe();
            assert.deepEqual('Talofa', testGreeting2.getLanguage('samoa'));

            let testGreeting3 = GreetMe();
            assert.deepEqual('Dumela', testGreeting3.getLanguage('sotho'));

            let testGreeting4 = GreetMe();
            assert.deepEqual('Hello', testGreeting4.getLanguage('english'));
        }
    );
    }
);