import React, {useState} from "react";
import { useParams } from "react-router-dom";
import { AIRFORCE } from "../shoppingcardsdata";
import { JORDAN } from "../shoppingcardsdata";
import { BLAZER } from "../shoppingcardsdata";
import { CRATER } from "../shoppingcardsdata";
import { HIPPIE } from "../shoppingcardsdata";
import Navbar from "./Navbar";
import Footer from "./Footer";
import App from "../App";
import { useNavigate } from "react-router-dom";
import './ShoeSizeDropdown';
import ShoeSizeDropdown from "./ShoeSizeDropdown";

export default function ProductDetails(props) {
  const { title } = useParams();
  const products = [...AIRFORCE, ...JORDAN, ...BLAZER, ...CRATER, ...HIPPIE];
  
  const product = products.find((p) =>
    p.title.toLowerCase() === title.toLowerCase()
  );

  const styleOrange={
    color:"orange"
  }
  const styleBlack={
      color:"grey"
  }
  const [image,setImage]=React.useState(product.image[0]);
  function changeImage(ind){
    console.log(ind+" "+product.image[ind])
    setImage(product.image[ind])
  }
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };
  const navigate = useNavigate();
  
  const handleBuyNowClick = () => {
      navigate(`/Paymentoption/${title}`);
  }

  if (!product) {
    return <div>Product not found.</div>;
  }
  return (
    <div className="product-details--container">
      <Navbar/>
      <h1>Product Details</h1>
      <hr/>
      <div className="product-details--title">
        <div className="product-details--titledash">{product.title}</div>
        <div className="product-details--stars">
            {1<=product.star?(<i className="fa fa-star fa " style={styleOrange}></i>):(<i className="fa fa-star fa " style={styleBlack}></i>)}
            {2<=product.star?(<i className="fa fa-star fa " style={styleOrange}></i>):(<i className="fa fa-star fa " style={styleBlack}></i>)}
            {3<=product.star?(<i className="fa fa-star fa " style={styleOrange}></i>):(<i className="fa fa-star fa " style={styleBlack}></i>)}
            {4<=product.star?(<i className="fa fa-star fa " style={styleOrange}></i>):(<i className="fa fa-star fa " style={styleBlack}></i>)}
            {5<=product.star?(<i className="fa fa-star fa " style={styleOrange}></i>):(<i className="fa fa-star fa " style={styleBlack}></i>)}
        </div>
      </div>
      <hr/>
      {/* <div className="product-details--part2"> */}
      <div className="product-details--image">
        <img src={image} alt='' />
      </div>
      <div className="product-details--buy">
        <button className="product-details--addToCart" onClick={()=>props.addToCart(product.title)} disabled={product.cart}>{!product.cart?"Add to cart":<span className="shoppingcard--addedToCart">Added &nbsp;<i className="fa-solid fa-check afterBuyTick"></i></span>}</button>
        <button className="product-details--buyNow" onClick={()=>handleBuyNowClick()}>buy now</button>
      </div>
      <div className="product-details--colour">
        {
          product.color.map((color,index)=>(
            <div className="outer-circle">
            <div className="color" style={{backgroundColor:color}} onClick={()=>changeImage(index)}>
            </div>
            </div>
          ))
        }
      </div>
      <hr/>
      <div className="product-details--description">
        {showFullText ? (
          <span>{product.description}</span>) : (<span>{product.description.slice(0, 700)}...</span>)}
        <span className="product-details--readmode" onClick={()=>toggleText()}>
          {showFullText ? 'Read Less' : 'Read More'}
        </span>
      </div>
      <hr/>
      <ShoeSizeDropdown/>
      {/* </div> */}
      <hr/>
      <div className="product-details--price">
        <p>Price: ₹{product.price}{product.originalprice && <sub className="product-details--originalprice"><del>₹{product.originalprice}</del></sub>}</p>
      </div>
      <hr/>
      
      <Footer/>
    </div>
  );
}
