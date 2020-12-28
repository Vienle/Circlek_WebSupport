import React from 'react'
import PropTypes from 'prop-types'
import Header from './header/Header'
import SideBar from './sideBar/SideBar'
import { makeStyles } from '@material-ui/core/styles';
// import Navbar from './sideBar/Navbar'


const useStyles = makeStyles((theme) => ({
    wrapContent : {
        display : 'flex',
        width : '100%',
        height : '80vh'
    },
    content: {
        margin :'15px',
        width : '100% !important' ,
        height : '90vh',
        overflowX: 'scroll'
    }
}));

function DashBoard(props) {
    const classes = useStyles();
    const {children} =props;
    return (
        <div>
            {/* <Header/> */}
            <div className={classes.wrapContent}>
                {/* <SideBar/>
                   */}
                <div className={classes.content}>
                    { children }
                    
                </div>
            </div>
            
        </div>
    )
}

DashBoard.propTypes = {

}

export default DashBoard

