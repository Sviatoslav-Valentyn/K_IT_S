import React, {useState} from "react";
import './Header.css'
import Search from "../Search/Search";
import Basket  from '../../Assets/Images/Basket.png'
import SearchPH from '../../Assets/Images/Search.png'
import Heart from '../../Assets/Images/♡ (2).png'
import Outfit from "../../Pages/Outfit/Outfit";
function Header() {
    const [lol, setLol] = useState(false);
    return(
        <header className="header" >           
                <nav>                
                    <ul className="nav_list" >
                       
                        <li> <div className="header_nav"><a className="header_nav_link"  href= "/Outfit/:nameOfOutfit">Образ</a></div></li>
                        <li> <div className="header_nav"><a className="header_nav_link"  href="/product">Каталог</a></div></li>
                        <li> <div className="header_nav"><a className="header_nav_link"   href="/Outfit/:nameOfOutfit">Вбивця тижня</a></div></li>
                        <li> <div className="header_nav1"><a className="header_nav_link" href="http://localhost:3000">KillerStyle</a> </div> </li>
                        <li> <div className="header_nav"><a className="header_nav_link"  href="/logInOrRegistration">Акаунт</a></div></li>
                        <li> <div className="header_nav"><a className="header_nav_link" href="#"> <img src={Basket} alt="Basket" /> </a></div></li>
                        <li> <div className="header_nav"><div className="header_nav_link"> 
                        <button className="buttonForSearch" onClick={()=>setLol((value) => !value)}><img src={SearchPH} alt="Search" /></button>
            {
           
                lol && (<>
                 <div className='needSearchList'  >
                     <Search/>
                 </div>
           </>
           )}
                         </div></div></li>
                        <li> <div className="header_nav"><a className="header_nav_link" href="/Outfit/:nameOfOutfit"> <img src={Heart} alt="Like"/></a></div></li>
                       
                    </ul>            
            </nav>   
        </header>

    )
}
export default Header;
                       /* <li> <div className="header_nav" onClick={()=>setModal((value) => !value)}>
                            <div className="header_nav_link" > 
                            <img src={SearchPH} alt="Search" /> 
                            </div>
                            <div>
                            {modal && (
                           
                            <div>
                                <Search/>
                            </div>
                             )
                             } </div>
                        </div></li>*/