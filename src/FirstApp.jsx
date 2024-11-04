
import PropTypes from 'prop-types';

const getResult = () => {
  return 'Hola'
}

export const FirstApp = ({ name, title, subtitle }) => {

  return (
    <>
      <h1>{getResult() + ' ' + title}</h1>
      <p>{subtitle}</p>
      <p>{name}</p>
    </>
  )
}

FirstApp.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  name: 'Pedro',
  subtitle: 'Este es el subtítulo por defecto',
  title: 'Título por defecto',
}