import React from 'react'
import Header from '../Componets/Header'
import Footer from '../Componets/Footer'
import { useEffect } from 'react';


function Blog() {
  return (
    <div>
      <Header/>
   <div className='Mision'>
    <h1 className='h1-mision'>MISION</h1>
    <p className='p-mision'>
    Satisfacer las necesidades técnicas de los clientes y 
    lograr que su negocio funcione es, evidentemente,
    uno de los principales objetivos de Alabaz. Sin embargo, 
    nuestra labor va mucho más allá. Nos gusta estar cerca del
    cliente, intercambiar opiniones, ideas, hablar sobre su 
    negocio, ayudarle en cualquier cuestión que necesite. No 
    podemos olvidar que nosotros también somos una empresa y, 
    probablemente, hayamos pasado o estemos pasando por las 
    mismas circunstancias que viven nuestros clientes.
    Por todo ello, la mayor satisfacción para nosotros es 
    verlos crecer, ayudándoles en todo lo que podamos, 
    mucho más allá de simplemente prestar un servicio técnico en PrestaShop.
    </p>

   </div>
   <div className='Mision'>
    <h1 className='h1-mision'>VISION</h1>
    <p className='p-mision'>
    En AlabazWeb nos esforzamos por seguir siendo una de las mejores
     empresas del mundo en el desarrollo de ecommerce PrestaShop 
     para ofrecer siempre a nuestros clientes las mejores soluciones 
     para sus empresas. No basta con crear una tienda online, 
     nosotros queremos mejorarla, hacerla eficiente, 
     lograr un diseño adecuado y personal y conseguir que todas
      las personas que confían en nosotros obtengan el éxito 
      por el que trabajan incansablemente
    </p>

   </div>



      <Footer/>
    </div>
  )
}

export default Blog
