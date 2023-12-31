import React, { useState, useEffect } from 'react';
import Header from "../Componets/Header";
import Footer from "../Componets/Footer"
import CartProductItem from '../Componets/CartProductItem';

const Cart = () => {
 const [productos, setProductos] = useState([]);
 const [total, setTotal] = useState(0);

 const obtenerProductosDelCarrito = () => {
    const productosDelCarrito = localStorage.getItem('cart');
    if (productosDelCarrito) {
      setProductos(JSON.parse(productosDelCarrito));
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
      </div>
      <Footer />
    </>
 )
};

export default Cart;