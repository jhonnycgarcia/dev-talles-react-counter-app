import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {

    const increment = () => {
        console.log('Clicked')
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> {value} </h2>
            <button onClick={() => increment()}>
                +1
            </button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
};

CounterApp.defaultProps = {
    value: 0,
}
