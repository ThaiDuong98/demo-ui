import React from 'react'
import ProductList from '../../components/productList/ProductList'
import { ProductOne } from '../../constanst'

const Shop = () => {
    return (
        <section>
            <ProductList
                producList={ProductOne}
                productCategoty="Featured Products"
                shortNote="Summer Collection New Morden Design"
                key="product1"
            />
        </section>
    )
}

export default Shop
