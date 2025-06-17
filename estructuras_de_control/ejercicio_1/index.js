let num1 = prompt (`indique un numero`);
let num2 = prompt (`indique un numero`);

const positivoNegativo = (num1, num2) => {
    let resultado = num2 - num1;
    if (resultado >= 0 ){
        console.log (resultado)
        alert (`su resultado es ${resultado} y es un numero positivo`);
    } else {
        console.log (resultado)
        alert (`su resultado es ${resultado} y es un numero negativo`);
    }
}

if (num1 > num2){
    positivoNegativo(num1, num2);
} else {
    positivoNegativo(num1,num2);
}