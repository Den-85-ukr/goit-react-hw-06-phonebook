import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
//import actionTypes from "./contact-types";

// const addContact = ({ name, number }) => ({
//   type: actionTypes.ADD,
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// });

const addContact = createAction('contact/add', ({ name, number }) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

// const deleteContact = (contactId) => ({
//   type: actionTypes.DEL,
//   payload: contactId,
// });

const deleteContact = createAction('contact/delete');

// const filter = (value) => ({
//   type: actionTypes.CHANGE_FILTER,
//   payload: value,
// });

const filter = createAction("contact/filter");

const contactActions = { addContact, deleteContact, filter };
export default contactActions;