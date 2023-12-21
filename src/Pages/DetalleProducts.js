import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../componets/Header';
import Footer from '../componets/Footer'

function DetailProducts() {
 //const [cart, Setcart] = useState('');

 const [data, setData] = useState({});
 const { id } = useParams();

 useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        //console.log(response.json())
        response.json().then(DataInf => {
          setData(DataInf);
        });
      })
      .catch(error => {
        console.log('Error:', error);
      });
 }, [id]);

 const handleAddToCart = () => {
  var carroActual= localStorage.getItem('cart')

  if (carroActual === null){
    var productosDelCarro = [];
    productosDelCarro.push(data);
    localStorage.setItem('cart',JSON.stringify(productosDelCarro))
  }else{
 
     var variableTemporalCarroActualeEnFormatoArray = JSON.parse(carroActual)
   
     variableTemporalCarroActualeEnFormatoArray.push(data)
     localStorage.setItem('cart', JSON.stringify(variableTemporalCarroActualeEnFormatoArray))
    }
  
    console.log(localStorage.getItem('cart'))
 };


 return (
    <>
      <Header/>
    <div className='container-des'>

   <figure className='figure'>
          <img src={data.image} alt='image'/>
      </figure>
      <h1 className='h-title'>{data.title}</h1>
      
    
      <p className='P-descrio'>{data.description}</p>
      <p className='p-priceDe'>
        Price: {data.price} <p className='price-usd'>USD</p>
      </p>
      <button className='btn-DetP' onClick={handleAddToCart}>Add to Cart</button>
    </div>
      <Footer/>
    </>
 );
}

export default DetailProducts;