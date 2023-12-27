import React, { useState, useEffect } from 'react';
import Header from "../Componets/Header";
import Footer from "../Componets/Footer"

const Cart = () => {
 const [productos, setProductos] = useState([]);
 const [total, setTotal] = useState(0);

 

 const obtenerProductosDelCarrito = () => {
    const productosDelCarrito = localStorage.getItem('cart');
    if (productosDelCarrito) {
      setProductos(JSON.parse(productosDelCarrito));
    }
 };


 const calcularTotal = () => {
  const total = productos.reduce((accumulator, producto) => accumulator + producto.price, 0);
  setTotal(total);
 };
 useEffect(() => {
  obtenerProductosDelCarrito();
  calcularTotal();
 }, [calcularTotal]);

 const handleRemoveFromCart = (id) =>{
  const newProducts = productos.filter((product)=> product.id !== id );
  localStorage.setItem("cart", JSON.stringify(newProducts));
  obtenerProductosDelCarrito();
  };


 return (
    <>
      <Header/>    
      <div className="Car-container">
        <h1 className='titulo-cart'>Carrito de Compras</h1>
        <h2>Total: {total} - $ USD</h2>

        
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