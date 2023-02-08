/* eslint-disable jsx-a11y/img-redundant-alt */
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';

import InputBase from '@mui/material/InputBase';
import KeyboardAltIcon from '@mui/icons-material/KeyboardAlt';

import logo from './img/logo.png'
import { Grid, Tooltip, Avatar,  } from '@mui/material';

import Collapse from '@mui/material/Collapse';

import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function ClippedDrawer() {

    const [menustate, setMenustate] = React.useState(260);
    const changeMenuState = () => {
        if (menustate === 260) {
            setMenustate(80)
        } else {
            setMenustate(260)
        }
    }

    const [open, setOpen] = React.useState(true);
    const handleClick = () => {
      setOpen(!open);
    };

    var [item] = React.useState([]);
    const populatelist = () => {
      item = []
      for (let index = 0; index <= 20; index++) {
        item.push(`Item nº ${index}`) 
      }

    }

    populatelist()

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: '#0f0f0f', boxShadow: 'none' }}>
        <Toolbar variant='regular' sx={{paddingLeft: 0, justifyContent: 'space-between'}}>

        <Grid
            width={'150px'}
            spacing={2}
            direction="row"
            alignContent="center"
            alignItems="center"
            justifyContent="center"
            style={{flexWrap: 'nowrap', display: 'flex', backgroundColor: 'none'}}
            >
            <Grid item>
            <Tooltip title="Menu">
            <IconButton aria-label="delete" onClick={changeMenuState}><MenuIcon sx={{color: '#fff', height: '20px'}} /></IconButton>
            </Tooltip>
            </Grid>  
            <Grid item>
            <IconButton aria-label="delete">
                <img 
                    sx={{alignItems: 'center'}}
                    src={logo} 
                    alt="React Image" 
                    height={'20px'}/>
            </IconButton>
            </Grid>    
        </Grid> 
   
        <Paper
        component="form"
        sx={{ p: '2px 4px', 
        display: 'flex', 
        alignItems: 'center', 
        width: 400, 
        backgroundColor: 'black',
        border: '1px solid #303030',
        borderRadius: '30px'
     }}
        >
        <IconButton sx={{ p: '10px', color: '#a0a0a0' }} aria-label="menu"><SearchIcon /></IconButton>
        <InputBase
            sx={{ ml: 1, flex: 1, color: '#fff' }}
            placeholder="Pesquisar"
            inputProps={{ 'aria-label': 'Pesquisar' }}
        />
        <IconButton type="button" sx={{ p: '10px', color: '#a0a0a0'  }} aria-label="search"><KeyboardAltIcon /></IconButton>
        <IconButton color="primary" sx={{ p: '10px', color: '#a0a0a0', backgroundColor: 'none', borderRadius: '0px'}} aria-label="directions"><SearchIcon /></IconButton>
        </Paper>

        <Grid
            width={'150px'}
            spacing={2}
            direction="row"
            alignContent="center"
            alignItems="center"
            justifyContent="center"
            style={{flexWrap: 'nowrap', display: 'flex', backgroundColor: 'NONE'}}
            >
            <Grid item>
            <Tooltip title="Criar">
            <IconButton>
            <VideocamOutlinedIcon sx={{color: "#fff"}}/>
            </IconButton>
            </Tooltip>
            </Grid>  

            <Grid item>
            <Tooltip title="Notificações">
            <IconButton>
            <NotificationsNoneOutlinedIcon sx={{color: "#fff"}}/>
                </IconButton>
            </Tooltip>
            </Grid> 

            <Grid item>
            <Tooltip title="">
            <IconButton>
            <Avatar sx={{ bgcolor: 'red' }}>G</Avatar>
                </IconButton>
            </Tooltip>
            </Grid>  
        </Grid> 
        
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        border="none"
        sx={{
            border:"none",
            width: menustate,
            height: '100vh',
            flexShrink: 0,
          [`& .MuiDrawer-paper`]: { 
            width: menustate, 
            borderWidth: 0,
            boxSizing: 'border-box', 
            },
        }}
      >
        <Toolbar sx={{}} />
        <Box id="drawer" sx={{ 
          overflowX: 'hidden', 
          paddingLeft: '18px', 
          paddingRight: '18px',
          backgroundColor: '#0f0f0f',
          height: '100vh',
          }}>
          <List sx={{color: '#fff'}}>
            {['Inicio', 'Shorts', 'Inscrições',].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton id="itemhover"  sx={{borderRadius: '4px'}}>
                  <ListItemIcon><CircleOutlinedIcon sx={{color: '#fff'}} /></ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider sx={{backgroundColor: '#262626'}} />
          <List sx={{color: '#fff'}}>
            {['Biblioteca', 'Histórico', 'Seus videos', 'Seus filmes', 'Assistir mais tarde'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton id="itemhover"  sx={{borderRadius: '4px'}}>
                  <ListItemIcon><CircleOutlinedIcon sx={{color: '#fff'}} /></ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}

            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>

                {
                  item.map((text, index) =>(
                    <ListItem key={text} disablePadding>
                      <ListItemButton id="itemhover"  sx={{borderRadius: '4px'}}>
                        <ListItemIcon><CircleOutlinedIcon sx={{color: '#fff'}} /></ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItemButton>
                    </ListItem>
                  ))
                }

              </List>
            </Collapse>

            <ListItemButton onClick={handleClick} >
              <ListItemIcon>
                {open === true
                ? <KeyboardArrowDownIcon  sx={{color: '#fff'}}/>
                : <KeyboardArrowUpIcon  sx={{color: '#fff'}}/>
                }
                
              </ListItemIcon>
              <ListItemText primary="Ver mais" />
            </ListItemButton>

          </List>
        </Box>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: '#272727', color: '#fff' }}>
        <Toolbar />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    </Box>
  );
}
