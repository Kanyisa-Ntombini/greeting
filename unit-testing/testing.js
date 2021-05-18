describe('Greetings function:' , 
    function() {
        it ('should check if the right name is stored', 
            function () {
                let testGreeting = GreetMe();
                testGreeting.setName('Autumn');

                assert.deepEqual('Autumn', testGreeting.getName());
            }
        );

        it ('should check if the right language is stored', 
            function () {
                let testGreeting = GreetMe();
                testGreeting.chooseLanguage('english');
                assert.deepEqual('Hello', testGreeting.getLanguage());

                let testGreeting2 = GreetMe();
                testGreeting2.chooseLanguage('samoa');
                assert.deepEqual('Talofa', testGreeting2.getLanguage());

                let testGreeting3 = GreetMe();
                testGreeting3.chooseLanguage('sotho');
                assert.deepEqual('Dumela', testGreeting3.getLanguage());
            }
        );

        it ('should check if a person is greeted', 
            function () {
                let testGreeting = GreetMe();
                testGreeting.setName('Autumn');
                testGreeting.chooseLanguage('english');
                assert.deepEqual('Hello, Autumn', testGreeting.getGreeting());

                let testGreeting2 = GreetMe();
                testGreeting2.setName('Spring');
                testGreeting2.chooseLanguage('samoa');
                assert.deepEqual('Talofa, Spring', testGreeting2.getGreeting());

                let testGreeting3 = GreetMe();
                testGreeting3.setName('Summer');
                testGreeting3.chooseLanguage('sotho');
                assert.deepEqual('Dumela, Summer', testGreeting3.getGreeting());
            }
        );

        it ('should check if the right number of people are counted', 
            function () {
                let testGreeting = GreetMe();

                testGreeting.setName('Autumn');
                testGreeting.chooseLanguage('english');
                testGreeting.createNamesObj();

                testGreeting.setName('Autumn');
                testGreeting.chooseLanguage('samoa');
                testGreeting.createNamesObj();

                testGreeting.setName('Autumn');
                testGreeting.chooseLanguage('sotho');
                testGreeting.createNamesObj();

                testGreeting.setName('Ocean');
                testGreeting.chooseLanguage('sotho');
                testGreeting.createNamesObj();

                testGreeting.setName('Wind');
                testGreeting.chooseLanguage('samoa');
                testGreeting.createNamesObj();

                assert.deepEqual('3', testGreeting.getCounter());

            }
        );
    }
);