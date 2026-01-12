


function num(value){
  document.getElementById("display").innerText += value;

}
//dis
function clearDisplay(){
    document.getElementById("display").innerText= "";
}
function del(){
    let dis = document.getElementById("display");
    dis.innerText = dis.innerText.slice(0,-1); 
}



//with eval 
function cali(){
    let solu = document.getElementById("display").innerText;
    document.getElementById("display").innerText = eval(solu);
}


// function cali(){
//     let solu = 0;

//     let num1 = first;
//     let num2 = second;
//     switch(operator){
//         case "+":
//             solu = num1+num2;
//             break;

//         case "-":
//             solu = num1-num2;
//             break;

//         case "*":
//             solu = num1*num2;
//             break;

//         case "/":
//             solu = num1/num2;
//             break;

//         default:
//             solu = "Invalid input"

//     }
//     document.getElementById("display").innerText= solu;
// }



