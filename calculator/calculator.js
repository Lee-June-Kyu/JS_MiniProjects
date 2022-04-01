const resultArea = document.querySelector(".resultArea");
const plusButton = document.querySelector("#plusButton");
const minusButton = document.querySelector("#minusButton");
const divisionButton= document.querySelector("#divisionButton");
const multiplyButton = document.querySelector("#multiplyButton");
const button0 = document.querySelector("#button0");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const button5 = document.querySelector("#button5");
const button6 = document.querySelector("#button6");
const button7 = document.querySelector("#button7");
const button8 = document.querySelector("#button8");
const button9 = document.querySelector("#button9");
const dot = document.querySelector("#dotButton");
const cancel = document.querySelector("#cancelButton");
const equl = document.querySelector("#equalButton");

let result = "";

button0.addEventListener('click',function(){
    result = result + "0";
    resultArea.textContent = result;
});
button1.addEventListener('click',function(){
    result = result + "1";
    resultArea.textContent = result;
});
button2.addEventListener('click',function(){
    result = result + "2";
    resultArea.textContent = result;
});
button3.addEventListener('click',function(){
    result = result + "3";
    resultArea.textContent = result;
});
button4.addEventListener('click',function(){
    result = result + "4";
    resultArea.textContent = result;
});
button5.addEventListener('click',function(){
    result = result + "5";
    resultArea.textContent = result;
});
button6.addEventListener('click',function(){
    result = result + "6";
    resultArea.textContent = result;
});
button7.addEventListener('click',function(){
    result = result + "7";
    resultArea.textContent = result;
});
button8.addEventListener('click',function(){
    result = result + "8";
    resultArea.textContent = result;
});
button9.addEventListener('click',function(){
    result = result + "9";
    resultArea.textContent = result;
});
dot.addEventListener('click',function(){
    result = result + ".";
    resultArea.textContent = result;
});
cancel.addEventListener('click', function(){
    result = "0";
    resultArea.textContent = result;
});
equl.addEventListener('click', function(){
    let answer = eval(result);
    resultArea.textContent = answer;
    result = "";
});

plusButton.addEventListener('click', function(){
    result = result+"+";
    resultArea.textContent = result;
})
minusButton.addEventListener('click', function(){
    result = result+"-";
    resultArea.textContent = result;
}) 
divisionButton.addEventListener('click' , function(){
    result = result + "/";
    resultArea.textContent = result;
})
multiplyButton.addEventListener('click' , function(){
    result = result+"*";
    resultArea.textContent = result;
})