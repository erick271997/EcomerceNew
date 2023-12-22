import React, { useState, useEffect } from 'react';
import Header from "../Componets/Header";
import Footer from "../Componets/Footer"

const Cart = () => {
 const [productos, setProductos] = useState([]);

 useEffect(() => {
    obtenerProductosDelCarrito();
 }, []);

 const obtenerProductosDelCarrito = () => {
    const productosDelCarrito = localStorage.getItem('cart');
    if (productosDelCarrito) {
      setProductos(JSON.parse(productosDelCarrito));
    }
 };

 return (
<>
      <Header/>    
      <div className="Car-container">
      <h1 className='titulo-cart'>Carrito de Compras</h1>
      <div className='Container-CartItem'>
    
        {productos.map((producto, index) => (
          <div  key={index}>
              {/* <h3 className='title-productCar'>{producto.title}</h3>  */}
            <div className='Cobtainer-title-productCar'>
               <h3 className='title-productCar'>{producto.title}</h3>  
            </div>
            <div className='Cart-pro'>
              
              <figure>
                <img src={producto.image} alt='image-Produc'/>
                
              </figure>
              <p className='price-cart'>
                {producto.price} - $

              </p>
              
              
            </div>
       
            </div>
        ))}
      </div>
    </div>
   
    <Footer/>
    </>
 );
};

export default Cart;