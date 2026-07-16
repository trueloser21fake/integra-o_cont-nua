const { expect } = require("chai");
const { dividir } = require("../src/services/CalculadoraService");
const calculadora  = require("../src/models/Calculadora");
const sinon = require("sinon");


describe('Teste da calculadora no services com Mock', () =>
{
    afterEach(() =>{
        //Mock
        sinon.restore()

    it('divisao service', () => {
        const stub = sinon.stub(calculadora,'dividir');
        stub.returns(5);


        const resultado = dividir(10,2);
        sinon.assert.calledOnce(stub)
        sinon.assert.calledWithExactly(stub,10,2);

        expect(resultado).to.equal(5)
    })

    it('deve lançar erro ao dividir por zero', () =>{
        const stub = sinon.stub(calculadora,'dividir');
        sinon.assert.notCalled(stub);

        expect(() =>{
            dividir(1,0)
        }).to.throw('O divisor não pode ser 0')
    })
})

})