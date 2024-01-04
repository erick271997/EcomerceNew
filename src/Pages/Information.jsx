import React from 'react'

import Footer from '../Componets/Footer'
import Header from '../Componets/Header'

function Information() {


  const Onclickpage =()=>{


    localStorage.clear();
   
    window.alert("Gracias Por tu Compra, Thanks for your purchase")
    window.location= '/'
   
   }

  return (
    <>
    
    <Header/>

    <div className='Container-info'>
      <p className='P-informaPa'>Information of Pay</p>
       <form class="form" >

   <label for="name">Nombre / Name:</label>
  <input type="text"  placeholder="Jhon"/>
  <label for="name">Apellido / lest Name:</label>
  <input type="text" placeholder='Brox' /> 
  <label for="name">Pais / Coutry:</label>
  <input type="text" placeholder='Colombia' />
  <label for="name">Departamento / State:</label>
  <input type="email" placeholder="Valle" />
  <label for="name">Correo Electr / Email:</label>
  
 <input type="email" placeholder="store@gamil.com" />

 <label className='Card' for="name"><h1 className='h2-lables'>Tarjeta / Card:</h1>

 <input className='CardNum' type="Number"  placeholder="888-5689-5587" />
 
 <input className='CardCvv' type="Number" placeholder="Cvv" />
</label>
<label for="name">Dirrecion / Anddres:</label>
 <input type="text" placeholder='8822, Monar glex 77855' />
 <label for="name">Mensaje / Msg:</label>
 <input type="msg" placeholder='Hello, Nedd...' />
</form>
     
        <button className='bton-form-button' onClick={Onclickpage}>Pay</button>
    </div>
    <br/>
    <Footer/>   
     </>
  )
}

export default Information