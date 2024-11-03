import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en 02-template-string.js', () => {

    test('getSaludo debe retornar "Hola Pedro"', () => {
        const nombre   = 'Pedro';
        const saludo   = getSaludo( nombre );
        expect( saludo ).toBe( `Hola ${ nombre }` );
    });

});