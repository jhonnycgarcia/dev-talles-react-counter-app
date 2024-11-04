import { render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";


describe('Pruebas en CounterApp.jsx', () => {

    const counterValue = 100;

    test('debe hacer match con el snapshot', () => {
        const { container } = render(<CounterApp value={ counterValue } />);
        expect( container ).toMatchSnapshot();
    });

    test('debe de mostrar el valor incial', () => {
        render(<CounterApp value={ counterValue } />);
        expect( screen.getByRole('heading', { level: 2 }) ).toBeTruthy();
        expect( screen.getByRole('heading', { level: 2 }).textContent ).toContain( counterValue.toString() );
    });

});