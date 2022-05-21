import React from "react";
import './termsOfSalesGoods.css'
import LeftPhoto from '../../Assets/imgHome/cloudLeft.png'
import RightPhoto from '../../Assets/imgHome/cloudRight.png'
import FormEmail from '../../Components/FormEmail/FormEmail.jsx'
function TermsOfSaleOfGoods(){
    return(
        <div className="wrapTerms">
        <p className="titleTerms">Умови продажу товарів
        <br/>Оплата </p>
        <h1 className="mainContentTerms">Оформлення замовлення провадиться клієнтом шляхом додавання товару в кошик.</h1>
 <br />

   <p className="bold">Замовлення вважається належним чином оформленим, якщо:  <br /></p>
           <span className="italic">1. Kлієнт заповнив усі поля форми, що дозволяють ідентифікуватись	 <br /></span>
          <span className="italic"> 2. П.І.Б./найменування;<br /></span>
          <span className="italic"> 3. адреса доставки; <br /></span>
          <span className="italic"> 4. контактний телефон; <br /></span>
          <p className="bold">Способи оплати: <br /></p>
               <span className="bold">	Кредитна картка <br /></span>
               -	Якщо ви хочете оплатити кредитною карткою, виберіть PayU. Потім, після переспрямування на наступну сторінку, виберіть опцію «дебетова або кредитна картка». Перепишіть реквізити 
 картки, тобто її номер, термін дії та код CCV, і прийміть транзакцію, натиснувши кнопку «оплатити». Сума буде списана з вашої картки Visa або Mastercard.

 <br />
              <span className="bold">  Наложний платіж <br /></span>
               - 
Якщо ви віддаєте перевагу оплаті за замовлення при доставці, виберіть «Наложений платіж».; <br />
            
       



       
  
         <FormEmail />
         <div >
            <img class="photoLeftTermsOfSaleOfGoods" src={LeftPhoto} alt="BeautyWomenBackgraungImage"/>
            <img class="photoRightTermsOfSaleOfGoods"src={RightPhoto} alt="BeautyWomenBackgraungImage" />
        </div>
    </div>

)
}
export default TermsOfSaleOfGoods;