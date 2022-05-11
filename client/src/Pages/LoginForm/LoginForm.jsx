import React from 'react';
import { Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import LeftPhotoLogin from '../../Assets/imgHome/cloudLeft.png'
import RightPhotoLogin from '../../Assets/imgHome/cloudRight.png' 
import './loginForm.css'

const SignupSchema = Yup.object().shape ({
  email: Yup.string().email ('Invalid email').required('Required'),
  password:Yup.string().min(8).max(45).required()
});

export const LoginForm = () => (
    <div className ="wrapLogin">
  <div className="formaLogin">
    <h1 className="headerFormaLogin">Ввійти</h1>
    <h1 className="nameLoginForma">Введіть:</h1>
    <label className="nameText">Електронну пошту</label>
  
    
    <Formik
      initialValues={{
        email: '',
        password:'',
      }}
      validationSchema={SignupSchema}
     
      onSubmit={(values, {resetForm}) => {
        console.log(values);
        resetForm({values: ''});
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="email" type="email" className='inputlogin' />
          <div className='error'>  {errors.email && touched.email ? <div>{errors.email}</div> : null}</div>
          <label className="nameText">Пароль</label>
          <Field name="password" type="password" className='inputlogin' />
          <div className='error'> {errors.password && touched.password ? <div>{errors.password}</div> : null}</div>
          <button className="buttonLogin" type="submit"><a className="navAcount" href="/account/:name" >Ввійти</a></button>

        </Form>
      )}
    </Formik>
  
    </div>
    <div >
                <img class="photoLeftLogin" src={LeftPhotoLogin} alt="BeautyWomenBackgraungImage"/>
                <img class="photoRightLogin"src={RightPhotoLogin} alt="BeautyWomenBackgraungImage" />
            </div>
  </div>
);
export default LoginForm;