import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import contactActions from "../../redux/contact/contact-actions";
import ListItem from "../ListItem";

import styles from "./ContactList.module.scss";

class ContactList extends Component {
  render() {
    const { contacts, onDeleteContact } = this.props;

    return (
      <ul className={styles.phoneBookList}>
        {contacts.map(({ id, name, number }) => {
          return (
            <ListItem
              key={id}
              id={id}
              name={name}
              number={number}
              onDeleteItem={onDeleteContact}
            />
          );
        })}
      </ul>
    );
  }
};

ContactList.defaultProps = {
  visibleContacts: [],
};

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  visibleContacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
};

const getVisibleContact = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => {
  const visivbleContacts = getVisibleContact(items, filter);

  return {
    contacts: visivbleContacts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteContact: (id) => dispatch(contactActions.deleteContact(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);