import { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem';
import styles from './ContactList.module.scss';

class ContactList extends Component {
  render() {
    const { visibleContacts, onDeleteContact } = this.props;
    return (
      <ul className={styles.phoneBookList}>
        {visibleContacts.map(({ id, name, number }) => { return (
          <ListItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteItem={()=>onDeleteContact(id)}
          />
        ); })}
      </ul>
    );
  };
};
     
ContactList.defaultProps = {
  visibleContacts: [],
};

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  visibleContacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }),
  ),
};

export default ContactList;