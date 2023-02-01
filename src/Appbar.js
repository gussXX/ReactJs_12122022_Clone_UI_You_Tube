import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { auto } from '@popperjs/core';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Drawer } from '@mui/material';

import './Styles.css'

export default function FixedContainer() {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        }));

    const [menu, setMenu] = React.useState({ color : 'red', width : '100vh'})
    const chanceMenuClick = () =>{
        if (menu.color == 'red') {setMenu({color: 'blue', width: '100vh'})} 
        else {setMenu({color: 'red', width: '100vh'})}
    }

    const [open, setOpen] = React.useState(true);
    const changeDrawer = () => {setOpen(true)}

  return (
    <React.Fragment>
        <CssBaseline />
            <div className='App'>
                <AppBar position='sticky'>
                    <Toolbar sx={{backgroundColor: 'lightgray'}}>
                        <IconButton sx={{color: '#fff'}} onClick={chanceMenuClick}><MenuIcon/></IconButton>
                    </Toolbar>
                </AppBar>

                <Box>
                    <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)} >
                        <Box sx={{backgroundColor: 'red', width: '250px', height: '400px'}}></Box>
                    </Drawer>
                    <Grid container spacing={0} direction="row" justifyContent="center" alignItems="flex-start">
                        <Grid item width={menu.width}
                        xs={menu.color == 'red' ? 3 : 2} 
                        sm={menu.color == 'red' ? 3 : 2} 
                        md={menu.color == 'red' ? 3 : 2}
                        lg={menu.color == 'red' ? 1 : 2}
                        
                        sx={{flexShrink: 0,flexGrow: 1, flexBasis: 1,}}
                        >

                            <Box sx={{backgroundColor: menu.color, height: menu.width}}>Left</Box>
                        </Grid>
                        
                        <Grid item 
                            xs={menu.color == 'red' ? 9 : 10}
                            sm={menu.color == 'red' ? 9 : 10}
                            md={menu.color == 'red' ? 9 : 10} 
                            lg={menu.color == 'red' ? 11 : 10}>

                            <Box sx={{backgroundColor: 'gray', 
                            height: 'auto', 
                            display: 'flex', 
                            }}>
                                <Grid container spacing={2} direction="row" justifyContent="center" alignItems="flex-start">
                                    <Grid item><div style={{height: '200px', width: '200px', backgroundColor: 'pink'}}></div></Grid>
                                    <Grid item><div style={{height: '200px', width: '200px', backgroundColor: 'pink'}}></div></Grid>
                                    <Grid item><div style={{height: '200px', width: '200px', backgroundColor: 'pink'}}></div></Grid>
                                    <Grid item><div style={{height: '200px', width: '200px', backgroundColor: 'pink'}}></div></Grid>

                                    <Grid item><div style={{height: '200px', width: '200px', backgroundColor: 'pink'}}></div></Grid>
                                    <Grid item><div style={{height: '200px', width: '200px', backgroundColor: 'pink'}}></div></Grid>
                                    <Grid item><div style={{height: '200px', width: '200px', backgroundColor: 'pink'}}></div></Grid>
                                    <Grid item><div style={{height: '200px', width: '200px', backgroundColor: 'pink'}}></div></Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

            </div>
        </React.Fragment>
  );
}