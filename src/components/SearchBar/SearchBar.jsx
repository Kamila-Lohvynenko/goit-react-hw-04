import { Field, Form, Formik } from 'formik';
import { CiSearch } from 'react-icons/ci';
import css from './SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
  return (
    <header>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={(values, actions) => {
          onSearch(values.query);
          actions.resetForm();
        }}
      >
        <Form className={css.form}>
          <Field
            className={css.input}
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={css.button} type="submit">
            <CiSearch size={28} />
          </button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
