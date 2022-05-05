import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './FormEmail.css'

const SignupSchema = Yup.object().shape ({
  email: Yup.string().email ('Invalid email').required('Required')
});

export const FormEmail = () => (
  <div className="forma">
    <p className="headerForma">Зареєструйся і отримай знижку -10%  на першу покупку</p>
    <p className="inputt">Введіть:</p>
    <p className="email">Електронну пошту</p>
    
    <Formik 
      initialValues={{
        email: '',
      }}
      validationSchema={SignupSchema}
     
      onSubmit={(values, {resetForm}) => {
        console.log(values);
        resetForm({values: ''});
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="email" type="email" className='input' />
          <div className='error' >{errors.email && touched.email ? <div>{errors.email}</div> : null}</div>
          <button className="button" type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);
export default FormEmail;