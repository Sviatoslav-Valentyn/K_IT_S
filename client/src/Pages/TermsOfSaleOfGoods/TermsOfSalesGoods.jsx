import React from "react";
import './termsOfSalesGoods.css'
import LeftPhoto from '../../Assets/imgHome/cloudLeft.png'
import RightPhoto from '../../Assets/imgHome/cloudRight.png'
import FormEmail from '../../Components/FormEmail/FormEmail.jsx'
function TermsOfSaleOfGoods(){
    return(
        
        <div className="wrapTerms">
        <h1 className="titleTerms">Умови продажу товарів
        <br/>Оплата </h1>
        <div className="mainContentTerms">Оформлення замовлення провадиться клієнтом шляхом додавання товару в кошик.</div>
 <br />

   <div className="bold">Замовлення вважається належним чином оформленим, якщо:  <br /></div>
           <div className="italic">1. Kлієнт заповнив усі поля форми, що дозволяють ідентифікуватись	 <br /></div>
          <div className="italic"> 2. П.І.Б./найменування;<br /></div>
          <div className="italic"> 3. адреса доставки; <br /></div>
          <div className="italic"> 4. контактний телефон; <br /></div>
          <div className="bold">Способи оплати: <br /></div>
               <div className="bold">	Кредитна картка <br /></div>
               -	Якщо ви хочете оплатити кредитною карткою, виберіть PayU. Потім, після переспрямування на наступну сторінку, виберіть опцію «дебетова або кредитна картка». Перепишіть реквізити 
 картки, тобто її номер, термін дії та код CCV, і прийміть транзакцію, натиснувши кнопку «оплатити». Сума буде списана з вашої картки Visa або Mastercard.

 <br />
              <span className="bold">  Накладений платіж <br /></span>
               - 
Якщо ви віддаєте перевагу оплаті за замовлення при доставці, виберіть «Накладений платіж».; <br />







         <FormEmail />
         <div >
            <img class="photoLeftTermsOfSaleOfGoods" src={LeftPhoto} alt="BeautyWomenBackgraungImage"/>
            <img class="photoRightTermsOfSaleOfGoods"src={RightPhoto} alt="BeautyWomenBackgraungImage" />
        </div>
    </div>

)
}
export default TermsOfSaleOfGoods; 