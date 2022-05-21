import React from "react";
import './contacts.css'
import LeftPhotoContacts from '../../Assets/imgHome/cloudLeft.png'
import RightPhotoContacts from '../../Assets/imgHome/cloudRight.png'
import FormEmail from '../../Components/FormEmail/FormEmail.jsx'
function Contacts(){
    return(
        <div className="wrapContacts">
        <p className="titleOfPageContacts ">Контакти </p>
        <p className="Content">Адміністратори</p>
        <label className="Content">Уляна +380 688 241 934<br /> </label>
        <p className="Content">Ірина +380969373022  </p>
        

        <label className="Location">Наш офіс знаходиться</label>
        <label className="Locationothestreet">на вул.Ступана Бандери 12<br /> </label>
        <label className="Сity">м.Львів  </label>
        <FormEmail />
           
      
         
         <div >
            <img class="photoLeftContacts" src={LeftPhotoContacts} alt="BeautyWomenBackgraungImage"/>
            <img class="photoRightContacts"src={RightPhotoContacts} alt="BeautyWomenBackgraungImage" />
        </div>
    </div>

            )
            }
            export default Contacts;