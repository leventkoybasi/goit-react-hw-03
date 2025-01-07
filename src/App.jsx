import style from "./App.module.css";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import SearchBox from "./components/SearchBox";
function App() {
  return (
    <>
      <div className={style.shadowContainer}>
        <div className='mx-5'>
          <div className='mb-4 border-bottom'>
            <h1 className={`${style.mainTitle} text-white text-start ms-5`}>
              <i className='bi bi-telephone-fill fs-1 me-4'></i>
              Phonebook
            </h1>
          </div>
          <div className='row'>
            <div className='col-4'>
              <SearchBox />
              <ContactForm />
            </div>
            <div className='col-8'>
              <ContactList />
            </div>
          </div>
        </div>
      </div>
      <div className='text-white text-center my-3'>
        <small>leventkoybasi ©</small>
      </div>
    </>
  );
}

export default App;
