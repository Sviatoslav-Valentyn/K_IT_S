import React from "react";
import './contacts.css'
import LeftPhotoContacts from '../../Assets/imgHome/cloudLeft.png'
import RightPhotoContacts from '../../Assets/imgHome/cloudRight.png'
import FormEmailContscts from '../../Components/FormEmail/FormEmail.jsx'
function Contacts(){
    return(
        <div className="wrapContacts">
        <p className="titleOfPageContacts ">Контакти </p>
        <p className="mainContentOfContactsPage">Адмінісиратори</p>
        <label className="mainContentOfContactsPage">Уляна +380688241934<br /> </label>
        <p className="mainContentOfContactsPage">Ірина +380969373022  </p>
        

        <label className="ContentBanderaOfContactsPage">Наш офіс знаходиться</label>
        <label className="ContentBanderaOfContactsPage2">на вул.Ступана Бандери 12<br /> </label>
        <label className="ContentBanderaOfContactsPage3">м.Львів  </label>
           
           
      
         <FormEmailContscts className="ContactsPageEmail"></FormEmailContscts>
         <div >
            <img class="photoLeftContacts" src={LeftPhotoContacts} alt="BeautyWomenBackgraungImage"/>
            <img class="photoRightContacts"src={RightPhotoContacts} alt="BeautyWomenBackgraungImage" />
        </div>
    </div>

            )
            }
            export default Contacts;