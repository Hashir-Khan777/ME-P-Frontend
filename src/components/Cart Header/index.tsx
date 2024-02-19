import React from 'react';
import { ParentFlex } from './style';

const CartHeader = ()=>{

    return(
        <>
        <ParentFlex>
            <div><p style={{letterSpacing:'3px'}}><small>{`Home > Add to Cart`}</small></p></div>
            <div><h1><b>Cart</b></h1></div>
            <div><p><small>Please fill in the fields below and click place order to complete your purchase!</small></p></div>
        </ParentFlex>
        </>
    )
}

export default CartHeader;