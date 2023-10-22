import css from './ContactList.module.css'
import PropTypes from "prop-types";

const ContactList = ({contacts, handleDeleteContact}) => {
        return (
        
        <ul className={css.contacts_cont}>
          {contacts.map(({id, name, number}) => (
          <li className={css.contacts_item}
          key={id}>{name}: {number}
          <button className={css.contacts_item_btn} type="button" 
          onClick={() => handleDeleteContact(id)}>Delete</button>
          </li>
         ))}
          </ul>
    )
}

ContactList.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
}

export default ContactList;