import React from 'react'
import CartItem from '../cartItem/CartItem'
import './CartList.css'
import { product1Img } from '../../assets'

const cartList = [
    {
        id: 1,
        title: 'Sản phẩm 1',
        img: product1Img,
        quantity: 2,
        price: 343434
    },
    {
        id: 1,
        title: 'Sản phẩm 1',
        img: product1Img,
        quantity: 2,
        price: 343434

    },
    {
        id: 1,
        title: 'Sản phẩm 1',
        img: product1Img,
        quantity: 2,
        price: 343434

    },
    {
        id: 1,
        title: 'Sản phẩm 1',
        img: product1Img,
        quantity: 2,
        price: 343434

    }
]

const CartList = () => {
    return (
        <section className='cart-list-container'>
            {cartList.length > 0 &&
                cartList.map(item => (
                    <CartItem
                        key={item.id}
                        title={item.title}
                        img={item.img}
                        quantity={item.quantity}
                        price={item.price}
                    />
                ))
            }
        </section>
    )
}

export default CartList
