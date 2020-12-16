var tipSlider = document.querySelector(".tipSlider");
var tipPercentage = document.querySelector(".tip-percentage");
var inputValue = document.querySelector(".input-value");
var tipDisplay = document.querySelector(".tip-displayy");
var displayTotalAmount = document.querySelector(".display-total-amount");
var splitSlider = document.querySelector(".splitSlider");
var peopleDisplay = document.querySelector(".people-display");
var bill = document.querySelector(".bill");
var tip = document.querySelector(".tip");



function sliderEvent(){
    if(inputValue.value===""){
        var value=prompt("Enter the Bill Amount!");
        inputValue.value=value;
    }
    tipPercentage.innerHTML=tipSlider.value+"%";
    var tipAmount = (inputValue.value*tipSlider.value)/100;
    tipDisplay.innerHTML = "$"+tipAmount;
    var total = tipAmount + parseInt(inputValue.value);
    displayTotalAmount.innerHTML = "$"+total;
    console.log(typeof(tipAmount));
    console.log(typeof(inputValue.value));

    // split calculation
    var billEach= (Math.round((total/splitSlider.value)*10))/10;
    var tipEach=Math.round((tipAmount/splitSlider.value)*10)/10;
    bill.innerHTML = "$"+billEach;
    tip.innerHTML = "$"+tipEach;

}

function splitEvent(){
    peopleDisplay.innerHTML = splitSlider.value+" person";

}

function CallTwoFunctions(){
    splitEvent();
    sliderEvent();
}
console.log(typeof(inputValue.value));
inputValue.addEventListener("input",sliderEvent);
tipSlider.addEventListener("change",sliderEvent);
splitSlider.addEventListener("change",CallTwoFunctions);