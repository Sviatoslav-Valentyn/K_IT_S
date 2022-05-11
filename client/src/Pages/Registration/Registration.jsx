import React from 'react';
import { Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import "yup-phone";
import './registration.css';
import LeftPhotoRegistration from '../../Assets/imgHome/cloudLeft.png'
import RightPhotoRegistration from '../../Assets/imgHome/cloudRight.png' 

const SignupSchema =Yup.object().shape ({
  
  username:Yup.string().min(3).max(10).required(),
  email: Yup.string().email ('Invalid email').required('Required'),
  phone:Yup.string().phone('Invalid phone number').required('Required'),
  password:Yup.string().min(8).max(45).required(),
});



export const Registration = () => (
    <div className ="wrapRegistration">
  <div className="formRegistration">
    <h1 className="headerForma">Зареєструватися</h1>
    <h1 className="nameLogin">Введіть:</h1>
 

    <Formik
      initialValues={{
        username:'',
        email: '',
        phone:'',
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
            <label className="nameText ">Прізвіще на ім’я</label>
           <Field name="username" type="text" className='input' placeholder="Введіть псевдoнім"  />
           <div className='error'>  {errors.username && touched.username ? <div>{errors.username}</div> : null}</div>

          <label className="nameText">Електронну пошту</label>
          
          <Field name="emai" type="email" className='input' placeholder=" Введіть eлектронy пошту" />
          <div className='error'> {errors.email && touched.email ? <div>{errors.email}</div> : null}</div>

          <label className="nameText "> Номер телефону</label>
          <Field name="number_phone" type="phone" className='input' placeholder="+380 *** *** ** " />
          <div className='error'>  {errors.phone_number && touched.phone_number ? <div>{errors.phone_number}</div> : null}</div>

          <label className="nameText">Пароль</label>
          <Field name="password" type="password" className='input' placeholder="********" />
          <div className='error'> {errors.password && touched.password ? <div>{errors.password}</div> : null}</div>


          <label className="nameText">Повторіть пароль</label>
          <Field name="password" type="password"  className='input' placeholder="********" />
          <div className='error'>  {errors.passsword && touched.passsword ? <div>{errors.passsword}</div> : null}</div>

          <button className="buttonnn" type="submit">Завершити та надіслати</button>

        </Form>
      )}
    </Formik>
  </div>
             <div >
                <img class="photoLeftRegistration" src={LeftPhotoRegistration} alt="BeautyWomenBackgraungImage"/>
                <img class="photoRightRegistration"src={RightPhotoRegistration} alt="BeautyWomenBackgraungImage" />
            </div>
  </div>
);
export default Registration;