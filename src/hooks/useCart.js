import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        const keys = Object.keys(storedCart);
        // console.log(keys);
        fetch("https://ema-john-server-95.herokuapp.com/productByKeys", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(keys),
        })
            .then((res) => res.json())
            .then((products) => {
                // console.log(products);
                for (const id in storedCart) {
                    const addedCart = products.find(
                        (product) => product._id === id
                    );
                    if (addedCart) {
                        const quantity = storedCart[id];
                        addedCart.quantity = quantity;
                        savedCart.push(addedCart);
                        // setCart((previous)=>[...previous, addedProduct])
                    }
                }
                setCart(savedCart);
            });
    }, []);

    return [cart, setCart];
};

export default useCart;
