import { Formik, Form, Field } from "formik";

const initialFormValues = {
  search: "",
};

const handleSubmit = (values) => {
  console.log("Search Value:", values.search); // input değerini konsola yazdırma
};

function SearchBox() {
  return (
    <Formik initialValues={initialFormValues} onSubmit={handleSubmit}>
      <Form className='my-5 pb-5'>
        <div className='input-group'>
          <Field
            type='text'
            className='form-control fs-4 px-4'
            placeholder='Search'
            name='search'
          />
          <div className='input-group-append'>
            <button type='submit' className='btn btn-light input-group-text'>
              <i className='bi bi-search fs-4' />
            </button>
          </div>
        </div>
      </Form>
    </Formik>
  );
}

export default SearchBox;
