import React from 'react'
import './NewCollection.css'
import '../popular/Popular.css'
import new_collection from '../../assets/new_collections'
import Item from '../item/Item'
const NewCollection = () => {
    return (
        <div className='new-collection'>
            <h1>New Collection</h1>
            <hr></hr>
            <div className='collections'>
                {new_collection.map((item, i) => (

                    <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}></Item>
                ))}
            </div>
        </div>
    )
}

export default NewCollection
