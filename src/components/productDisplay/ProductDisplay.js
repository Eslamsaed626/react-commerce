import React, { useContext } from 'react'
import './ProductDisplay.css'

import star_icon from '../../assets/star_icon.png'
import star_dull_icon from '../../assets/star_dull_icon.png'
import { ShopContext } from '../../context/ShopContext'
const ProductDisplay = ({ product }) => {

    const { addTocart } = useContext(ShopContext)
    return (
        <div className='productDisplay'>
            <div className='productDisplay-left'>
                <div className='productDisplay-img-list'>
                    <img src={product.image}></img>
                    <img src={product.image}></img>
                    <img src={product.image}></img>
                    <img src={product.image}></img>
                </div>
                <div className='productDisplay-img'>
                    <img className='productDisplay-main-img' src={product.image}></img>
                </div>
            </div>
            <div className='productDisplay-right'>
                <h1>{product.name}</h1>
                <div className='productDisplay-right-star'>
                    <img src={star_icon}></img>
                    <img src={star_icon}></img>
                    <img src={star_icon}></img>
                    <img src={star_icon}></img>
                    <img src={star_dull_icon}></img>
                    <p>(122)</p>
                </div>
                <div className='productDisplay-right-prices'>
                    <div className='price-old'>${product.old_price}</div>
                    <div className='price-new'>${product.new_price}</div>
                </div>

                <div className='description'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </div>
                <div className='size'>
                    <h2>Select Size</h2>
                    <div className='sizes'>
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>

                <button onClick={() => addTocart(product.id)}>ADD TO CART</button>
                <p className='productDisplay-right-category'>
                    <span>Category :</span>Women , T-Shirt , Crop Top
                </p>
                <p className='productDisplay-right-category'>
                    <span>Tags :</span>Modern , Latest
                </p>
            </div>
        </div>
    )
}

export default ProductDisplay
