var num1 = document.querySelector(".num1");
var num2 = document.querySelector(".num2");
var btn1 = document.querySelector(".btn1");
var btn2 = document.querySelector(".btn2");
var btn3 = document.querySelector(".btn3");
var btn4 = document.querySelector(".btn4");
var answer = document.querySelector(".answer");

btn1.addEventListener('mouseover', () => {
    btn1.style.background = "green";
});

btn1.addEventListener('mouseout', () => {
    btn1.style.background = "black";
})

btn2.addEventListener('mouseover', () => {
    btn2.style.background = "red";
});

btn2.addEventListener('mouseout', () => {
    btn2.style.background = "black";
})

btn3.addEventListener('mouseover', () => {
    btn3.style.background = "blue";
});

btn3.addEventListener('mouseout', () => {
    btn3.style.background = "black";
})

btn4.addEventListener('mouseover', () => {
    btn4.style.background = "yellow";
});

btn4.addEventListener('mouseout', () => {
    btn4.style.background = "black";
})
    function add() {
        var num1 = document.getElementById("text-box").value;
        var num2 = document.getElementById("text-box2").value;
    
        var answer = parseFloat(num1) + parseFloat(num2);
        document.getElementById("display-box").value = answer;
    }
    function sub() {
        var num1 = document.getElementById("text-box").value;
        var num2 = document.getElementById("text-box2").value;
    
        var answer = parseFloat(num1) - parseFloat(num2);
        document.getElementById("display-box").value = answer;
    }



    function mul() {
        var num1 = document.getElementById("text-box").value;
        var num2 = document.getElementById("text-box2").value;
    
        var answer = parseFloat(num1) * parseFloat(num2);
        document.getElementById("display-box").value = answer;
    }

    function div() {
        var num1 = document.getElementById("text-box").value;
        var num2 = document.getElementById("text-box2").value;
    
        var answer = parseFloat(num1) / parseFloat(num2);
        document.getElementById("display-box").value = answer;
    }