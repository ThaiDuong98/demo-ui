import { IconButton, Paper } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './CartItem.css'

const CartItem = ({ img, title, quantity, price }) => {
    return (
        <Paper>
            <div className='cart-item-container'>
                <div className='cart-item-info'>
                    <img src={img} className='cart-img' />
                    <h4 className='cart-item-title'>{title}</h4>
                </div>
                <div className='cart-item-actions'>
                    {/* <IconButton color="info" size='small'>
                        <AddIcon />
                    </IconButton> */}
                    <i class="fa fa-plus cart-item-button"></i>
                    <p>
                        {quantity}
                    </p>
                    <i class="fa fa-minus cart-item-button"></i>
                    {/* <IconButton color='error' size='small'>
                        <RemoveIcon />
                    </IconButton> */}
                </div>

                <p>{price.toLocaleString()} VNĐ</p>
            </div>
        </Paper>
    )
}

export default CartItem
