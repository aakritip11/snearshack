import React, {useEffect} from "react"
import {Link, useNavigate} from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useLocation } from 'react-router-dom';
export default function Navbar(props) {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
      const location = useLocation();
    const currentPath = location.pathname;

    const scrollToFooter = () => {
        const footer = document.getElementById('Contact');
        footer.scrollIntoView({ behavior: 'smooth' });
    };

    const navigate = useNavigate();
    const handleAboutClick = () => {
        navigate('/About');
    };
    const handleProductsClick = () => {
        navigate('/App1');
    };
    const handleHomeClick = () => {
        navigate('/')
    }
    const handleAccountClick = () => {
        navigate('/Account');
    }
    const handleCartClick = () => {
        navigate('/Cart');
    }
    const handleWishlistClick = () => {
        navigate('/Wishlist');
    }
    
    return (
        <>
            <nav>
                <div className="nav--firstline">
                    <div data-aos="fade-right" className="nav--title">.sneakerShack</div>
                    <div className="nav--search-bar">
                        <input type="text" className="form-control nav--search-input" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <span className="input-group-append">
                            <button className="nav--search-icon" type="button"><i class="fa-solid fa-magnifying-glass"></i></button>
                        </span>
                    </div>
                    <div className="nav--cart">
                        <i className="fa-duotone fa-shopping-cart fa nav--cart-icon" onClick={handleCartClick}></i>
                        <i className="fa-duotone fa-heart fa nav--wishlist" onClick={handleWishlistClick}></i>
                    </div>
                </div>
                <div className='nav--secondline'>
                    <a className="nav--categories" onClick={handleHomeClick}>HOME</a>
                    <div className="dropdown--container">
                        <a className="nav--categories" onClick={handleProductsClick}>PRODUCTS</a>
                        {currentPath==='/App1' && <div className="dropdown--menu">
                            <a className="nav1--categories" onClick={()=>props.changeTab('AIRFORCE')}>AIR FORCE</a>
                            <a className="nav1--categories" onClick={()=>props.changeTab('JORDAN')}>JORDAN</a>
                            <a className="nav1--categories" onClick={()=>props.changeTab('BLAZER')}>BLAZER</a>
                            <a className="nav1--categories" onClick={()=>props.changeTab('CRATER')}>CRATER</a>
                            <a className="nav1--categories" onClick={()=>props.changeTab('HIPPIE')}>HIPPIE</a>
                        </div>}
                    </div>
                    <a className="nav--categories" onClick={handleAccountClick}>ACCOUNT</a>
                    <a className="nav--categories" onClick={handleAboutClick}>ABOUT</a>
                    <a className="nav--categories" onClick={scrollToFooter}>CONTACT</a>
                </div>
            </nav>
        </>
    )
}