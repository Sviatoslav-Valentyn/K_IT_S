import React from "react";
import './createdOutfit.css'
import Sweater from '../../Assets/imgOutfit/sweater.png'
import Trousers from '../../Assets/imgOutfit/trousers.png'
function CreatedOutfit(){
    return(
        <div className='createdOutfits' >
                            <div className='headerCreatedObraz'>Створені образи</div>
                            <p className='numerationObraz' >1 образ</p>
                            
                            <img className='sweaterObraz' src={Sweater} alt="sweaterPhoto" />
                            <img  className='trousersObraz' src={Trousers} alt="TrousersPhoto" />
                            <a href="#"><p className='buyObraz'>Купити</p></a>
                            <a href="#"><p className='publishObraz'>Публікувати</p></a>   
            </div>
    )
}
export default CreatedOutfit;