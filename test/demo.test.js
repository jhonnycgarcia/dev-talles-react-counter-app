

describe('Demo', () => {
    test('Esta prueba no debe fallar', () => {
        const message1  = 'Hola Mundo';
        const message2 = message1.trim();
        expect( message2 ).toBe( message1 );
    });
});
