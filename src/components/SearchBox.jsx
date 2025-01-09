/* eslint-disable react/prop-types */
import { Formik, Form, Field } from "formik";

const initialFormValues = {
  search: "",
};

function SearchBox({ handleSearch, onChange }) {
  return (
    <Formik initialValues={initialFormValues} onSubmit={handleSearch}>
      {({ handleChange }) => (
        <Form className='my-5 pb-5'>
          <div className='input-group'>
            <Field
              type='text'
              className='form-control fs-4 px-4'
              placeholder='Search'
              name='search'
              onChange={(e) => {
                handleChange(e);
                onChange(e);
              }}
            />
            <span className='input-group-text'>
              <i className='bi bi-search fs-4'></i>
            </span>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default SearchBox;
