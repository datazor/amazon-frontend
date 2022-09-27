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

    <img className= "checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/08/FR-hq/2021/img/Warehouse_Deals/XCM_Manual_1314793_1619122_FR_AW_fr_aw_fr_header_rewording_fr_fr_3737993_1500x80_fr_FR.jpg" alt="checkout__ad" />

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
