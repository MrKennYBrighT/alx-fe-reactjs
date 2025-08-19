import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/formikForm';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Form Handling in React</h1>

      <section style={{ marginBottom: '3rem' }}>
        <h2>Controlled Component Form</h2>
        <RegistrationForm />
      </section>

      <section>
        <h2>Formik + Yup Form</h2>
        <FormikForm />
      </section>
    </div>
  );
}

export default App;

