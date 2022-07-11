import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

import React from 'react'

export const Navbar = () => {
    return (
            <AppBar position="static" color='transparent' sx={{boxShadow: 'none'}}>
                <Toolbar variant="dense" sx={{ justifyContent:'flex-end'}}  >
                    <IconButton edge="end" size='large' aria-label="menu" sx={{ mr: 2, color:'#fff' }}>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
    )
}
