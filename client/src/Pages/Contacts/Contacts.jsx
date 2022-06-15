import React from "react";
import './contacts.css'
import LeftPhotoContacts from '../../Assets/imgHome/cloudLeft.png'
import RightPhotoContacts from '../../Assets/imgHome/cloudRight.png'
import FormEmail from '../../Components/FormEmail/FormEmail.jsx'
function Contacts(){
    return(
        <div className="wrapContacts">
        <h2 className="titleOfPageContacts ">Контакти </h2>
        <div className="Content">Адміністратори</div>
        <div className="Content">Уляна +380 688 241 934<br /> </div>
        <div className="Content">Ірина +380969373022  </div>


        <div className="Location">Наш офіс знаходиться</div>
        <div className="Locationothestreet">на вул.Степана Бандери 12<br /> </div>
        <div className="Сity">м.Львів  </div>
        <FormEmail />



         <div >
            <img class="photoLeftContacts" src={LeftPhotoContacts} alt="BeautyWomenBackgraungImage"/>
            <img class="photoRightContacts"src={RightPhotoContacts} alt="BeautyWomenBackgraungImage" />
        </div>
    </div>

            )
            }
            export default Contacts; 