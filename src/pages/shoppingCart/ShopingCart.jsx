import React from 'react'
import CartList from '../../components/cartList/CartList'
import './ShoppingCart.css'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const ShopingCart = () => {
    const navigate = useNavigate()

    const redirectToPayment = () => {
        navigate('/payment')
    }

    return (
        <section className='shoping-cart-container'>
            <h3 className='shopping-cart-title'>Giỏ hàng</h3>
            <CartList />
            <div className='shopping-cart-pay'>
                <div style={{ width: '900px' }}>
                    <Button size='small' variant='contained' style={{ float: 'right' }} onClick={redirectToPayment}>Thanh toán</Button>
                </div>
            </div>
        </section>
    )
}

export default ShopingCart
