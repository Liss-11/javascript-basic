        //Ejercicio 1
        console.log("Hola Mundo");
        //Ejercicio 2
        alert("Me llamo Alissia");
        //Ejercicio 3
        var nombre = "Alissia", apellido = "Frolova";
        console.log(nombre + " " + apellido);
        //Ejercicio 4
        var num1 = 5, num2 = 7;
        var suma = num1 + num2;
        console.log("La suma entre " + num1 + " y " + num2 + " es " + suma);
        //Ejercicio 5 - suposanty, que nomes poden posar números del 0 al 10!
        var nota_examen = 4.6;

        if(nota_examen<5){
            alert("Ohh has suspendido el examen con un " + nota_examen);
        }
        if(nota_examen>=5){
            alert("Felicidades, has aprobado el examen con un " + nota_examen);
        }
        //Ejercicio 6
        var original = "Tinc un cotxe de color blau";
        
        var verd = original.replace("blau", "verd");
            console.log(verd);
        var u = original.replace(/[o]/gi, "u");
            console.log(u);
        //Ejercicio 7
        var llistat = ["taula", "cafdira", "ordinador", "llibreta"];

        for (var i=0; i<llistat.length; i++){
            console.log("L'objecte " + llistat[i] + " està a la posició " + i + ".");
        }
        //Ejercicio 8
        
        function calculadora (operador, valor1, valor2){
            if (typeof operador == "string" && typeof valor1!=="NaN" && typeof valor2!=="NaN"){
                if(operador == "suma"){
                    console.log(valor1+valor2);
                    }else if (operador == "resta"){
                        console.log(valor1 - valor2);
                    }else if (operador == "multiplicacio"){
                        console.log(valor1+valor2);
                    }else if(operador == "divisio"){
                        if (valor2 == 0) {
                                console.log("No se puede dividir por 0");
                            } else{
                                console.log(valor1 / valor2);
                            }
                    }else{
                        console.log("La operacion solicitada no existe");
                    }
                } else {
                console.log("Los datos introducidos son incorrectos");
            }
            }
            /* calculadora ("resta", 40, 20); */

            var resultat = calculadora("resta", 40, 20);

        //Ejercicio 8 bis
        function calculadora1(operador, valor1, valor2) {
                if (typeof operador == "string" && typeof valor1 !== "NaN" && typeof valor2 !== "NaN") {
                        if (operador == "suma") {
                            return valor1 + valor2;
                        } else if (operador == "resta") {
                            return valor1 - valor2;
                        } else if (operador == "multiplicacio") {
                            return valor1 + valor2;
                        } else if (operador == "divisio") {
                            if (valor2 == 0) {
                                return "No se puede dividir por 0";
                            } else{
                                return valor1 / valor2;
                            }
                    } else {
                        return "La operacion solicitada no existe";
                    }
                } else {
                    return "Los datos introducidos son incorrectos";
                }
            }
            /* calculadora ("resta", 40, 20); */

            var resultat1 = calculadora1("divisio", 40, 0);
            console.log(resultat1);