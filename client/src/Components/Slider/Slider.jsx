/*import React from 'react'
//import { connect } from 'react-redux'

export const Slider = (props) => {
  return (
    <div>Slider</div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Slider)*/
import Slider from "react-slick";
import React from "react";
import {Card, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Good25 from '../../Assets/imgHome/Good25.jpg' 
import Good12 from '../../Assets/imgHome/Good12.jpg' 
import Good13 from '../../Assets/imgHome/Good13.jpg' 
import Good29 from '../../Assets/imgHome/Good29.jpg' 
import Good30 from '../../Assets/imgHome/Good30.jpg' 

import './Slider.css'
const Sliders = ()=>{
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear"
  };
  const goods = [1,2,3,4,5]
  const style={
    width: '18rem',
    
    

  };
  return(
    <div>
        <h3 className="hheaderRec">Рекомендації</h3>
        <Slider className="slider" {...settings}>
        
        <div>
              <Card style={{ width: '18rem' }}>
              <a className='allGood' href={`/product/${25}`} >
                <Card.Img className="imgGood" variant="top" src={Good25} />
                <Card.Body className="textBorder">
                  <Card.Title className="titleGood">Сукня VERSACE JEANS COUTURE</Card.Title>
                   <Card.Text className="priceGood"> 8855 UAH </Card.Text>
                </Card.Body>
                </a>
            </Card>
          </div>


          <div>
          <Card style={{ width: '18rem' }}>
              <a className='allGood' href={`/product/${12}`} >
                <Card.Img className="imgGood" variant="top" src={Good12} />
                <Card.Body className="textBorder">
                  <Card.Title className="titleGood">Пальто TWIN-SET</Card.Title>
                   <Card.Text className="priceGood"> 12990 UAH </Card.Text>
                </Card.Body>
                </a>
            </Card>
          </div>

          <div>
          <Card style={{ width: '18rem' }}>
              <a className='allGood' href={`/product/${29}`} >
                <Card.Img className="imgGood" variant="top" src={Good29} />
                <Card.Body className="textBorder">
                  <Card.Title className="titleGood">Куртка KARL LAGERFELD</Card.Title>
                   <Card.Text className="priceGood"> 6490 UAH </Card.Text>
                </Card.Body>
                </a>
            </Card>
          </div>

          <div>
          <Card style={{ width: '18rem' }}>
              <a className='allGood' href={`/product/${13}`} >
                <Card.Img className="imgGood" variant="top" src={Good13} />
                <Card.Body className="textBorder">
                  <Card.Title className="titleGood">Куртка LIU JO</Card.Title>
                   <Card.Text className="priceGood"> 1500 UAH </Card.Text>
                </Card.Body>
                </a>
            </Card>
          </div>



          <div>
          <Card style={{ width: '18rem' }}>
              <a className='allGood' href={`/product/${30}`} >
                <Card.Img className="imgGood" variant="top" src={Good30} />
                <Card.Body className="textBorder">
                  <Card.Title className="titleGood">Світшот TRUSSARDI</Card.Title>
                   <Card.Text className="priceGood"> 2225 UAH </Card.Text>
                </Card.Body>
                </a>
            </Card>
          </div>


          
          
        </Slider>
      </div>
    );


}
export default Sliders;