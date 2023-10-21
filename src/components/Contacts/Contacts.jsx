import css from './Contacts.module.css';
import PropTypes from "prop-types";

const Contacts = ({contacts}) => {
        return (
        <ul className={css.contacts_cont}>
          {contacts.map(({id, name, number}) => (
          <li className={css.contacts_item}
          key={id}>{name}: {number}</li> 
         ))}
        </ul>
    )
}

export default Contacts;