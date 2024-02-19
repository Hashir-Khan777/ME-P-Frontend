import React from "react";
import CartHeader from "../../components/Cart Header";
import CartProduct from "../../components/Cart Product";
import CartTotal from "../../components/Cart Total";


const CartPage =()=>{
    return(
        <>
        <CartHeader/>
        <CartProduct/>
        <CartTotal/>
        
        </>
    )
}

export default CartPage;