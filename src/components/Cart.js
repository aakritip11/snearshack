import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

export default function Cart(props) {
  const navigate = useNavigate();
  var totalPrice=0;
  
  props.cart.map((data) => (
    totalPrice+=(data.price*data.qty)
  ))
  const formattedTotalPrice = parseFloat(totalPrice).toFixed(2);
  const handlebuyallClick = () => {
    navigate(`/PaymentOptionCart`)
  }

  return (
    <div className='cart--container'>
      <Navbar/>
      <div className="cart--border">
      <div className="cart">
        <h1 className="cart--title">Cart</h1>  
        {props.cart.length>0 ? props.cart.map((data) => (
          <span key={data.id}>
            <div className='cart--items'>
                <div className="cart--image">
                    <img src={data.image} alt={data.title} />
                </div>
                <div className='cart--title'>
                    <h3>{data.title}</h3>
                </div>
                <div className="cart--price">
                    <p>Price: ₹{data.price}</p>
                </div>
                <div className="cart--quantity">
                    <button className='cart--quantity-decrease' onClick={() => props.subItemQuantity(data.title)}>
                        -
                    </button>
                    <p className='cart--quantity-qty'>Quantity: {data.qty}</p>
                    
                    <button className='cart--quantity-increase' onClick={() => props.addItemQuantity(data.title)}>
                        +
                    </button>
                </div>
                <div className="cart--remove">
                    <button onClick={() => props.removeItem(data.title)}>Remove</button>
                </div>
            </div>
          </span>
        ))
        :
        <div className='cart--footeremptycart'>
          <h2>Your Cart Is Empty</h2>
        </div>
        }
        {
          props.cart.length>0 && 
          <div>
            <div className='cart--footer--buyallnow'>
                <button  onClick={()=>handlebuyallClick()}>Buy Now</button>
            </div>
            <hr/>
            <div className='cart--footer'>
              <p className="cart--footer-totalPrice">Total: ${formattedTotalPrice}</p>
              <button onClick={()=>props.emptyCart()}>Empty Cart</button>
            </div>
          </div>
        }
      </div>
      </div>
      <Footer/>
    </div>
  );
}