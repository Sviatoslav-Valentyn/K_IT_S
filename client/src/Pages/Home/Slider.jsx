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
import Good1 from './imgHome/Good1.png'
import Good2 from './imgHome/Good2.png'
import Good3 from './imgHome/Good3.png'
import Good4 from './imgHome/Good4.png'
import Good5 from './imgHome/Good5.png'
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
              <a href="#"><Card.Img variant="top" src={Good1} /></a>
                <Card.Body className="textBorder">
                  <Card.Title>Світшот у стилі тай-дай </Card.Title>
                   <Card.Text> 559 UAH </Card.Text>
                </Card.Body>
            </Card>
          </div>


          <div>
            <Card style={{ width: '18rem' }}>
            <a href="#"><Card.Img variant="top" src={Good2} /></a>
                <Card.Body className="textBorder">
                   <Card.Title>Блейзер </Card.Title>
                   <Card.Text> 659 UAH</Card.Text>
                </Card.Body>
            </Card>
          </div>

          <div>
            <Card style={{ width: '18rem' }}>
            <a href="#"><Card.Img variant="top" src={Good3} /></a>
                <Card.Body className="textBorder">
                   <Card.Title>Світшот </Card.Title>
                   <Card.Text> 659 UAH</Card.Text>
                </Card.Body>
            </Card>
          </div>

          <div>
            <Card style={{ width: '18rem' }}>
            <a href="#"><Card.Img variant="top" src={Good4} /></a>
                <Card.Body className="textBorder">
                   <Card.Title>Мінісукня з коміром </Card.Title>
                   <Card.Text> 499 UAH</Card.Text>
                </Card.Body>
            </Card>
          </div>

          <div>
            <Card style={{ width: '18rem' }}>
            <a href="#"><Card.Img variant="top" src={Good5} /></a>
                <Card.Body className="textBorder">
                   <Card.Title>Джемпер </Card.Title>
                   <Card.Text> 699 UAH</Card.Text>
                </Card.Body>
            </Card>
          </div>


          
          
        </Slider>
      </div>
    );


}
export default Sliders;