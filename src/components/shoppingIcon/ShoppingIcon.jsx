import React from 'react'
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';

const ShoppingIcon = () => {
    const navigate = useNavigate()
    const handleClick = (event) => {
        navigate('/shopping-cart')
    };

    return (
        <section>
            <IconButton onClick={handleClick}>
            <Badge badgeContent={3} color="error" >
                <ShoppingCartIcon />
            </Badge>
            </IconButton>
        </section>
    )
}

export default ShoppingIcon
