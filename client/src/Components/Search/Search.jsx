/*import React, { useEffect, useState } from "react";
import './Search.css'
import axios from 'axios'
function Search () {
    const [products, setProducts] = useState([]);
    const [text, setText] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    useEffect(() => {
        const loadProducts = async () => {
            const response = await axios.get('http://localhost:3001/product/');
            console.log(response.data)
            setProducts(response.data)
        }
       loadProducts();
  }, [])
  const onSuggestHandler = (text) => {
      setText(text);
      setSuggestions([]);
  }
  const onChangeHandler = (text) => {
      let matches = []
      if (text.lenght > 0) {
          matches = products.filter (products => {
              const regex = new RegExp(`${text}`, "gi");
              return products.Title.match(regex)
          })
      }
      console.log('matches', matches)
      setSuggestions(matches)
      setText(text)
  }
    return (
        <div>
           
            <input type="text" onChange={e => onChangeHandler(e.target.value)}  value={text} onBlur={()=> {
                //setTimeout(() => {
                        setSuggestions([])
                //}, 100);
            }} />
            {suggestions && suggestions.map((suggestions, i) => 
            <div key={i} className="suggestion" onClick={()=>onSuggestHandler(suggestions.Title)}>{suggestions.Title} </div>
            )}
        </div>
    )
}
export default Search;*/

import React, { useEffect, useState } from "react";
import {Link, useSearchParams} from 'react-router-dom'
import './Search.css'
function Search () {
    const [products, setProducts] = useState([]);
   // const [data, setData] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
   
   const productQuery = searchParams.get('product')
   useEffect(() => {
        fetch ('http://localhost:3001/product/')
            .then(response => response.json())
            .then(data => setProducts(data))   
  }, [])
  const onSuggestHandler = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchParams({product: query})
  }

    return (
        <div className='showproductsForSearch'>                        
            <form className="" autoComplete ="off" >
            <input  placeholder="Введіть назву товару" type="search" name="search" onChange={onSuggestHandler}/>
           </form>
           
            { productQuery && products.filter(
                product =>  product.Title.toLowerCase().includes(productQuery)
            ).map((product) => {
   return(
    <div >
    <a className='productBlock' href={`/product/${product.ID_Product}`}>
    <div >
    <div className="" key={product.ID_Product} >
  
  <div className="">
    <h5 className="nameProductForSearch">{product.Title}</h5>
  
    
  </div>
</div>
    </div>
    </a>
    
    </div>
   )
 })}
        </div>
    )
}
export default Search;