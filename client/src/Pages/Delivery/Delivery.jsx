import React from "react";
import './Delivery.css'
import Car from '../../Assets/imgDeliveryPage/carDelivery.png'
import LeftPhoto from '../../Assets/imgHome/cloudLeft.png'
import RightPhoto from '../../Assets/imgHome/cloudRight.png'
import FormEmail from '../../Components/FormEmail/FormEmail.jsx'
function Delivery(){
    return(
        <div className="wrapDelivery">
            <h3 className="titleOfPage">Доставка</h3>
            <p className="mainContentOfPage">**Доставка тільки в населені пункти, контролювані Українським урядом / адміністрацією України. <br />
               На жаль, доставка в роздрібні магазини недоступна. Приносимо вибачення за незручності. Можливість примірки не передбачена. <br />
               Частковий викуп речей із замовлення неможливий. <br />
               Якщо замовлення не вдається вручити за вказаною адресою з першого разу, кур’єр спробує зробити це ще раз. <br />
               Якщо посилку не буде вручено з другої спроби, вона повертається до інтернет-магазину. <br />
               *Повернення можливе лише протягом 13 діб. <br />
                <p className="bold">Оплата можлива переказом на банківську картку або при отримані. <br /> <br /></p>
               <p className="bold">Способи доставки: <br /></p>
               <span className="italic">•	Кур'єром <br /></span>
               -	від 3 робочих днів; <br />
              <span className="italic"> •	 Доставка до Поштоматів пункт <br /></span>
               - від 3 робочих днів; <br />
              <span className="italic"> •	Безкоштовна доставка <br /></span>
              -для замовлень від 1500 UAH <br />
           </p>
             <img className="photoCar" src={Car} alt="Car's photo" />
             <FormEmail />
             <div >
                <img class="photoLeftDelivery" src={LeftPhoto} alt="BeautyWomenBackgraungImage"/>
                <img class="photoRightDelivery"src={RightPhoto} alt="BeautyWomenBackgraungImage" />
            </div>
        </div>
        
    )
}
export default Delivery;