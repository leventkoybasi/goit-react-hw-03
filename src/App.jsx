import { useState } from "react";
import style from "./App.module.css";

// Components
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import SearchBox from "./components/SearchBox";
function App() {
  const [contact, setContact] = useState(() => {
    const savedContacts = window.localStorage.getItem("Contacts");
    return savedContacts ? JSON.parse(savedContacts) : [];
  });

  //Submit Action
  const handleSubmit = (values, actions) => {
    setContact((prevContacts) => {
      const updatedContacts = [...prevContacts, values];
      window.localStorage.setItem("Contacts", JSON.stringify(updatedContacts));
      return updatedContacts;
    });
    actions.resetForm();
  };
  //onChange Action
  const onChange = (e) => {
    const searchValue = e.target.value;
    handleSearch(searchValue);
  };

  //Search Action
  const handleSearch = (searchValue) => {
    if (searchValue.trim() === "") {
      const savedContacts = window.localStorage.getItem("Contacts");
      setContact(savedContacts ? JSON.parse(savedContacts) : []);
      return;
    }
    //Filter Action
    const filteredContacts = contact.filter(
      (item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.phone.toString().includes(searchValue) ||
        item.email.toLowerCase().includes(searchValue.toLowerCase())
    );

    setContact(filteredContacts);
  };
  return (
    <>
      <div className={`${style.shadowContainer}  w-md-100 m-md-auto`}>
        <div className='mx-xl-5 m-sm-0'>
          <div className='mb-4 border-bottom pb-4 fs-xxl-1 fs-lg-4'>
            <h1 className={`${style.mainTitle} text-white text-start mt-5`}>
              <i className='bi bi-telephone-fill me-4 '></i>
              Phonebook
            </h1>
          </div>
          <div className='row pt-5 '>
            <div className='col-12 col-xl-4 mb-4 px-lg-5 px-sm-2'>
              <SearchBox handleSearch={handleSearch} onChange={onChange} />
              <ContactForm handleSubmit={handleSubmit} />
            </div>
            <div className='col-12 col-xl-8 p-sm-0'>
              <ContactList contact={contact} setContact={setContact} />
            </div>
          </div>
        </div>
      </div>
      <div className='text-white text-center my-3' id='me'>
        <a href='https://github.com/leventkoybasi'>
          <p>
            leventkoybasi <i className='bi bi-github ms-2'></i>
          </p>
        </a>
      </div>
    </>
  );
}

export default App;
