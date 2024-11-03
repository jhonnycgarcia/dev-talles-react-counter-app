
import PropTypes from 'prop-types';

const getResult = () => {
  return 'Hola'
}

export const FirstApp = ({title, subtitle}) => {

  return (
    <>
      <h1>{getResult() + ' ' + title}</h1>
      <div>{subtitle}</div>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};