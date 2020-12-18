import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuList from '@material-ui/core/MenuList';
import NavItem from './NavItem'
import { MenuItems } from '../../../contants/MenuItems'
import { Avatar,Box, Typography } from '@material-ui/core';

const drawerWidth = 180;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    position: "relative",
    zIndex : "1"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  NavLink : {
    textDecoration : 'none',
    color :'initial'
  },
  avatar : {
    width : '100px',
    height : '100px'
  }
}));


function SideBar(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const renderItems = () => {
      let xhtml = null;
      xhtml = MenuItems.map(item => {
          return <NavItem
              href={item.href}
              Icon={item.icon}
              title={item.title}
              key={item.title}
              />
      });
      return xhtml;
  };

    const handleDrawerClose = () => {
      setOpen(!open);
    };
  
    return (
        <div>
            <Drawer
              variant="permanent"
              className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
              })}
              classes={{
                paper: clsx({
                  [classes.drawerOpen]: open,
                  [classes.drawerClose]: !open,
                }),
              }}
            >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <Box
          alignItems="center"
          display="flex"
          flexDirection="column"
          p={2}
        >
          <Avatar 
          alt="Remy Sharp" 
          src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80" 
          className={classes.avatar} />
          <Typography
          className={classes.name}
          color="textPrimary"
          variant="h5"
          >
            Vien Le
          </Typography>
          <Typography
            color="textSecondary"
            variant="body2"
          >
            IT Application Support
          </Typography><Typography
            color="textSecondary"
            variant="body2"
          >
            And
          </Typography>
          <Typography
            color="textSecondary"
            variant="body2"
          >
            Developer Assistant
          </Typography>
          
        </Box>
        <Divider />
        <MenuList>
          {renderItems()}
        </MenuList>
      </Drawer>
        </div>
    )
}

SideBar.propTypes = {

}

export default SideBar

