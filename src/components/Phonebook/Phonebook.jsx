import { Component } from 'react';
import css from './Phonebook.module.css';
import PropTypes from "prop-types";

//const Phonebook = ({  }) => {
//    return (
//        <div>
//        <h2>Phonebook</h2>
//        <div className={css.phonebook_cont}>
//        <p>Name</p>
//        <input className={css.phonebook_inp}
//        type="text"
//        name="name"
//        
//        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//        required
//      />
//      <button className={css.phonebook_btn}>Add contact</button>
//      </div>
//      </div>  
//    )
//}


class Phonebook extends Component {
state = {
 name: '',
 number: '',   
}

handleSubmit = event => {
event.preventDefault();

const contact = {
name: this.state.name,
number: this.state.number,
//id: this.state.id,
};
//this.props.onSubmit({name, number});
this.props.handleAddContact(contact);
}

handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    const number = event.target.number;
    this.setState({
        [name]: value,
        [number]: value,
    })
}

render () {
    return (
               <form className={css.phonebook_cont} onSubmit={this.handleSubmit}>
               <label>
                <p>Name</p>
                <input className={css.phonebook_inp}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={this.handleInputChange}
                //value={this.state.name}
              />
              </label>
              
              <label>
                <p>Number</p>
              <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleInputChange}
              />
              </label>
              <button type="submit" className={css.phonebook_btn}>Add contact</button>
              </form>  
            )
}
}

export default Phonebook;