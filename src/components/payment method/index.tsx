import React, { useState } from "react";
import { ContainerDiv, JustifyDiv, ParentDiv } from "./style";
import visa from '../../assets/visa.png'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';



const PasswordInput: React.FC<{ label: string }> = ({ label }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="password-input">
      <label>{label}</label>
      <div className="input-container">
        <input
        placeholder="Security Code"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span  className="toggle-icon" onClick={handleTogglePassword}>
          {showPassword ? <span ><RemoveRedEyeIcon  style={{maxWidth:'20px'}} /></span> : <span ><VisibilityOffIcon style={{maxWidth:'20px'}} /></span>}
        </span>
      </div>
    </div>
  );
};

const PaymentMethod = () => {
  return (
    <>
      <ContainerDiv>
        <div className="heading">
        <br />

          <p style={{fontSize:'22px', letterSpacing:'2%'}}>
            <span style={{fontWeight:'600'}} className="heading">Payment Method</span>
          </p>
          <p>
            <small>All transactions are secure and encrypted.</small>
          </p>
          <br />
        </div>
        <ParentDiv className="shippingclass">
          <div>
            <p style={{marginBottom:'0px'}}>
              <input type="radio" /> <span style={{fontWeight:'600'}}> Credit Card</span>
            </p>
            <p style={{marginTop:'0px'}}>
              <small>We accept all major credit cards.</small>
            </p>
            <br />
            <img src={visa} alt="visa" />
          </div>
          <div>
            <JustifyDiv>
              <div className="customWidth">
                <input type="text" placeholder="Card number" />
              </div>
              <div className="customWidth">
                <input type="text" placeholder="Name of card" />
              </div>
            </JustifyDiv>
            <JustifyDiv>
              <div className="customWidth">
                <input
                  type="text"
                  placeholder="Expiration date (MM/YY)"
                />
              </div>
              <div className="customWidth">
                <PasswordInput label="" />
              </div>
            </JustifyDiv>
            <br />
          </div>
          <div>
            <div className="marginbottom">
              <p style={{marginBottom:'0px'}}>
                <input type="radio" name="" id="" />
                 <span style={{fontWeight:'600'}}>Cash on delivery</span>
              </p>
              <p style={{marginTop:'0px'}}><small>Pay with cash upon delivery.</small></p>
            </div>
            
          </div>
          
          <br />
        </ParentDiv>
        <br /> <br /> 
          <div><button className="orderbutton">
            <span style={{fontWeight:'600'}}>Place Order</span>
            </button></div>
          <br /> <br /> <br />
      </ContainerDiv>
    </>
  );
};

export default PaymentMethod;
