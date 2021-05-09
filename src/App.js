import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import styles from './App.module.scss';

const App = () => (
  <div className={styles.main_container}>
    <h1>Phonebook</h1>
    <ContactForm />
    <h2>Contacts</h2>
    <Filter/>
    <ContactList/>
  </div>
);

export default App;