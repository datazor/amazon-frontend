import React from 'react';
import "./Checkout.css";
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import {useStateValue} from './Stateprovider';




function Checkout() {
  const [{basket},] = useStateValue(); 

  console.log(basket)


 

  return (
    <div className="checkout">

    <div className= "checkout__left">

    

    <div className="checkout__basket">

    <h2 className="checkout__title">
    This is your shopping basket
    </h2>

  
{basket.map(item =>(
  <CheckoutProduct
    title={item.title}

    id={item.id}
    
    image={item.image}
    price={item.price}
    rating={item.rating}


  />
))
}
    </div>

    </div>


    <div className="checkout__right">
    
    <Subtotal />
    </div>



    </div>
  )
}

export default Checkout
