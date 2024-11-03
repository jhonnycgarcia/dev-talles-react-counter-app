import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas en 06-deses-obj.js', () => {

    test('Nombre y edad deben ser asignados', () => {
        
        const testPerson = {
            nombreClave: 'Ironman',
            anios: 45,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        };

        const person = usContext( {
            clave: 'Ironman', 
            nombre: 'Tony', 
            edad: 45,
            rango: 'Capitán'
        });

        expect( testPerson ).toStrictEqual( person );
    });

});