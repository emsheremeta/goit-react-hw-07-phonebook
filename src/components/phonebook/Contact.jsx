import React from 'react';
import PropTypes from 'prop-types';
import styles from './Phonebook.module.css';
import { deleteContact } from 'redux/operations';
import { useDispatch } from 'react-redux';

function Contact({ key, contact }) {
  const dispatch = useDispatch();

  const { id, name, number } = contact;
  const onDelete = id => {
    dispatch(deleteContact(id));
    console.log(id);
  };
  // static propTypes = {
  //   contacts: PropTypes.objectOf(PropTypes.string.isRequired),
  //   onDelete: PropTypes.func.isRequired,
  // };
  // render() {
  //   const { id, name, number } = this.props.contact;

  //   return (
  //     <li className={styles.contactList} id={id}>
  //       {name}: {number}
  //       <button
  //         className={styles.buttonContact}
  //         onClick={() => this.props.onDelete(id)}
  //       >
  //         Delete
  //       </button>
  //     </li>
  //   );
  // }
  return (
    <li className={styles.contactList} id={id}>
      {name}: {number}
      <button className={styles.buttonContact} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
}

export default Contact;
