import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import './Products.css'
import LoadingPhoto from '../../Assets/Loading.gif'

const Products = () => {

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch (`http://localhost:3001/product/`);
      if (componentMounted){
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter)
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

const filterProduct = (cat) => {
  const updateList = data.filter((x) => x.category === cat);
  setFilter(updateList);
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
<button className="typeOfProduct" onClick={() => setModalone((value) => !value)}>Одяг</button>
           
            <div className='blocksCategory'>
                {modalone && (
                    <form>
                         <button className='blockCategory' onClick={() =>  filterProduct( "women's clothing")}>Куртки і плаття</button>
                         <button className='blockCategory' onClick={() =>  filterProduct( "women's clothing")}>Штани і джинси</button>
                         <button className='blockCategory' onClick={() =>  filterProduct( "women's clothing")}>Светри, світшоти</button>
                         <button className='blockCategory' onClick={() =>  filterProduct( "women's clothing")}>Футболки</button>
                         <button className='blockCategory' onClick={() =>  filterProduct( "women's clothing")}>Шорти</button>
                         <button className='blockCategory' onClick={() =>  filterProduct( "women's clothing")}>Сукні, спідниці</button>
                         <button className='blockCategory' onClick={() =>  filterProduct( "women's clothing")}>Піджаки</button>
                         <button className='blockCategory' onClick={() =>  filterProduct( "women's clothing")}>Сорочки</button>
                         <button className='blockCategory' onClick={() =>  filterProduct( "women's clothing")}>Блузки</button>
                    </form>
                )}
            </div>

                <div>
                <button className="typeOfProduct" onClick={() => setModaltwo((value) => !value)}>Аксесуари</button>
                <div className='blocksCategory'>
                  {modaltwo && (
                    <form>
                      <button className='blockCategory' onClick={() =>  filterProduct( "women's clothing")}>Сумки і рюкзаки</button>
                      <button className='blockCategory' onClick={() =>  filterProduct( "women's clothing")}>Взуття</button>
                      <button className='blockCategory' onClick={() =>  filterProduct( "women's clothing")}>Шапки</button>
                      <button className='blockCategory' onClick={() =>  filterProduct( "women's clothing")}>Гаманці</button>
                      <button className='blockCategory' onClick={() =>  filterProduct( "women's clothing")}>Біжутерія</button>
                      <button className='blockCategory' onClick={() =>  filterProduct( "women's clothing")}>Купальники</button>
                      <button className='blockCategory' onClick={() =>  filterProduct( "women's clothing")}>Окуляри</button>
                      <button className='blockCategory' onClick={() =>  filterProduct( "women's clothing")}>Шкарпетки</button>
                    </form>
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
               <form>
                    <button className='blockCategory' onClick={() =>  filterProduct( "men's clothing")}>Куртки і пальта</button>
                    <button className='blockCategory' onClick={() =>  filterProduct( "men's clothing")}>Брюки і джинси</button>
                    <button className='blockCategory' onClick={() =>  filterProduct( "men's clothing")}>Светри, світшоти</button>
                    <button className='blockCategory' onClick={() =>  filterProduct( "men's clothing")}>Футболки</button>
                    <button className='blockCategory' onClick={() =>  filterProduct( "men's clothing")}>Шорти</button>
                    <button className='blockCategory' onClick={() =>  filterProduct( "men's clothing")}>Піджаки</button>
                    <button className='blockCategory' onClick={() =>  filterProduct( "men's clothing")}>Сорочки</button>
                    
               </form>
           )}
       </div>
       <div>
       <button className="typeOfProduct" onClick={() => setNodaltwo((value) => !value)}>Аксесуари</button>
       <div className='blocksCategory'>
         {nodaltwo && (
           <form>
             <button className='blockCategory' onClick={() =>  filterProduct( "men's clothing")}>Сумки і рюкзаки</button>
             <button className='blockCategory' onClick={() =>  filterProduct( "men's clothing")}>Взуття</button>
             <button className='blockCategory' onClick={() =>  filterProduct( "men's clothing")}>Шапки</button>
             <button className='blockCategory' onClick={() =>  filterProduct( "men's clothing")}>Гаманці</button>
             <button className='blockCategory' onClick={() =>  filterProduct( "men's clothing")}>Ремені</button>
             <button className='blockCategory' onClick={() =>  filterProduct( "men's clothing")}>Годинники</button>
             <button className='blockCategory' onClick={() =>  filterProduct( "men's clothing")}>Окуляри</button>
             <button className='blockCategory' onClick={() =>  filterProduct( "men's clothing")}>Шкарпетки</button>
             <button className='blockCategory' onClick={() =>  filterProduct( "men's clothing")}>Краватки</button>
           </form>
         )}
       </div>
       </div>
</div></>
    )}
    </>
    </div>
</div>



 {filter.map((product) => {
   return(
    <div className='allBlockWithPhoto'>
    <a href={`/product/${product.ID_Product}`}>
    <div >
    <div className="photoBlock" key={product.ID_Product} >
  <img src={product.Image} className="photoProducts" alt={product.Title}/>
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