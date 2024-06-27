import React from "react"

export default function Footer(props){
    const currDate=new Date();
    const currYear=currDate.getFullYear();

    const [showModal,setShowModal]=React.useState(false);

    function toggleModal(){
        setShowModal(prevShowModal=>!prevShowModal);
    }
    return (
        <div className="footer" id="Contact"> 
            <div className="footer--firstline">
                <span className="footer--subscribe">
                    Subscribe to our newsletter
                    <div className="footer--subscribe--input">
                        <input type="text" className="form-control" placeholder="your@gmail.com" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <span className="input-group-append">
                            <button className="footer--join--button" type="button" onClick={toggleModal}>Join</button>
                        </span>
                    </div>
                </span>
                <span className="footer--contactno"><i className="fa-solid fa-phone"></i>
                        Contact Us 
                    <div className="contact--link">
                        555-123-4567
                    </div>
                </span>
                <span className="footer--emailid"><i className="fa-solid fa-envelope"></i>
                        Email Us 
                    <div className="contact--link">
                        customercare@sneaker.com
                    </div>
                </span>
            </div>
            <div className="contactus">
                <a href="" className="contactus--icon"><i className="fa-brands fa-instagram"></i></a>
                <a href="" className="contactus--icon"><i className="fa-brands fa-twitter"></i></a>
                <a href="" className="contactus--icon"><i className="fa-brands fa-facebook"></i></a>
                <a href="" className="contactus--icon"><i className="fa-brands fa-linkedin"></i></a>
                <a href="" className="contactus--icon"><i className="fa-brands fa-whatsapp"></i></a>
            </div>
            <div className="contactus--copyright">&#169; CopyRight.All rights reserved {currYear}</div>
            {showModal && 
                    <div className="modal">
                        <div className="modal--closeBtn">
                            <button onClick={toggleModal}>X</button>
                        </div>
                        <div className="modal--text">
                            <h1>Subscribed Successfully!</h1>
                        </div>
                    </div>
            }
        </div>
        
    )
}