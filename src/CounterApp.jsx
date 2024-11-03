import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {

    const [counter, setCount] = useState(value);

    const increment = () => {
        // setCount(counter + 1)
        setCount((prevCount) => prevCount + 1)
    }

    const decrement = () => {
        setCount((prevCount) => prevCount - 1)
    }

    const reset = () => {
        setCount(value)
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> {counter} </h2>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
            <button onClick={reset}>Reset</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
};

CounterApp.defaultProps = {
    value: 0,
}
