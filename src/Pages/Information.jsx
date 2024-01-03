import React from 'react'

import Footer from '../Componets/Footer'
import Header from '../Componets/Header'

function Information() {


  const Onclickpage =()=>{

    // eliminar todo el localStorage
    localStorage.clear();
   
    alert("Gracias Por tu Compra, Thanks for your purchase")
    window.location= '/'
   
   }

  return (
    <>
    
    <Header/>

    <div className='Container-info'>
      <p className='P-informaPa'>Information of Pay</p>
      <div className='informortion-Container2'>
       
    
  <ul className='ul-infor'>
    <li>
      <label for="name">Nombre / Name:</label>
      <input type="text" class="form-control" id="name" name="user_name" placeholder='Jaime'/>
    </li>
    <li>
      <label for="name">Apellido / lest Name:</label>
      <input type="text"class="form-control" id="name" name="user_name" placeholder='Musk'/>
    </li>
    <li>
      <label for="mail">Pais / Country:</label>
      <input type="email" class="form-control1" id="mail" name="user_mail" placeholder='colombia' />
    </li>
    <li>
      <label for="state">Departamento / State</label>
      <input type="email"class="form-control" id="mail" name="user_mail" placeholder='TX, valle'/>
    </li>
    <li>
      <label for="addres">Direccion / Addres</label>
      <input type="email"class="form-control" id="mail" name="user_mail" placeholder='8822, Monar glex 77855' />
    </li>

    <li>
    <li>
  
      <label for="cardNumber">Numero Tarjeta / Card Number</label>
       <input type="number" class="form-control2" id="cardNumber" placeholder='855-8855-4555'/>
      
    </li>
    <li>
  
  <label for="cardNumber">Cvv</label>
   <input  type="number" class="form-control3" id="cardNumber" placeholder='585'/>
  
</li>
      <label for="Mesagge">Correo electrónico / Email:</label>
      <input type="email" class="form-control" id="mail" name="user_mail"placeholder='store@gamil.com' />
    </li>
    <li>
      <label for="msg">Mensaje / Message:</label>
      <textarea id="msg" className='msg' name="user_message" placeholder='Me house de color greed or mi casa es de color verde'></textarea>
    </li>
    
    
  </ul>


      </div>
     
        <button className='btn-pay' onClick={Onclickpage}>Pay</button>
    </div>
    <br/>
    <Footer/>   
     </>
  )
}

export default Information