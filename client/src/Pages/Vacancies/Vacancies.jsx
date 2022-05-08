import React from "react";
import FormEmail from "../../Components/FormEmail/FormEmail";
import LeftPhotoVacancies from '../../Assets/imgHome/cloudLeft.png'
import RightPhotoVacancies from '../../Assets/imgHome/cloudRight.png'
import './Vacancies.css'
function Vacancies(){
    return(
        <div className="wrapVacanciesPage">
            <h3 className="titleVacancies">Вакансії</h3>
            <div className="mainContentVacancies">
               <div className="leftPartOfVacancies"> 
                   <div className="boldVacancies">Адміністратор</div>  
                   <div className="italicVacancies">-досвід у роботі онлайн формату;</div>  
                <div className="italicVacancies">-відповідальність; </div>
              </div> <br />
             <div className="rightPartOfVacancies">
                 <div className="boldVacancies">Модель</div>   
                 <div className="italicVacancies">-модельна зовнішність; </div> 
                 <div className="italicVacancies">-привабливість;</div> <br />
             </div>
            </div>
            
            <FormEmail />
            <div >
                <img class="photoLeftVacancies" src={LeftPhotoVacancies} alt="BeautyWomenBackgraungImage"/>
                <img class="photoRightVacancies"src={RightPhotoVacancies} alt="BeautyWomenBackgraungImage" />
            </div>
        </div>
    )
}
export default Vacancies;