import { Field, Form, Formik } from 'formik';
import { CiSearch } from 'react-icons/ci';
import css from './SearchBar.module.css';
import { toast } from 'react-hot-toast';

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (values, actions) => {
    if (!values.query.trim()) {
      toast.error('Enter please at least 1 symbol to start searching');
      return;
    }
    onSearch(values.query);
    actions.resetForm();
  };
  return (
    <header>
      <Formik initialValues={{ query: '' }} onSubmit={handleSubmit}>
        <Form>
          <div className={css.form}>
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
          </div>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
