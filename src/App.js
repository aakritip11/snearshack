import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Firstpage from './components/firstPage';
import Cart from './components/Cart';
import {AIRFORCE,JORDAN,CRATER,HIPPIE,BLAZER} from './shoppingcardsdata.js';
import Shoppingcard from './components/shoppingcard';
import Wishlist from './components/Wishlist';
import Footer from './components/Footer';
import ProductDetails from './components/ProductDetails';
import Account from './components/Account';
import Account1 from './components/Account1';
import OrderDetails from './components/OrderDetails';
import About from './components/About';
import Card from './components/Card';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import img from "./images/img.png"
import DealofDay from './components/DealofDay';
import Checkoutform from './components/checkoutform';
import Categories from './components/Categories';
import AccountDetailsPage from './components/AccountDetailsPage';
import Paymentoption from './components/Paymentoption';
import OrderDetailsCart from './components/OrderDetailsCart';
import Paymentupi from './components/Paymentupi';
import PaymentOptionCart from './components/PaymentOptionCart';
import PaymentUpiCart from './components/PaymentUpiCart';
import CheckoutformCart from './components/checkoutformCart';
import ConfirmOrderDetailsPage from './components/ConfirmOrderDetailsPage';
import ThankYou from './components/ThankYou';

const data=[
  {
      icon:"fa-solid fa-truck-fast",
      title: "FREE SHIPPING",
      description: "Free worldwide shipping on all orders.",
  }
  ,
  {
      icon:"fa-duotone fa-box fa",
      title:"30 DAYS RETURN",
      description:"No question return and easy refund in 14 day's."
  },
  {
      icon:"fa-regular fa-paper-plane",
      title:"CONTACT US",
      description:"Keep in touch via email and support system."
  }
]
const App = () => {
    const cards=data.map(function(data){
      return(
        <Card
          cards={data}
        />
      )
  })

  const [wishlist,setWishlist]=React.useState({BLAZER,CRATER,JORDAN,HIPPIE,AIRFORCE});

  function addOrRemovefromWishlist(title){
    console.log(title);
    setWishlist(BLAZER.map((data)=>{
      return data.title===title?[...data,data.wishlist=!data.wishlist]:data;
    }))
    setWishlist(CRATER.map((data)=>{
      return data.title===title?data.wishlist=!data.wishlist:data;
    }))
    setWishlist(JORDAN.map((data)=>{
      return data.title===title?data.wishlist=!data.wishlist:data;
    }))
    setWishlist(HIPPIE.map((data)=>{
      return data.title===title?data.wishlist=!data.wishlist:data;
    }))
    setWishlist(AIRFORCE.map((data)=>{
      return data.title===title?data.wishlist=!data.wishlist:data;
    }))
  }
  const [shoppingcard,setShoppingcard]=React.useState(AIRFORCE);
  function changeTab(str){
    if(str==="BLAZER")
    setShoppingcard(BLAZER);
    else if(str==="AIRFORCE")
    setShoppingcard(AIRFORCE);
    else if(str==="JORDAN")
    setShoppingcard(JORDAN);
    else if(str==="CRATER")
    setShoppingcard(CRATER);
    else if(str==="HIPPIE")
    setShoppingcard(HIPPIE);
  }

  const shoppingcards=shoppingcard.map(function(data){
    return(
      <Shoppingcard
      data={data}
      addToCart={addToCart}
      addOrRemovefromWishlist={addOrRemovefromWishlist}
    />
    )
  })

  const [displayForm,setDisplayForm]=React.useState(false);


  function toggleForm(){
    setDisplayForm(prevDisplayForm=>!prevDisplayForm)
  }

  const [cart,setCart]=React.useState([]);
  const [cartbtn,setCartbtn]=React.useState({BLAZER,CRATER,JORDAN,HIPPIE,AIRFORCE});

  function addToCart(title){
    BLAZER.map(function(data){
      if(data.title===title){
        setCart(prevCart=>{
          return [...prevCart,data];
        })
      }
    })

    AIRFORCE.map(function(data){
      if(data.title===title){
        setCart(prevCart=>{
          return [...prevCart,data];
        })
      }
    })

    JORDAN.map(function(data){
      if(data.title===title){
        setCart(prevCart=>{
          return [...prevCart,data];
        })

      }
    })

    CRATER.map(function(data){
      if(data.title===title){
        setCart(prevCart=>{
          return [...prevCart,data];
        })
      }
    })

    HIPPIE.map(function(data){
      if(data.title===title){
        setCart(prevCart=>{
          return [...prevCart,data];
        })
      }
    })
    setCartbtn(BLAZER.map((data)=>{
      return data.title===title?data.cart=true:data;
    }))
    setCartbtn(CRATER.map((data)=>{
      return data.title===title?data.cart=true:data;
    }))
    setCartbtn(JORDAN.map((data)=>{
      return data.title===title?data.cart=true:data;
    }))
    setCartbtn(AIRFORCE.map((data)=>{
      return data.title===title?data.cart=true:data;
    }))
    setCartbtn(HIPPIE.map((data)=>{
      return data.title===title?data.cart=true:data;
    }))
  }


  function addItemQuantity(title){
    setCart(prevCart=>{
      return prevCart.map((data)=>{
        return data.title===title?{...data,qty:data.qty+1}:data;
      })
    })
  }

  function subItemQuantity(title){
    setCart(prevCart=>{
      return prevCart.map((data)=>{
        return data.title===title?{...data,qty:(data.qty>1?data.qty-1:data.qty)}:data;
      })
    })
  }

  function emptyCart(){
    setCart([]);
  }
  function removeItem(title){
    setCart(prevCart=>{
      return prevCart.filter((data)=>{
        return data.title!==title;
      })
    })
    setCartbtn(BLAZER.map((data)=>{
      return data.title===title?data.cart=false:data;
    }))
    setCartbtn(CRATER.map((data)=>{
      return data.title===title?data.cart=false:data;
    }))
    setCartbtn(JORDAN.map((data)=>{
      return data.title===title?data.cart=false:data;
    }))
    setCartbtn(AIRFORCE.map((data)=>{
      return data.title===title?data.cart=false:data;
    }))
    setCartbtn(HIPPIE.map((data)=>{
      return data.title===title?data.cart=false:data;
    }))
  }

  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Firstpage />} />
        <Route path='/App1' element={
          <>
          {
            <div className="App">
              <Navbar
              changeTab={changeTab}
              />
              <div className='carousel'>
                <Carousel/>
              </div>
              <div className="salescards">
                {shoppingcards}
              </div>
              <Categories/>
              <DealofDay/>
              <div className="cardsthree">
                {cards}    
              </div>
              <img src={img} className="footimage"/>
              <Footer/>
            </div>
          }
        </>
        }/>
        <Route path='/About' element={<About />}/>
        
        <Route path='/Account' element={<Account/>}/>
        <Route path='/Account1' element={<Account1 setAuthenticated={setAuthenticated}/>}/>
        <Route path='/Cart' element={<Cart
            cart={cart}
            emptyCart={emptyCart} 
            addItemQuantity={addItemQuantity}
            subItemQuantity={subItemQuantity}
            removeItem={removeItem}
            addToCart={addToCart}
          />}/>
        <Route path='/Wishlist' element={<Wishlist
            addToCart={addToCart}
          />}/>
          <Route path='/Footer' element={<Footer/>}/>
          <Route path='/ProductDetails/:title' element={<ProductDetails addToCart={addToCart} />} />
          <Route path='/Checkoutform/:title' element={<Checkoutform/>}/>
          <Route path='/OrderDetailsCart' element={<OrderDetailsCart
            cart={cart}
          />}/>
          <Route path='/AccountDetailsPage' element={<AccountDetailsPage/>}/>
          <Route path='/OrderDetails/:title' element={<OrderDetails />}/>
          <Route path='/Paymentoption/:title' element={<Paymentoption/>}/>
          <Route path='/Paymentupi/:title' element={<Paymentupi/>}/>
          <Route path='/PaymentOptionCart' element={<PaymentOptionCart/>}/>
          <Route path='/PaymentUpiCart' element={<PaymentUpiCart/>}/>
          <Route path='/CheckoutformCart' element={<CheckoutformCart/>}/>
          <Route path='/ConfirmOrderDetailsPage' element={<ConfirmOrderDetailsPage/>}/>
          <Route path='/ThankYou' element={<ThankYou/>}/>
      </Routes>
    </Router>
  );
};

export default App;
