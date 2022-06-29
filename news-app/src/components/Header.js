import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import NewsList from './NewsList'

export default function Header() {
    function refreshPage(){
        window.location.reload();
    } 

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#f5966a' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
             <Link to='/'>
            <MenuIcon />
            </Link>
          </IconButton>
         
          <Typography variant="h6"  sx={{ flexGrow: 2 }}>
            News
          </Typography>
         
          <Button color="inherit" onClick={refreshPage}>Refresh</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}