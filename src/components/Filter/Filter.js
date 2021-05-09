import PropTypes from 'prop-types';
import { connect } from "react-redux";
import contactActions from "../../redux/contact/contact-actions";

import styles from './Filter.module.scss';

const Filter = ({ value, onChange }) => (
  <label>
    <span className={styles.filter_title}>Find contact by name</span>
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

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (event) => dispatch(
    contactActions.filter(event.target.value)
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);