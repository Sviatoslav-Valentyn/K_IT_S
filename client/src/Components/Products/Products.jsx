import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import './Products.css'
import LoadingPhoto from '../../Assets/Loading.gif'

const Products = () => {
  
  const [data, setData] = useState([]);
  const [filterGoods, setfilterGoods] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch (`http://localhost:3001/product/`);
      if (componentMounted){
        setData(await response.clone().json());
        setfilterGoods(await response.json());
        setLoading(false);
        console.log(filterGoods)
      }
      return () => {
        componentMounted = false;
      }
    }
    getProducts();
    }, []

  );
const Loading =() => {
  return(
    <>
    <img src={LoadingPhoto} alt="Loading..." />
    </>
  )
}

const filterProduct = (type) => {
  const updateList = data.filter((x) =>  x.Type === type);
  setfilterGoods(updateList);
}

const ShowProducts =() => {
  const [modal, setModal] = useState(false);
  const [modalone, setModalone] = useState(false);
  const [modaltwo, setModaltwo] = useState(false);
  const [nodal, setNodal] = useState(false);
  const [nodalone, setNodalone] = useState(false);
  const [nodaltwo, setNodaltwo] = useState(false);
return(
  <>

  <div className="buttonsAll">
    <div>
    <button className="buttonsProducts" onClick={()=>setModal((value) => !value)}>Woman</button>
    <>
    {modal && (
      <>
        <div className="clothingButton">
<button  className="typeOfProduct"  onClick={() => setModalone((value) => !value)}>Одяг</button>
           
            <div className='blocksCategory'>
                {modalone && (
                    < >
                         <button className='blockCategory'  onClick={() =>  filterProduct("women's coat")}>Куртки та пальта</button>
                         <button className='blockCategory'  onClick={() =>  filterProduct("women's trousers")}>Штани та джинси</button>
                         <button className='blockCategory' onClick={() =>  filterProduct( "women's sweaters")}>Светри та світшоти</button>
                         <button className='blockCategory' onClick={() =>  filterProduct( "women's shirt")}>Футболки</button>
                         <button className='blockCategory' onClick={() =>  filterProduct( "women's shorts")}>Шорти</button>
                         <button className='blockCategory' onClick={() =>  filterProduct( "women's dresses")}>Сукні та спідниці</button>
                         <button className='blockCategory' onClick={() =>  filterProduct( "women's jacket")}>Піджаки</button>
                         <button className='blockCategory' onClick={() =>  filterProduct( "women's shirts")}>Сорочки</button>
                         <button className='blockCategory' onClick={() =>  filterProduct( "women's blouses")}>Блузки</button>
                    </>
                )}
            </div>

                <div>
                <button className="typeOfProduct" onClick={() => setModaltwo((value) => !value)}>Аксесуари</button>
                <div className='blocksCategory'>
                  {modaltwo && (
                    <>
                      <button className='blockCategory' onClick={() =>  filterProduct( "women's bags")}>Сумки та рюкзаки</button>
                      <button className='blockCategory' onClick={() =>  filterProduct( "women's footwear")}>Взуття</button>
                      <button className='blockCategory' onClick={() =>  filterProduct( "women's cap")}>Шапки</button>
                      <button className='blockCategory' onClick={() =>  filterProduct( "women's wallet")}>Гаманці</button>
                      <button className='blockCategory' onClick={() =>  filterProduct( "women's jewelry")}>Біжутерія</button>
                      <button className='blockCategory' onClick={() =>  filterProduct( "women's swimsuit")}>Купальники</button>
                      <button className='blockCategory' onClick={() =>  filterProduct( "women's glasses")}>Окуляри</button>
                      <button className='blockCategory' onClick={() =>  filterProduct( "women's socks")}>Шкарпетки</button>
                    </>
                  )}
                </div>
                </div>
                </div>
      </>
    )}
     </>
    </div>

    <div>
    <button className="buttonsProducts" onClick={()=>setNodal((value) => !value)}>Man</button>
    <>
    {nodal && (
      <> <div className='clothingButton'>
      <button className="typeOfProduct" onClick={() => setNodalone ((value) => !value)}>Одяг</button>
      
       <div className='blocksCategory'>
           {nodalone && (
               <>
                    <button className='blockCategory' onClick={() =>  filterProduct( "men's coat")}>Куртки та пальта</button>
                    <button className='blockCategory' onClick={() =>  filterProduct( "men's trousers")}>Брюки та джинси</button>
                    <button className='blockCategory' onClick={() =>  filterProduct( "men's sweaters")}>Светри та світшоти</button>
                    <button className='blockCategory' onClick={() =>  filterProduct( "men's shirt")}>Футболки</button>
                    <button className='blockCategory' onClick={() =>  filterProduct( "men's shorts")}>Шорти</button>
                    <button className='blockCategory' onClick={() =>  filterProduct( "men's jacket")}>Піджаки</button>
                    <button className='blockCategory' onClick={() =>  filterProduct( "men's shirts")}>Сорочки</button>
                    
               </>
           )}
       </div>
       <div>
       <button className="typeOfProduct" onClick={() => setNodaltwo((value) => !value)}>Аксесуари</button>
       <div className='blocksCategory'>
         {nodaltwo && (
           <>
             <button className='blockCategory' onClick={() =>  filterProduct( "men's bags")}>Сумки та рюкзаки</button>
             <button className='blockCategory' onClick={() =>  filterProduct( "men's footwear")}>Взуття</button>
             <button className='blockCategory' onClick={() =>  filterProduct( "men's cap")}>Шапки</button>
             <button className='blockCategory' onClick={() =>  filterProduct( "men's wallet")}>Гаманці</button>
             <button className='blockCategory' onClick={() =>  filterProduct( "men's belt")}>Ремені</button>
             <button className='blockCategory' onClick={() =>  filterProduct( "men's watch")}>Годинники</button>
             <button className='blockCategory' onClick={() =>  filterProduct( "men's glasses")}>Окуляри</button>
             <button className='blockCategory' onClick={() =>  filterProduct( "men's socks")}>Шкарпетки</button>
             <button className='blockCategory' onClick={() =>  filterProduct( "men's tie")}>Краватки</button>
           </>
         )}
       </div>
       </div>
</div></>
    )}
    </>
    </div>
</div>



 {filterGoods.map((product) => {
   return(
    <div className='allBlockWithPhoto'>
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
   )
 })}

</>
);
};

  return ( 
    <div className='wrapProducts' >
      <div className="row justify-content-center">
             {loading ? <Loading/> : <ShowProducts />}
           </div>
    </div>
           
  )
}
export default Products;