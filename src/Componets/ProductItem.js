import { Link } from "react-router-dom";





function ProductItem({ producto  }) {

  
   
    return (
        <div className='Prod-items'>
          <Link to={{pathname: `/detalleProducts/${producto.id}`}}>
            <h6 className="Pro-id">{producto.id}</h6>
        
      <figure className="container-figure">
        <img className='products'  src={producto.image} alt="products"/>
      </figure>
      <div className='Pro-info-product'>
      <p className='Data-price'> $USD: {producto.price}</p>
        <h2 className="Pro-category-h2"> {producto.category}</h2>
     
       <div className='h4-title'>
       <h4 className="Pr-h4-title">{producto.title}</h4>
       </div>  
       
    

      
      
      </div>

      </Link>
          </div>
        
        
       
     );
    
}

export default ProductItem