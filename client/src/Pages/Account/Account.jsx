import React from 'react'
import './Account.css'
import CreatedObraz from "../../Components/CreatedOutfit/createdOutfit.jsx"

function Account(){
    return(
        <div className='wrapAccountPage'>

            <div className='headerOfAccount'>
            <table>
                <tr>
                    <th ><div className='headerAcount'>Мій акаунт</div></th>
                    <th > <a className='rightPartOfAccountRow1' href="#">Керування обліковим записом </a></th>
                </tr>
            </table>
            <table>
                <tr>
                    <th><div>NAME</div></th>
                    <th > <a className='rightPartOfAccountRow2' href="#">Переглянути образи інших</a></th>
                </tr>
            </table>
            </div>

            <div className='lineOfPage'> <hr /></div>
           
            <CreatedObraz />
            
            <div className='createObraz'>
               <div className='headerCreateObraz'>Створити образ</div>
               <div className='goCreate'>
                    <div>Перейти</div>
                    <div>до створення</div>
                    <div>образу</div>
                    <a href="#"><div className='circleButton'></div></a>
                    <a href="#"><div className='arrow'></div></a>
                </div>
           </div>

        </div>
    )
}

export default Account;