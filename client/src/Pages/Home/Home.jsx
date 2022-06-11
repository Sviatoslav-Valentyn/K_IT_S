//import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import './Home.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import {Card, Button} from 'react-bootstrap'
import Slider from '../../Components/Slider/Slider.jsx'
import FormEmail from '../../Components/FormEmail/FormEmail.jsx'

import Man from '../../Assets/imgHome/Для чоловіків (1).png'
import Woman from '../../Assets/imgHome/Для жінок (1).png'
import Newss from '../../Assets/imgHome/news (2).png'
import Neww from '../../Assets/imgHome/new (4).png'
import LeftPhoto from '../../Assets/imgHome/cloudLeft.png'
import RightPhoto from '../../Assets/imgHome/cloudRight.png' 
function Home(){
    return(
        <div className="wrap"> 
         
           <div className="allBlock">

            <table className="rowPhotos">
                <tr>
                    <th>
                        <div>
                        <a href="/product">
                            <img src={Man} />
                        </a>
                    </div></th>
                    <th>
                        <div class="distancePhotoColum2">
                            <a href="/product">
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
                            <a href="https://www.vogue.com/fashion">
                                <img src={Newss} />
                            </a>
                        </div>
                    </th>
                    <th>
                        <div class="distancePhotoColum2" >
                            <a href="/product">
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