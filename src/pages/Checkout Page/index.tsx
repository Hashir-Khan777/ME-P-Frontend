import CheckOut from "../../components/Checkout";
import ShippingAdress from "../../components/Shipping Address";
import ShippingMethod from "../../components/Shipping Method";
import PaymentMethod from "../../components/payment method";



const CheckoutPage =()=>{
    return(
        <>
        <CheckOut/>
        <ShippingAdress/>
        <ShippingMethod/>
        <PaymentMethod/>
        </>
    )
}

export default CheckoutPage;