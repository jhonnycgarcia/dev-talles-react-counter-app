import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Pruebas en 07-deses-arr.js', () => {


    test('Debe de retornar un string y un número', () => {
        const testArr = ['ABC', 123];
        const [ letras, numeros ] = retornaArreglo();

        // expect( testArr ).toStrictEqual( [ letras, numeros ] );

        // expect( letras ).toBe( testArr[0] );
        // expect( numeros ).toBe( testArr[1] );

        // expect( typeof letras ).toBe( 'string' );
        // expect( typeof numeros ).toBe( 'number' );

        expect( letras ).toEqual( expect.any(String) );
        expect( numeros ).toEqual( expect.any(Number) );


    });

});