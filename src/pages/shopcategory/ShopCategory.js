import React, { useContext } from 'react'
import './ShopCategory.css'
import ShopContextProvider, { ShopContext } from '../../context/ShopContext';
import dropdown_icon from '../../assets/dropdown_icon.png'
import Item from '../../components/item/Item';
const ShopCategory = ({ banner, category }) => {

    const { all_product } = useContext(ShopContext);
    return (
        <div className='shop-category'>
            <img className='shopcategory-banner' src={banner}></img>
            <div className='shopcategory-indexSort'>
                <p>
                    <span>Showing 1-12</span> outof 36 products
                </p>
                <div className='shopcategory-sort'>
                    Sort bu <img src={dropdown_icon}></img>
                </div>
            </div>

            <div className='shopcategory-products'>
                {all_product.map((item, i) => {
                    if (category === item.category) {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}></Item>
                    }
                })}
            </div>
            <button className='loadmore'>load more</button>
        </div>
    )
}

export default ShopCategory
