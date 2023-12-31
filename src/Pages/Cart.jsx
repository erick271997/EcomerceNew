import React, { useState, useEffect } from 'react';
import Header from "../Componets/Header";
import Footer from "../Componets/Footer"
import CartProductItem from '../Componets/CartProductItem';
import { Link } from 'react-router-dom';

const Cart = () => {
 const [productos, setProductos] = useState([]);
 const [total, setTotal] = useState(0);
 const [nextPa, setNextPa]= useState(false)
 

const goToNexpa=()=>{
   if (window.innerWidth < 768){
      document.getElementById("carrito").classList.remove('show');
      setTimeout(()=>{document.getElementById("contenido").style.display="block"},350)
      }else{
         setNextPa(!nextPa)
         }
}


 const obtenerProductosDelCarrito = () => {
    const productosDelCarrito = localStorage.getItem('cart');
    if (productosDelCarrito) {
      setProductos(JSON.parse(productosDelCarrito));
      setNextPa(true)
    }
 };

 const handleRemoveFromCart = (id) => {
    let newProducts = productos.filter((producto) => producto.idCard !== id);
    setProductos(newProducts);
    localStorage.setItem("cart", JSON.stringify(newProducts));
    obtenerProductosDelCarrito();
    
   
 };

 useEffect(() => {
    obtenerProductosDelCarrito();
 }, []);

 // eslint-disable-next-line react-hooks/exhaustive-deps
 const calcularTotal = () => {
    const total = productos.reduce((accumulator, producto) => accumulator + producto.price, 0);
    setTotal(total);
 };

 useEffect(() => {
    calcularTotal();
 }, [calcularTotal, productos]);

 return (
    <>
      <Header />
      <div className="Car-container">
        <h1 className='titulo-cart'>Carrito de Compras</h1>
        <h2 className='Tota-h2'>Total: {total} - $ USD</h2>
        <div className='Container-CartItem'>
          {productos.map((producto) => {
            return (
              <CartProductItem key={producto.idCard}
                               producto={producto}
                               removeFromCart={handleRemoveFromCart}/>
            );
          })}
        </div>
        <br/>
        <Link to="/information">
        <div className='next'>
      {productos.length > 0 && nextPa && (
        <button className='btn-Next' onClick={goToNexpa}>Next
        </button>
        )}
      </div>
        </Link>
    
      </div>
      <Footer />
    </>
 )
};

export default Cart;