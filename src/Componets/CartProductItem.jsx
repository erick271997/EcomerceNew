import { Link } from "react-router-dom";


const CartProductItem =({ producto  })  => {

  
    return (
        <div className='Prod-items'>
        <div className='index-Cart' key={producto.id}>
              <div className='Container-title-productCar'>
                <h3 className='title-productCar'>{producto.title}</h3>
              </div>
              <div className='Cart-pro'>
                <p className='price-cart'>
                 {producto.price} - $ USD
                </p>
                <figure>
                 <img src={producto.image} alt='image-Produc' />
                </figure>
              </div>
              <button className='btn-ReomeItem'></button>
            </div>
       </div>  
       
     );
    
}

export default CartProductItem