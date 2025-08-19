import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const FormikForm = () => {
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log('Form submitted:', values);
    setSubmitting(false);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form style={{ maxWidth: '400px', margin: '0 auto' }}>
          <h2>User Registration</h2>

          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="username">Username:</label><br />
            <Field type="text" name="username" id="username" />
            <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="email">Email:</label><br />
            <Field type="email" name="email" id="email" />
            <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="password">Password:</label><br />
            <Field type="password" name="password" id="password" />
            <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
          </div>

          <button type="submit" disabled={isSubmitting}>
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
