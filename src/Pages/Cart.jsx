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
          <div className='index-Cart' key={index}>
            <div className='Container-title-productCar'>
               <h3 className='title-productCar'>{producto.title}</h3>  
            </div>
            <div className='Cart-pro'>
                <p className='price-cart'>
                {producto.price} - $ USD

              </p>
              <figure>
                <img src={producto.image} alt='image-Produc'/>
                
              </figure>
            
              
              
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