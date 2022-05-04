//import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import './Home.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import {Card, Button} from 'react-bootstrap'
import Slider from './Slider.jsx'
import FormEmail from './FormEmail.jsx'

import Man from './imgHome/Для чоловіків (1).png'
import Woman from './imgHome/Для жінок (1).png'
import Newss from './imgHome/news (2).png'
import Neww from './imgHome/new (4).png'
import LeftPhoto from './imgHome/cloudLeft.png'
import RightPhoto from './imgHome/cloudRight.png'
function Home(){
    return(
        <div className="wrap"> 
          
           <div className="allBlock">

            <table className="rowPhotos">
                <tr>
                    <th>
                        <div>
                        <a href="#">
                            <img src={Man} />
                        </a>
                    </div></th>
                    <th>
                        <div class="distancePhotoColum2">
                            <a href="#">
                                <img src={Woman} />
                            </a>
                        </div>
                    </th>
                </tr>
            </table>

            <table class="rowPhotos">
                <tr>
                    <th>
                        <div>
                            <a href="#">
                                <img src={Newss} />
                            </a>
                        </div>
                    </th>
                    <th>
                        <div class="distancePhotoColum2" >
                            <a href="#">
                                <img src={Neww} />
                            </a>
                        </div>
                    </th>
                </tr>
            </table>

            </div>
           
            <Slider />
            <FormEmail />

            <div >
                <img class="photoLeft" src={LeftPhoto} alt="BeautyWomenBackgraungImage"/>
                <img class="photoRight"src={RightPhoto} alt="BeautyWomenBackgraungImage" />
            </div>

        </div>
    )
}
export default Home;