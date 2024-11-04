import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";


describe('Pruebas en 09-promesas.js', () => {

    test('getHeroeByIdAsync debe retornar un héroe por el ID', (done) => {
        const id = 1;
        getHeroeByIdAsync( id )
            .then( (hero) => {
                expect( hero.id ).toBe( id );
                done();
            })
            .catch( done.fail );
    });

    test('getHeroeByIdAsync debe obtener un error si el ID no existe', (done) => {
        const id = 100;
        getHeroeByIdAsync( id )
            .then( done.fail )
            .catch((err) => {
                console.log(err);
                expect( err ).toBe( 'No se pudo encontrar el héroe ' + id );
                done();
            });
    });

});