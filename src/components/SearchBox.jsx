import { Formik, Form, Field, ErrorMessage } from "formik";
import searchSchema from "../js/inputSchema.js";

const initialFormValues = {
  search: "",
};
const handleSubmit = (values) => {
  console.log("VALUES", values.search);
};
function SearchBox() {
  return (
    <Formik
      initialValues={initialFormValues}
      validationSchema={searchSchema}
      onSubmit={handleSubmit}
    >
      <Form className='my-5 pb-5'>
        <div className='input-group'>
          <Field
            type='text'
            className='form-control fs-4 px-4'
            placeholder='Search'
            name='search'
          />

          <div className='input-group-append'>
            <button type='submit' className='btn btn-light input-group-text' id='basic-addon2'>
              <i className='bi bi-search fs-4' />
            </button>
          </div>
          <ErrorMessage name='search' component='div' className='text-danger' />
        </div>
      </Form>
    </Formik>
  );
}

export default SearchBox;
