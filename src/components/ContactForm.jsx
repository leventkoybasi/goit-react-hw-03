function ContactForm() {
  return (
    <div className=''>
      <h2 className='text-white mt-5 mb-4'>
        <i className='bi bi-pencil-fill me-4'></i>Add New Contact
      </h2>
      <form className='d-flex flex-column gap-3'>
        <div className='form-group'>
          <input type='text' className='form-control fs-4 px-4' placeholder='Add Name' />
        </div>
        <div className='form-group'>
          <input type='text' className='form-control fs-4 px-4' placeholder='Add Phone' />
        </div>
        <div className='form-group'>
          <input type='email' className='form-control fs-4 px-4' placeholder='Add Email' />
        </div>

        <button type='submit' className='btn btn-primary fs-4 px-4 mt-4'>
          Add <i className='bi bi-pencil-square ms-2' />
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
