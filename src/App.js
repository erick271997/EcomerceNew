
import  React  from "@babel/types";
import './App.css';
import Layout from './Componets/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './Pages/NotFound';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import DetalleProducts from './Pages/DetalleProducts'
import Cart from './Pages/Cart';

import Information from './Pages/Information';
import Contact from './Pages/Contact';

function App() {
  const [items, setItems] = useState([]);
  
  

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.log('Error fetching data:', error);
      });
 }, []);


 
  return (
    <>
      <BrowserRouter>
      
      <Routes>
      <Route path="/" element={<Layout />}>
         <Route index element={<Home/>}></Route> 
      </Route>
    
       <Route path='/blog' element={<Blog />} ></Route>
 
       <Route path='/contact' element={<Contact/>} ></Route>
       <Route path='/cart' element={<Cart/>} ></Route>  

 
     <Route path='/detalleProducts/:id' element={<DetalleProducts/>} ></Route> 
     <Route path='/information' element={<Information/>} ></Route>  
       
       <Route component={<NotFound/>} ></Route>
        </Routes> 

       
      </BrowserRouter>
    </>
  );
}

export default App;
