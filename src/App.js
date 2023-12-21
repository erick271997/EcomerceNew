
import './App.css';
import Layout from './Componets/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './Pages/NotFound';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './Pages/Home';

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
       {/* <Route path='/shop' element={<Shop />} ></Route>
       <Route path='/blog' element={<Blog />} ></Route>
       <Route path='/about' element={<About />} ></Route>
       <Route path='/contact' element={<Contact/>} ></Route>
       <Route path='/cart' element={<Cart/>} ></Route> 
       <Route path='/login' element={<Login/>} ></Route>
       <Route path='/wishlist' element={<Wishlist/>} ></Route>
       <Route path='/detalleProducts/:id' element={<DetalleProducts/>} ></Route> */}
       
       <Route component={<NotFound/>} ></Route>
        </Routes> 

       
      </BrowserRouter>
    </>
  );
}

export default App;
