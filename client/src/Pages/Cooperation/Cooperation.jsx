import React from "react";
import './Cooperation.css'
import CooperationPhoto from "../../Assets/cooperation.png"
import LeftPhoto from '../../Assets/imgHome/cloudLeft.png'
import RightPhoto from '../../Assets/imgHome/cloudRight.png'
import FormEmail from '../../Components/FormEmail/FormEmail.jsx'
function Cooperation(){
    return(
        <div className="wrapCooperation">
        <h3 className="titleOfCooperation">Співпраця</h3>
        <p className="mainContentCooperation">
        Співпраця  <br />
        Можливість контактувати з партнерами 24\7 <br />
        Щодо реклами звертатися за номером телефону <br />
        +380688241934 <br />
        </p>
        <img className="cooperationphoto" src={CooperationPhoto} alt="Cooperation" />
        <FormEmail/>
        <div >
                <img class="photoLeftCooperation" src={LeftPhoto} alt="BeautyWomenBackgraungImage"/>
                <img class="photoRightCooperation"src={RightPhoto} alt="BeautyWomenBackgraungImage" />
            </div>
        </div>
    )
}
export default Cooperation;