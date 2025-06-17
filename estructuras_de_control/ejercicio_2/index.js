let menu = prompt (`seleccione una operación para realizar:
1. sumar.
2. restar.
3. dividir.
4. multiplicar.`);

let num1 = prompt ("indique un numero");
let num2 = prompt ("indique un numero");


switch (menu){
    case "1":
        let suma = num1 + num2;
        console.log (`resultado de la suma es: ${suma}`);
        break;
    case "2":
        let resta = num1 - num2;
        console.log (`resultado de la suma es: ${resta}`);
        break;
    case "2":
        let division = num1 + num2;
        console.log (`resultado de la suma es: ${division}`);
        break;
    case "4":
        let multiplicar = num1 + num2;
        console.log (`resultado de la suma es: ${multiplicar}`);
        break;
    default:
        console.log (`numero no valido`);
}