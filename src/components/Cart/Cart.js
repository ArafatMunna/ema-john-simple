import React from "react";
import "./Cart.css";

const Cart = ({ cart, children }) => {
    // console.log(cart);
    let total = 0;
    let shipping = 0;
    let quantity = 0;

    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }

    /* const quantity = cart.reduce(
        (previous, current) =>
            previous + (current.quantity === 0 ? 1 : current.quantity),
        0
    );
    const total = cart.reduce(
        (previous, current) =>
            previous +
            current.price * (current.quantity === 0 ? 1 : current.quantity),
        0
    );
    const shipping = cart.reduce(
        (previous, current) => previous + current.shipping,
        0
    ); */

    const tax = (total * 0.1).toFixed(2);
    const grandTotal = total + shipping + Number(tax);
    return (
        <div className="cart">
            <h4>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
            {children}
        </div>
    );
};

export default Cart;
