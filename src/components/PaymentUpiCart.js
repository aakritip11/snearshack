import React from 'react';
import QRCode from 'qrcode.react';
import { useNavigate, useParams } from 'react-router-dom';
const PaymentUpiCart = () => {
  // You can use a static string as the value or leave it empty for a blank QR code
  const navigate = useNavigate();
  const qrCodeValue = '';
  const {title} = useParams();
  const handleOrderDetails = () => {
    navigate(`/OrderDetailsCart`);
  }

  return (
    <div className='paymentupi'> 
        <div className='paymentupi--container' style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Scan QR Code to Make Payment</h1>
            <QRCode value={qrCodeValue} size={200} />
            <p>Scan the QR code with your payment app to make a payment.</p>
            <div className='paymentupi--checkoutbtn'>
                <button className="checkoutform--onsubmit" onClick={handleOrderDetails}>Checkout</button>
            </div>
        </div>
    </div>
  );
};

export default PaymentUpiCart;
