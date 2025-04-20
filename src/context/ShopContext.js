import { createContext, useState } from "react";
import all_product from '../assets/all_product'
export const ShopContext = createContext(null);




const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length; index++) {
        cart[index] = 0;
    }
    return cart
}


const ShopContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())

    console.log(cartItems);

    const addTocart = (itemid) => {
        setCartItems((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }))
    }

    const removeFromcart = (itemid) => {
        setCartItems((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }))
    }

    const getTotalCartItems = () => {
        let total = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                total += cartItems[item]
            }
        }
        return total;
    }



    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (let item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItems[item]


            }
            return totalAmount;
        }
    }

    const contextValue = { getTotalCartItems, getTotalCartAmount, all_product, cartItems, addTocart, removeFromcart }
    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;