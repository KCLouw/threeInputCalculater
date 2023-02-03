function calCul(){
    let inputOne = parseFloat(document.getElementById("inputOne").value);
    let inputTwo = parseFloat(document.getElementById("inputTwo").value);
    let operand = document.getElementById("operand").value;
    switch(operand){
        case '+' : document.getElementById("answer").innerHTML = inputOne + inputTwo;
            break;
        case '-' : document.getElementById("answer").innerHTML = inputOne - inputTwo;
            break;
        case '*' : document.getElementById("answer").innerHTML = inputOne * inputTwo;
            break;
        case '/' : document.getElementById("answer").innerHTML = inputOne / inputTwo;
            break;
        default: document.getElementById("answer").innerHTML = "Please enter a valid operand";
            break;
    };
};