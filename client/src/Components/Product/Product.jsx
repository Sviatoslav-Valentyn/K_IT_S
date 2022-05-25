import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import  {useParams} from 'react-router'
import LoadingPhoto from '../../Assets/Loading.gif'
import './Product.css'
import Feedback from '../Feedback/feedback.jsx'
import LeftPhotoONProduct from '../../Assets/imgHome/cloudLeft.png'
import RightPhotoONProduct from '../../Assets/imgHome/cloudRight.png' 

const Product = () => {
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch (`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
            console.log(product)
        }
        getProduct();

    }, []);

    const Loading = () => {
        return(
            <>
            <img src={LoadingPhoto} alt="Loading..." />
           
            </>
        )
    }
    const ShowProduct = () => {
        return(
            <div className="wrapallProduct">
            <table >
                <tr>
                    <th>
                        <div >
                        <img className= "photoProduct" src={product.image} alt={product.title}  />
                    </div>
                    </th>
                    <th>
                        <div class="allDiscriptionAboutProduct">
                        <h4 className="productCategory" >
                        {product.category}
                    </h4>
                   <div className="productTitlePrice">
                   <h1 className="productTitle" >
                        {product.title}
                    </h1>
                    
                    <h3 className= "productPrice">
                         {product.price} UAH

                    </h3>
                   </div>
                    <h4 className='colSizProduct'>
                        Колір - <span className='productColorSize'>{product.color}</span>
                    </h4>
                    <h4 className='colSizProduct'>
                        Розмір -  <span className='productColorSize'>{product.size}</span>
                    </h4>

                     <table>
                         <tr>
                             <th>
                             <button className="addToCard" >
                              Додати до корзини
                             </button>

                             </th>

                             <th>
                             <NavLink to="/cart" className="goToCard" >
                             Перейти у корзину
                             </NavLink>
                             </th>
                         </tr>
                     </table>
                    
                    
                    
                    
                    
                        </div>
                    </th>
                </tr>
            </table>
            <table>
                <tr>
                    <th>
                        <div className='descriptionCompProduct'>
                        <h5>Опис             +</h5>
                        <p className= ""> {product.description} </p>
                        <h5>Склад            +</h5>
                        <p className=""> {product.composition} </p>
                        </div>
                    </th>
                </tr>
            </table>

           <Feedback />

            <div >
                <img class="photoLeftONProduct" src={LeftPhotoONProduct} alt="BeautyWomenBackgraungImage"/>
                <img class="photoRightONProduct"src={RightPhotoONProduct} alt="BeautyWomenBackgraungImage" />
            </div>
                       

           </div>
        )
    }

  return (
    <div  className="" >
        <div className="">
            {loading ? <Loading /> : <ShowProduct />}
        </div>
    </div>
  );
}
export default Product;
