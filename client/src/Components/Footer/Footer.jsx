import React from "react"; 
import './Footer.css'
function Footer(){
    return(
        <footer className="footer" >
          <nav>
              <ul className="nav_list" >
                  <li> <a className="footer_nav_link" href="/delivery" >Доставка</a></li>
                  <li> <a className="footer_nav_link" href="#" >Співпраця</a></li>
                  <li> <a className="footer_nav_link" href="#"  >Таблиця розмірів</a></li>
                  <li> <a className="footer_nav_link"  href="#" >Політика конфiденційності</a></li>
              </ul>
              <ul className="nav_list" >
                  <li> <a className="footer_nav_link" href="#" >Умови продажу товарів</a></li>
                  <li> <a className="footer_nav_link" href="#" >Вакансії</a></li>
                  <li> <a className="footer_nav_link" href="#">Контакти</a></li>
              </ul>
          </nav>
      </footer>
      
    )
}
export default Footer;