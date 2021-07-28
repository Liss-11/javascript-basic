document.getElementById("display").value = 0;

var num1 = 0;
var operador = "";
var num2 = 0;
var numero = "";
var acumulado = 0;
var contador = 0;

    
function display(signo) { 
    
        document.getElementById("display").value = numero + signo;
        numero += signo;
        acumulado = parseInt(numero);

}

function operacion(operar) { 

    if (contador == 0) {
        num1 = acumulado;
        numero = "";
        operador = operar;
        document.getElementById("display").value = acumulado;
        acumulado = 0;
        contador++;
    
    } else if (contador>0) {
        
        acumulado=parseInt(numero);
        num2 = acumulado;
        operador = this.operador;
        resultado();
        operador = operar;
        num1 = acumulado;
        numero = "";
        contador++;
    }
       
}
/* funcion segunda_operacion(){ 

} */

function calculadora(operador, num1, num2) { 
    if (operador == 'division' && num2 == 0) { 

    /*  acumulado = "No se puede dividir por 0"; */
         acumulado = "ERROR";
    }else{
    
    switch (operador) { 
        case 'suma':
            acumulado = num1 + num2;
            break;
        
        case 'resta':
            acumulado = num1 - num2;
            break;
        case 'multiplicacion':
            acumulado = num1 * num2;
            break;
        case 'division':
            acumulado = num1 / num2;
            break;
        default:
            acumulado = "";
    }
        }
    
} 

function resultado() { 
    num2 = acumulado;
    calculadora(operador, num1, num2);
    document.getElementById("display").value = acumulado;
    numero = "";

    contador = 0;
    
    
}

function ac() { 
    acumulado = 0;
    document.getElementById("display").value = acumulado;
    numero = "";   
    contador = 0;
}

