function GreetCount () {
    function greet() {
        counter ++;
    }

    return {
        greet
    }
}

const greetbtn = document.querySelector(".greet-me");
var counter = 0;

function greetEvent() {
    alert("Hi");

    var greeting = GreetCount();
}

greetbtn.addEventListener("click", greetEvent);