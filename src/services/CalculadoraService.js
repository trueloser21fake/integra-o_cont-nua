const calculadora = require ('../models/Calculadora');
//Geralmente as regras de negócios permanece no service

function dividir(a,b){

    if(b == 0){

        throw new Error("O divisor não pode ser 0");
    }
    
    return calculadora.dividir(a,b);

    //nunca faça isso abaixo
    //return a/b
    //return 4

}
module.exports = {
    dividir
}