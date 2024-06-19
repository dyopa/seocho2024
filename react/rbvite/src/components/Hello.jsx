// import PropTypes from 'prop-types';

// Hello.propTypes = {
//     name: PropTypes.string.isRequired,
//     age: PropTypes.number,
//     isMale: PropTypes.bool,
//     plusCount: PropTypes.func,
//     // children: PropTypes.children,
//     children: PropTypes.func,
//   }

const s = {
  cursor: 'pointer',
};

export default function Hello(props) {
  return (
    <h1 onClick={props.plusCount} style={s}>
      Hello, {props.name}!
      <small className="font-sm text-red-500">({props.age})</small>
    </h1>
  );
}
