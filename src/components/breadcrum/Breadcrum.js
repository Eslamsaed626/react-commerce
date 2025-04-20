import React from 'react'
import arrow_icon from '../../assets/breadcrum_arrow.png'
import './Breadcrum.css'
function Breadcrum({ product }) {
    return (
        <div className='breadcrum'>
            HOME <img src={arrow_icon}></img> SHOP <img src={arrow_icon}></img> {product.category} <img src={arrow_icon}></img> {product.name}
        </div>
    )
}

export default Breadcrum
