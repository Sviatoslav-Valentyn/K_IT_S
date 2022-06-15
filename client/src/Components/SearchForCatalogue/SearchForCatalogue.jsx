import React, { useEffect, useState } from "react";
import {Link, useSearchParams} from 'react-router-dom'

function SearchForCatalogue () {
    const [product, setProduct] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
   
   const productQuery = searchParams.get('product')
   useEffect(() => {
        fetch ('http://localhost:3001/product/')
            .then(response => response.json())
            .then(data => setProduct(data))
        
       
  }, [])
  const onSuggestHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const query = form.search.value.toLowerCase();
    setSearchParams({product: query})
  }

    return (
        <div className="wrapForComfSearch">              
            <h5 className="mt-2 pl-25">Зручний пошук:</h5>        
                <form className="ml-5" autoComplete ="off" onSubmit={onSuggestHandler}>
           <input placeholder="Введіть назву товару" type="search" name="search" />
             <input className="searchButton" type="submit" value="Шукати" />
           </form>
           
           {product.filter(
                product =>  product.Title.toLowerCase().includes(productQuery)
            ).map((product) =>  {
   return(
       <div className="row justify-content-center mt-3 w-270 mr-20" >
             <div className='allBlockWithPhoto '>
    <a className='productBlock' href={`/product/${product.ID_Product}`}>
    <div >
    <div className="photoBlock" key={product.ID_Product} >
  <img src={product.Photo} className="photoProducts" alt={product.Title}/>
  <div className="discriptionProducts">
    <h5 className="nameProduct">{product.Title}</h5>
    <p className="priceProduct"> {product.Price}UAH </p>
    
  </div>
</div>
    </div>
    </a>
    
    </div>
       </div>
  
   )
 })}
        </div>
    )
}
export default SearchForCatalogue;