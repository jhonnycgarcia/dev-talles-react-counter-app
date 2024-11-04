import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";


describe('Pruebas en FirstApp2.jsx', () => {

    const title = 'Hola Mundo';
    const subtitle = 'Test Subtitle';

    test('debe hacer match con el snapshot', () => {
        const { container } = render(<FirstApp title={ title } />);
        expect( container ).toMatchSnapshot();
    });

    test('debe de mostrar el texto "Hola Mundo"', () => {
        render(<FirstApp title={ title } />);
        expect( screen.getByText( title ) ).toBeTruthy();
    });

    test('debe de mostrar el titulo "Hola Mundo" en un h1', () => {
        render(<FirstApp title={ title } />);
        expect( screen.getByRole('heading', { level: 1 }) ).toBeTruthy();
        expect( screen.getByRole('heading', { level: 1 }).textContent ).toBe( title );
    });

    test('debe de mostrar el subtítulo enviado como prop', () => {
        render(<FirstApp title={ title } subtitle={ subtitle } />);
        expect( screen.getByText( subtitle ) ).toBeTruthy();
    });

});