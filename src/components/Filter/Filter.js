import PropTypes from 'prop-types';
//import styles from './Filter.module.scss';

const Filter = ({ value, onChange }) => (
  <label>
    <span>Find contact by name</span>
    <input
      type="text"
      value={value}
      onChange={onChange}
      name="filter"
      placeholder="Enter name"
    />
  </label>
);

Filter.defaultProps = {
  value: '',
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default Filter;