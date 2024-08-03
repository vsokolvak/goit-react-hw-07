import { useEffect, useState } from 'react';
import ContactList from './components/ContactList/ContactList';
import initialData from './data/contact.json'
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';

function App() {

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App
