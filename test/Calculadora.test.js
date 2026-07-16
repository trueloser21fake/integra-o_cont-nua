const { expect } = require("chai");
const { somar, dividir, subtrair } = require("../src/models/Calculadora");




describe('Testes da calculadora', () => {

    it('Deve somar dois números', () => {
        const resultado = somar(10,10);
        expect(resultado).to.equal(20);
    }),
    it('Deve subtrair', () => {
        const resultado = subtrair(10,10);
        expect(resultado).to.equal(0);
    }),
    it('Deve dividir', () => {
        const resultado = dividir(10,2);
        expect(resultado).to.equal(5);
    })

})