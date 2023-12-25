import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";


function Footer() {
  return (
    <div className='Container-Footer'>
     
     <div className='div-Partnet'>
      <p className='P-Partnet'>Company Partners</p>
      <div className='socios-h'>
        <h5 className='h1-Partnet'> Erick campaz castro </h5>
      <h5 className='h2-Partnet'> Maria Brox </h5>
      <h5 className='h3-Partnet'> Rick toz </h5>
      <h5 className='h4-Partnet'> json water </h5>
      <p className='P-Copy'>© 2021 - Desarrollado Por: Programming Company</p>
      {/* © 2021 - Desarrollado por: */}
      </div>
     
      
     </div>
     <div className='Continer-Pro-footer'>
      <p className='P-P-Footer'>Products For</p>
     <h5 className='Prod-footer-h1'> Women </h5>
      <h5 className='Prod-footer-h2'> Girls </h5>
      <h5 className='Prod-footer-h3'> Childers </h5>
      <h5 className='Prod-footer-h4'> Men </h5>
     </div>
     
     <div className='Continer-Pro-footer'>
      <p className='P-P-Footer'>Information</p>
     <a href='' className='Prod-footer-h1'> Number: +57(304)-200-3246 </a>
      <h5 className='Prod-footer-h2'> Ubucatio: Ca 1 57B969 Coul Zip:77024 </h5>
      <h5 className='Prod-footer-h3'> Colombia </h5>
      <h5 className='Prod-footer-h4'> Cali-Valle del cauca  </h5>
     </div>
     
     <div className='Continer-footer-social'>
      <p className='P-P-Footer'>Social networks</p>
     <Link to='https://www.facebook.com/erick.campaz/' className='Link-footer-fa'><FaFacebook/></Link>
      <Link to='https://www.facebook.com/erick.campaz/'className='Link-footer-ins'><FaInstagramSquare/> </Link>
      <Link to='https://www.facebook.com/erick.campaz/'className='Link-footer-twi'><IoLogoTwitter/> </Link>
      <Link to='https://www.facebook.com/erick.campaz/'className='Link-footer-lik'><CiLinkedin/> </Link>
      
     </div>
    
     
      </div>
      
  )
}

export default Footer