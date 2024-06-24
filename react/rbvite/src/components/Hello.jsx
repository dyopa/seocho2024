// import PropTypes from 'prop-types';

// Hello.propTypes = {
//     name: PropTypes.string.isRequired,
//     age: PropTypes.number,
//     isMale: PropTypes.bool,
//     plusCount: PropTypes.func,
//     // children: PropTypes.children,
//     children: PropTypes.func,
//   }


export default function Hello(props) {
  // console.log('Heeeeeeeeelo')
  return <h1 onClick={props.plusCount} style={{
  cursor: 'pointer'
}}>Hello, {props.name}! <small className="font-sm text-red-500">({props.age + 1})</small></h1>
}
