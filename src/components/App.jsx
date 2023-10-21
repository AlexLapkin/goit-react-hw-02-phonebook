import { Component } from "react";
import Phonebook from "./Phonebook/Phonebook";
import Contacts from "./Contacts/Contacts";
import Filter from "./Filter/Filter";
import {nanoid} from 'nanoid';

export class App extends Component {
   state = {
   contacts: [],
   filter: '',
   name: '',
   number: '',
   }

   handleAddContact = contact => {
    const finalContacts = {
     ...contact,
    id: nanoid(),
    };
    
    this.setState(prevState => ({
        contacts: [...prevState.contacts, finalContacts],
    }));
 }

    changeInputFilter = event => {
        this.setState({filter: event.target.value});
    }


    findContactsByName = () => {
        const {filter, contacts} = this.state;
        return contacts.filter(contact => 
            contact.name.toLowerCase().includes(filter.toLowerCase())
            );
    }

   render() {
    //const { filter } = this.state;
    //console.log(filter)
    return (
    <div>
    <h1>Phonebook</h1>        
    < Phonebook handleAddContact={this.handleAddContact}/>
    <h2>Contacts</h2>
    < Filter filter={this.state.filter} changeInputFilter={this.changeInputFilter} />
    < Contacts  contacts={this.findContactsByName()}/>
    </div>
    )
   }
}