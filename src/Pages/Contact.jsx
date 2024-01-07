import React from 'react';
import { CiLinkedin } from 'react-icons/ci';
import { FaFacebook, FaInstagramSquare } from 'react-icons/fa';
import { IoLogoTwitter } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Footer from '../Componets/Footer';
import Header from '../Componets/Header'
import erick from '../image/erick.jpeg'
import Maria from '../image/María Brox.png'


function Contact() {
  return (
    <>
    <Header/>
    <div >
        <h1 className='M-socio-con'>Majority partners of the company</h1>
    </div>
   
    <div className='div-socio'>
        <figure className='Figure-Im-socio'>
            <img className='Im-socio' src={erick} alt='Socios'/>
        </figure>
        
        <div className='div-Na-socio'>
              <h2 className='Na-socio'>Erick Campaz</h2>
        </div>
      
        <div className='div-estudio'>
           <h3 className='h-estudio'>Estudio: </h3>
            <p className='p-socio'>Estudio en la univesidad del pacifico Acuicultura 
                y Pesca, con el titulo de ingeniero acuícola. 
                Tambien hizo especializacion en Tecnologia de computacion,
                como programacion, manejo de tecnologia</p>
        <div>
           <h1 className='h1-socio-infoc'>Informatio</h1>
           <div>
           <h2 className='email-soc'> Correo:<strong> erickcampaz@gmail.com</strong></h2>
           <h2 className='numer-socio-C'> Telefono: +57 (304)-200-3246</h2>
           
           </div>
        </div>
        <div className='rede-sociales-conct'>
        <Link to='https://www.facebook.com/erick.campaz/' className='Link-cont-fa'><FaFacebook/></Link>
      <Link to='https://www.facebook.com/erick.campaz/'className='Link-cont-ins'><FaInstagramSquare/> </Link>
      <Link to='https://www.facebook.com/erick.campaz/'className='Link-cont-twi'><IoLogoTwitter/> </Link>
      <Link to='https://www.facebook.com/erick.campaz/'className='Link-cont-lik'><CiLinkedin/> </Link>
      
        </div>
          
        </div>
       
        </div> 

        <br/>


        <div className='div-socio1'>
        <figure className='Figure-Im-socio'>
            <img className='Im-socio' src={Maria} alt='Socios'/>
        </figure>
        
        <div className='div-Na-socio'>
              <h2 className='Na-socio'>María Brox</h2>
        </div>
      
        <div className='div-estudio'>
           <h3 className='h-estudio'>Estudio: </h3>
            <p className='p-socio'>Estudio en la univesidad del Ingeneria en computacion 
                y manejos de apliacaiones e inteligencia artificial. Tambien tiene un especializacion 
                en marketing digital y adminitracion empresa</p>
        <div>
           <h1 className='h1-socio-infoc'>Informatio</h1>
           <div>
           <h2 className='email-soc'> Correo:<strong> maríabrox@gmail.com</strong></h2>
           <h2 className='numer-socio-C'> Telefono: +57 (300)-250-3456</h2>
           
           </div>
        </div>
        <div className='rede-sociales-conct'>
        <Link to='https://www.facebook.com/erick.campaz/' className='Link-cont-fa'><FaFacebook/></Link>
      <Link to='https://www.facebook.com/erick.campaz/'className='Link-cont-ins'><FaInstagramSquare/> </Link>
      <Link to='https://www.facebook.com/erick.campaz/'className='Link-cont-twi'><IoLogoTwitter/> </Link>
      <Link to='https://www.facebook.com/erick.campaz/'className='Link-cont-lik'><CiLinkedin/> </Link>
      
        </div>
          
        </div>
       
        </div> 
        <br/>
    
    <Footer/>
    </>
  )
}

export default Contact