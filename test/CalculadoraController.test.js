const request = require('supertest')
const {expect} = require('chai')
const app = require('../src/app')
const sinon = require('sinon')
const calculadoraService = require('../src/services/CalculadoraService')


describe('Teste api calculadora', ()=>{
    it('Calculadora deve retornar status 200 sem Mock', async ()=>{
        const resposta =  await request(app)
            .post('/calculadora/dividir')
            .send({
                a:10,
                b:2
            });

            expect(resposta.status).to.equal(200);
            expect(resposta.body.resultado).to.equal(5);
    });

     it('Calculadora deve retornar status 200 ', async ()=>{
       
        const stub = sinon.stub(calculadoraService, 'dividir');
        stub.returns(9);

        const resposta =  await request(app)
            .post('/calculadora/dividir')
            .send({
                a:90,
                b:1
            });
            
            expect(resposta.status).to.equal(200);
            expect(resposta.body.resultado).to.equal(9);

    })
})