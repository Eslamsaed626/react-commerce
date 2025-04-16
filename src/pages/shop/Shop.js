import React from 'react'
import Hero from '../../components/hero/Hero'
import Popular from '../../components/popular/Popular'
import Offers from '../../components/offers/Offers.js'
import NewCollection from '../../components/newCollection/NewCollection.js'
import NewsLetter from '../../components/newsLetter/NewsLetter.js'

const Shop = () => {
    return (
        <div>
            <Hero></Hero>
            <Popular></Popular>
            <Offers></Offers>
            <NewCollection></NewCollection>
            <NewsLetter></NewsLetter>
        </div>
    )
}

export default Shop
