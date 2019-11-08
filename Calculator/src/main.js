var valueOne;
var valueTwo;
var status;



function loadPage() {
    document.getElementById('calculateAnswer').disabled = true;
    document.getElementById('calculateButtonPlus').disabled = true;
    document.getElementById('calculateButtonMultiply').disabled = true;
    document.getElementById('calculateButtonDividedBy').disabled = true;
    document.getElementById('calculateButtonMinus').disabled = true;
}

function numberButtons(digit) {
    document.getElementById('display').appendChild(document.createTextNode(digit));
    disableButtons()
}




function calculatePlus() {
    status = "plus";
    valueOne = parseInt(document.getElementById('display').innerHTML, 10);
    document.getElementById('display').innerHTML = "";
    document.getElementById('calculateButtonPlus').style.backgroundColor = 'grey';
    document.getElementById('calculateButtonPlus').style.color = 'black';
    document.getElementById('calculateButtonMultiply').disabled = true;
    document.getElementById('calculateButtonDividedBy').disabled = true;
    document.getElementById('calculateButtonMinus').disabled = true;
    document.getElementById('calculateAnswer').disabled = true;
}

function calculateMinus() {
    status = "minus";
    valueOne = parseInt(document.getElementById('display').innerHTML, 10);
    document.getElementById('display').innerHTML = "";
    document.getElementById('calculateButtonMinus').style.backgroundColor = 'grey';
    document.getElementById('calculateButtonMinus').style.color = 'black';
    document.getElementById('calculateButtonMultiply').disabled = true;
    document.getElementById('calculateButtonDividedBy').disabled = true;
    document.getElementById('calculateButtonPlus').disabled = true;
    document.getElementById('calculateAnswer').disabled = true;
}

function calculateMultiply() {
    status = "multiply";
    valueOne = parseInt(document.getElementById('display').innerHTML, 10);
    document.getElementById('display').innerHTML = "";
    document.getElementById('calculateButtonMultiply').style.backgroundColor = 'grey';
    document.getElementById('calculateButtonMultiply').style.color = 'black';
    document.getElementById('calculateButtonPlus').disabled = true;
    document.getElementById('calculateButtonDividedBy').disabled = true;
    document.getElementById('calculateButtonMinus').disabled = true;
    document.getElementById('calculateAnswer').disabled = true;
}

function calculateDividedBy() {
    status = "divide";
    valueOne = parseInt(document.getElementById('display').innerHTML, 10);
    document.getElementById('display').innerHTML = "";
    document.getElementById('calculateButtonDividedBy').style.backgroundColor = 'grey';
    document.getElementById('calculateButtonDividedBy').style.color = 'black';
    document.getElementById('calculateButtonMultiply').disabled = true;
    document.getElementById('calculateButtonPlus').disabled = true;
    document.getElementById('calculateButtonMinus').disabled = true;
    document.getElementById('calculateAnswer').disabled = true;
}

function calculateAnswer() {
    valueTwo = parseInt(document.getElementById('display').innerHTML, 10);

    if (status == "plus") {
        var Answer = valueOne + valueTwo
    } else if (status == "minus") {
        var Answer = valueOne - valueTwo
    } else if (status == "multiply") {
        var Answer = valueOne * valueTwo
    } else {
        var Answer = valueOne / valueTwo
    }
    document.getElementById('display').innerHTML = Answer;
    document.getElementById('calculateButtonPlus').style.backgroundColor = 'orange';
    document.getElementById('calculateButtonPlus').style.color = 'white';
    document.getElementById('calculateButtonMinus').style.backgroundColor = 'orange';
    document.getElementById('calculateButtonMinus').style.color = 'white';
    document.getElementById('calculateButtonMultiply').style.backgroundColor = 'orange';
    document.getElementById('calculateButtonMultiply').style.color = 'white';
    document.getElementById('calculateButtonDividedBy').style.backgroundColor = 'orange';
    document.getElementById('calculateButtonDividedBy').style.color = 'white';
}

function clearDisplay() {
    document.getElementById('display').innerHTML = " ";
    valueOne = null;
    valueTwo = null;
}

function disableButtons() {
    document.getElementById('calculateAnswer').disabled = false;
    document.getElementById('calculateButtonMultiply').disabled = false;
    document.getElementById('calculateButtonPlus').disabled = false;
    document.getElementById('calculateButtonMinus').disabled = false;
    document.getElementById('calculateButtonDividedBy').disabled = false;
}