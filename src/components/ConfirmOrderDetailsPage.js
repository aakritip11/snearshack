import React from "react";
import { useNavigate } from "react-router-dom";

const ConfirmOrderDetailsPage = () => {
    const navigate = useNavigate();

    const handleNotConfirmClick = () => {
        navigate(-1);
    }
    const handleConfirmClick = () => {
        navigate("/ThankYou");
    }
    return(
        <div>
            <div className="confirm--page">
                <h2>Are you sure you want to Purchase Desired Products</h2>
                <div className="confirmpage--btn">
                    <button onClick={handleConfirmClick}>Yes</button>
                    <button onClick={handleNotConfirmClick}>No</button>
                </div>
            </div>
        </div>
    )
}
export default ConfirmOrderDetailsPage;
