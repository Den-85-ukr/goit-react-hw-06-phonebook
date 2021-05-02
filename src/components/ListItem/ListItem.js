import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ListItem.module.scss';

class ListItem extends Component {
  render() {
    const { name, number, onDeleteItem } = this.props;
    return (
      <li>
      <span className={styles.contact}>
      {name}:{number}
      </span>
      <button
      onClick={onDeleteItem}
      type="button"
      >
      Delete
      </button>
      </li>)
    }
};

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
};

export default ListItem;