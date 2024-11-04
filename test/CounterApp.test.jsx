import { fireEvent, render, screen } from "@testing-library/react";
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

    test('debe incrementar el valor con el botón "+1"', () => {
        const result = (counterValue + 1).toString();
        render(<CounterApp value={ counterValue } />);
        fireEvent.click( screen.getByText('+1') );
        expect( screen.getByText('+1') ).toBeTruthy();
        expect( screen.getByText(result) ).toBeTruthy();
        expect( screen.getByRole('heading', { level: 2 }).textContent ).toContain( result );
    });

    test('debe decrementar el valor con el botón "-1"', () => {
        const result = (counterValue - 1).toString();
        render(<CounterApp value={ counterValue } />);
        fireEvent.click( screen.getByText('-1') );
        expect( screen.getByText('-1') ).toBeTruthy();
        expect( screen.getByText(result) ).toBeTruthy();
        expect( screen.getByRole('heading', { level: 2 }).textContent ).toContain( result );
    });

    test('debe resetear el valor con el botón "Reset"', () => {
        const result = '0';
        render(<CounterApp value={ 0 } />);
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );

        fireEvent.click( screen.getByRole('button', { name: 'btn-reset' }) );

        expect( screen.getByText('Reset') ).toBeTruthy();
        // screen.debug();
        expect( screen.getByText(result) ).toBeTruthy();
        expect( screen.getByRole('heading', { level: 2 }).textContent ).toContain( result );
    });

});