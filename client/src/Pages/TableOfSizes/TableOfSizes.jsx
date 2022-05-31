import React from "react";
import './tableOfSizes.css'
import FormEmailTableOfSizes from '../../Components/FormEmail/FormEmail.jsx'
import LeftPhotoContacts from '../../Assets/imgHome/cloudLeft.png'
import RightPhotoContacts from '../../Assets/imgHome/cloudRight.png'
import LeftPhotoTshirts from '../../Assets/imgTable/TshirtsW.png'
import LeftPhotoJeans from '../../Assets/imgTable/JeansW.png'
import LeftPhotoBoots from '../../Assets/imgTable/WBoots.png'
import LeftPhotoKablychka from '../../Assets/imgTable/Kablychka.png'
import LeftPhotoSoks from '../../Assets/imgTable/WSoks.png'
import RightPhotoTshirts from '../../Assets/imgTable/MTshirts.png'
import RightPhotoJeans from '../../Assets/imgTable/MJeans.png'
import RightPhotoBoots from '../../Assets/imgTable/MBoots.png'
import RightPhotoSoks from '../../Assets/imgTable/MSoks.png'

function TableOfSizes(){
    return(
        <div className="wrapTableOfSizes">
            
        <p className="titleTableOfSizes ">Таблиця розмірів </p>
        <table>
            <tr>
                <th>
                <div className="mainForWoomenLeft">Для жінок</div>
                
                
                </th>
                <th>
                <div className="mainForManRight">Для чоловіків</div>
                </th>
            </tr>
            <tr>
                <th>
                <p className="contentSizeLeft">Футболки, сорочки, куртки, піджаки, сукні, спідниці, сетри, світшоти</p>
        <img src={LeftPhotoTshirts} alt="" />
        <p className="contentSizeLeft">Джинси, штани</p>
        <img src={LeftPhotoJeans} alt="" />
        <p className="contentSizeLeft">Взуття</p>
        <img src={LeftPhotoBoots} alt="" />
        <p className="contentSizeLeft">Каблучка</p>
        <img className="mainKabluchka" src={LeftPhotoKablychka} alt="" />
        <p className="contentSizeLeft">Шкарпетки</p>
        <img className="SizesLeftSock" src={LeftPhotoSoks} alt="" />
        

                </th>
                <th>
                <p className="contentSizeRight">Куртки, світшоти, сорочки, светри,</p>
        <img  src={RightPhotoTshirts} alt="" />
        <p className="mainTableOfSizesRight">Джинси, штани</p>
        <img  src={RightPhotoJeans} alt="" />
        <p className="mainTableOfSizesRight">Взуття</p>
        <img className="RightBoots" src={RightPhotoBoots} alt="" />
        <p className="mainTableOfSizesRight">Шкарпетки</p>
        <img className="SizesRightSock" src={ RightPhotoSoks} alt="" />

                </th>
            </tr>
        </table>
        <FormEmailTableOfSizes className="FormEmailTableOfSizescss" />
        <div>
        <img class="photoLeftTableOfSizes" src={LeftPhotoContacts} alt="BeautyWomenBackgraungImage"/>
            <img class="photoRightTableOfSizes"src={RightPhotoContacts} alt="BeautyWomenBackgraungImage" />
        </div>
           
      
    </div>

            )
            }
            export default TableOfSizes;