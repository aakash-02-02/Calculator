var displayArea = document.getElementById('display');

function isOperator(buttonText) {
    if (buttonText == "+" || buttonText == "*" || buttonText == "-" || buttonText == "/" || buttonText == "%")
        return true;
    else
        return false;
}

function buttonClicked(buttonText) {
    if (displayArea.innerText.length >= 24) {
        return;
    }
    if (buttonText === "CLR") {
        displayArea.innerText = "0";
        return;
    }
    if (buttonText === "DEL") {
        displayArea.innerText = displayArea.innerText.slice(0, -1);
        return;
    }
    if ((buttonText === "=")) {  //catch part is not getting handled
        try {
            displayArea.innerText = eval(displayArea.innerText);
        }
        catch (error) {
            displayArea.innerText = 0;
        }
        return;
    }


    if (displayArea.innerText === "0") {
        if (buttonText == "00" || buttonText == "0") { // Don't do anything id button clicked is 0 and 00
            return;
        }

        if (buttonText == "." || isOperator(buttonText)) {    //Add 0 if first button clicked is operator &"." 
            displayArea.innerText = "0" + buttonText;
            return;
        }
        displayArea.innerText = buttonText;
    }
    else {
        if ((isOperator(displayArea.innerText[displayArea.innerText.length - 1]) && isOperator(buttonText))) {
            // Replace the operator.
            displayArea.innerText = displayArea.innerText.slice(0, -1) + buttonText;
            return;
        }
        else {
            displayArea.innerText += buttonText;
        }
    }
}