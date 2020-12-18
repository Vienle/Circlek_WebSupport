import React from 'react'
import { MenuItems } from '../../../contants/MenuItems'
import NavItem from './NavItem'
import {
   
    Box,
    Button,
    Drawer,
    Hidden,
    List,
    Typography,
    makeStyles
  } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    desktopDrawer: {
      width: 150,
      top: 64,
      height: 'calc(100% - 64px)'
    },
    avatar: {
      cursor: 'pointer',
      width: 64,
      height: 64
    }
  }));

function Navbar(props) {
    const classes = useStyles();
    const items = MenuItems;
    const renderItems = () => {
        let xhtml = null;
        xhtml = items.map(item => {
            return <NavItem
                href={item.href}
                Icon={item.icon}
                title={item.title}
                key={item.title}
                />
        });
        return xhtml;
    };

    return (
        // <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open = {true}
          variant="persistent"
        >
          <Box 
            height="100%"
            display="flex"
            flexDirection="column">
                <Box p={2}>
                    <List>
                        {renderItems()}
                    </List>
                </Box>
                <Box flexGrow={1} />
                <Box
                    p={2}
                    m={2}
                    bgcolor="background.dark"
                >
                    <Typography
                    align="center"
                    gutterBottom
                    variant="h4"
                    >
                    Need more?
                    </Typography>
                    <Typography
                    align="center"
                    variant="body2"
                    >
                    Upgrade to PRO version and access 20 more screens
                    </Typography>
                    <Box
                    display="flex"
                    justifyContent="center"
                    mt={2}
                    >
                    <Button
                        color="primary"
                        component="a"
                        href="https://react-material-kit.devias.io"
                        variant="contained"
                    >
                        See PRO version
                    </Button>
                    </Box>
                </Box>
          </Box>
        </Drawer>
      // </Hidden>
    )
}

Navbar.propTypes = {

}

export default Navbar

