import React from "react"
import { ParentFlex } from "./style";
import { Link } from "react-router-dom";

const ThankYou = ()=>{

    return(
        <>
        <ParentFlex>
            <div><h1>Thank you for your order!</h1></div>
            <div><p>Please check your email for further details and  order Inovice</p></div>
            <div><p><b>Having trouble? <span >
                <Link to={'/Contact'} style={{cursor:'pointer'}} className="yellocol">Contact us</Link>
                
                </span></b></p></div>
            <br /><br />
            <div className="flexclass">
                <button className="color1">Return To Dashboard</button>
                    <button className="color2">
                <Link  to={'/'}>
                        Continue Shopping
                        </Link>
                        </button>
            </div>
        </ParentFlex>
        </>
    )
}

export default ThankYou;