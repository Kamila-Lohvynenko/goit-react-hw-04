import { Field, Form, Formik } from 'formik';

const SearchBar = ({ onSearch }) => {
  return (
    <header>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={(values, actions) => {
          console.log(values);
          onSearch(values.query);
          actions.resetForm();
        }}
      >
        <Form>
          <Field
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
