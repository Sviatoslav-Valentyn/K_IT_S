import React from "react";
import './Header.css'
import Basket  from '../../Assets/Images/Basket.png'
import Search from '../../Assets/Images/Search.png'
import Heart from '../../Assets/Images/♡ (2).png'

function Header() {
    return(
        <header className="header" >           
                <nav>                
                    <ul className="nav_list" >
                       
                        <li> <div className="header_nav"><a className="header_nav_link"  href="#">Образ</a></div></li>
                        <li> <div className="header_nav"><a className="header_nav_link"  href="/products">Каталог</a></div></li>
                        <li> <div className="header_nav"><a className="header_nav_link"   href="#">Вбивця тижня</a></div></li>
                        <li> <div className="header_nav1"><a className="header_nav_link" href="http://localhost:3000">KillerStyle</a> </div> </li>
                        <li> <div className="header_nav"><a className="header_nav_link"  href="/account/:name">Акаунт</a></div></li>
                        <li> <div className="header_nav"><a className="header_nav_link" href="#"> <img src={Basket} alt="Basket" /> </a></div></li>
                        <li> <div className="header_nav"><a className="header_nav_link" href="#"> <img src={Search} alt="Search" /> </a></div></li>
                        <li> <div className="header_nav"><a className="header_nav_link" href="#"> <img src={Heart} alt="Like"/></a></div></li>
                       
                    </ul>            
            </nav>   
        </header>

    )
}
export default Header;