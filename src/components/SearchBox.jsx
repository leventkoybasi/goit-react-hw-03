function SearchBox() {
  return (
    <div className='my-5 pb-5'>
      <div className='input-group'>
        <input
          type='text'
          className='form-control fs-4 px-4'
          placeholder='Seach'
          aria-label="Recipient's username"
          aria-describedby='basic-addon2'
        />
        <div className='input-group-append'>
          <button className='btn btn-light input-group-text' id='basic-addon2'>
            <i className='bi bi-search fs-4' />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
