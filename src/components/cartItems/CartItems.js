import React, { useContext } from 'react'
import './CartItems.css'
import remove_icon from '../../assets/cart_cross_icon.png'
import { ShopContext } from '../../context/ShopContext'
const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromcart } = useContext(ShopContext)
    console.log(getTotalCartAmount());

    return (
        <div className='cartItems'>

            <div className='cartitems-format-main'>
                <p>product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>

            <hr></hr>
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div>
                        <div className='cartitems-format cartitems-format-main'>
                            <img src={e.image} className='carticon-product-icon'></img>
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitems-quantity'>
                                {cartItems[e.id]}
                            </button>
                            <p>${e.new_price * cartItems[e.id]}</p>
                            <img className='cartitems-remove' src={remove_icon} onClick={() => { removeFromcart(e.id) }} ></img>

                        </div>
                        <hr></hr>
                    </div>
                }
            }
            )}



            <div className='cartitems-down'>
                <div className='cartitems-total'>
                    <h1>cart Total</h1>
                    <div>
                        <div className='cartitem-total-item'>
                            <p>subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr></hr>
                        <div className='cartitem-total-item'>
                            <p>Shipping fee</p>
                            <p>Free</p>
                        </div>
                        <hr></hr>
                        <div className='cartitem-total-item'>
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>proceed to chekout</button>
                </div>
                <div className='cartitems-promocode'>
                    <p>if you have a promo code ,enter it here</p>
                    <div className='cartitem-promobox'>
                        <input type='text' placeholder='promocode'></input>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems
