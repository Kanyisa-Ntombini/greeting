describe('Greetings function:' , 
    function() {
        it ('should check if the right name is stored', 
            function () {
                let testGreeting = GreetMe();
                testGreeting.setName('Autumn');

                assert.deepEqual('Autumn', testGreeting.getName());
            }
        );
    }
);