import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";


describe('Pruebas en FirstApp.jsx', () => {

    // test('debe hacer match con el snapshot', () => {
    //     const title = 'Hola Mundo';
    //     const { container } = render(<FirstApp title={ title } />);
    //     expect( container ).toMatchSnapshot();
    // });

    test('debe de mostrar el titulo en un h1', () => {
        const title = 'Hola Hola Mundo';
        const { container, getByText, getByTestId } = render(<FirstApp title={ title } />);
        expect( getByText( title ) ).toBeTruthy();

        // const h1 = container.querySelector('h1');
        // expect( h1 ).toBeTruthy();
        // // expect( h1.textContent ).toBe( title );
        // expect( h1.innerHTML ).toContain( title );

        expect( getByTestId('test-title') ).toBeTruthy();
        expect( getByTestId('test-title').textContent ).toBe( title );
    });


    test('debe de mostrar el subtítulo enviado como prop', () => {
        const title = 'Hola Mundo';
        const subtitle = 'Test Subtitle';
        const { getByText } = render(<FirstApp title={ title } subtitle={ subtitle } />);
        expect( getByText( subtitle ) ).toBeTruthy();
        expect( getByText( subtitle ).textContent ).toBe( subtitle );
    });

});