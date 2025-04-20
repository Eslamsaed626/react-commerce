import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../../components/breadcrum/Breadcrum';
import ProductDisplay from '../../components/productDisplay/ProductDisplay';
import DescriptionBox from '../../components/descriptionBox/DescriptionBox';
import RelatedProducts from '../../components/relatedProducts/RelatedProducts'
const Products = () => {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams();
    const product = all_product.find((e) => e.id === Number(productId))


    return (
        <div>
            <Breadcrum product={product}></Breadcrum>
            <ProductDisplay product={product}></ProductDisplay>
            <DescriptionBox></DescriptionBox>

            <RelatedProducts></RelatedProducts>
        </div>
    )
}

export default Products
