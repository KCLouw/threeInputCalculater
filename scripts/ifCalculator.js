function calCul(){
    let inputOne =  parseFloat(document.getElementById("inputOne").value);
    let inputTwo = parseFloat(document.getElementById("inputTwo").value) ;
    let operand = document.getElementById("operand").value;

    if(operand === "+"){
        document.getElementById("answer").innerHTML = inputOne + inputTwo;
    }else if(operand === "-"){
        document.getElementById("answer").innerHTML = inputOne - inputTwo;
    }else if(operand === "*"){
        document.getElementById("answer").innerHTML = inputOne * inputTwo;
    }else if(operand === "/"){
        document.getElementById("answer").innerHTML = inputOne / inputTwo;
    }else{
        document.getElementById("answer").innerHTML = "Please choose a valid operator";
    };
};