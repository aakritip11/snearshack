import React, {useState} from 'react';
import { useNavigate} from 'react-router-dom';

export default function ThankYou(){
    const navigate = useNavigate();
    const handleDoneClick = () => {
        navigate("/App1")
    }
    
    return (
        <div className="confirm--page">
            <h1>Thank You For Shopping at .sneakerShack. <br></br>Enjoy Your Shopping.</h1>
        <div className="confirmpage--btn1">
          <button className="confirmpage--btn1" onClick={handleDoneClick}>
            Done
          </button>
        </div>
      </div>
    )
}


