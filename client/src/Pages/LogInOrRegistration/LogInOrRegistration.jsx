import React from 'react';
import { Formik, Form} from 'formik';
import './logInOrRegistration.css'
import LeftPhotoLogInOrRegistration from '../../Assets/imgHome/cloudLeft.png'
import RightPhotoLogInOrRegistration from '../../Assets/imgHome/cloudRight.png' 

export const LogInOrRegistration = () => (
    <div className ="wrapLogInOrRegistration">
  <div className="formaLR">
    <Formik

    >
      {({ errors, touched }) => (
        <Form>
          

        <button className="buttonLogReg" type="submit"><a className='navRegis' href='/loginForm'>Ввійти</a></button>
        <button className="buttonLogReg" type="submit"><a className="navRegis" href="/registration">Зареєструватися</a></button>

        
        </Form>
      )}
    </Formik>
    </div>
    <div >
    <img class="photoLeftLogInOrRegistration" src={LeftPhotoLogInOrRegistration} alt="BeautyWomenBackgraungImage"/>
                <img class="photoRightLogInOrRegistration"src={RightPhotoLogInOrRegistration} alt="BeautyWomenBackgraungImage" />
            </div>
  </div>
);
export default LogInOrRegistration;
