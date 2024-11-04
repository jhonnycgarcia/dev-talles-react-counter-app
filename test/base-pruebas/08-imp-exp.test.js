import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroesData from '../../src/data/heroes';


describe('Pruebas en 08-imp-exp.js', () => {


    test('getHeroeById debe retornar un héroe por el ID', () => {
        const testHero = {
            id: 1,
            name: 'Batman',
            owner: 'DC'
        };
        const hero = getHeroeById( testHero.id );
        expect( hero ).toEqual( testHero );
    });

    test('getHeroeById debe retornar undefined si el ID no existe', () => {
        const id = 100;
        const hero = getHeroeById( id );
        // expect( hero ).toBeUndefined();
        expect( hero ).toBeFalsy();
    });

    test('getHeroesByOwner debe regresar listado de heroes de DC', () => {
        const owner = 'DC';
        const testHeroes = heroesData.filter( (hero) => hero.owner === owner );
        const heroes = getHeroesByOwner( owner );
        expect( heroes.length ).toBe( testHeroes.length );
        expect( heroes ).toEqual( testHeroes );
    });

    test('getHeroesByOwner debe regresar listado de heroes de Marvel', () => {
        const owner = 'Marvel';
        const testHeroes = heroesData.filter( (hero) => hero.owner === owner );
        const heroes = getHeroesByOwner( owner );
        expect( heroes.length ).toBe( testHeroes.length );
        expect( heroes ).toEqual( testHeroes );
    });

});