
import PropTypes from 'prop-types';

const getResult = () => {
  return 'Hola'
}

export const FirstApp = ({ 
  name = 'Pedro', 
  title, 
  subtitle = 'Este es el subtítulo por defecto'
}) => {

  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      <p>{subtitle}</p>
      <p>{name}</p>
    </>
  )
}

FirstApp.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

// FirstApp.defaultProps = {
//   name: 'Pedro',
//   subtitle: 'Este es el subtítulo por defecto',
//   // title: 'Título por defecto',
// }