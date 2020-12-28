import React,{useEffect } from 'react'
import PropTypes from 'prop-types'
import MkeymapStore from './MkeymapStore'
import MkeymapServer from './MkeymapServer'
import { makeStyles } from '@material-ui/core/styles';
import Mprodplu   from './../product/store/Mprodplu'
import SearchData from './../../common/SearchData'
import {connect} from 'react-redux'
import * as MkeymapAction from './../../../actions/Mkeymap'
import { bindActionCreators } from 'redux';

const useStyles = makeStyles((theme) => ({
    wrapMkeymapContent : {
        display : 'flex',
        width : '100%',  
        marginBottom : '30px'      
    },
    wrapMkeymapHeader: {
        margin: "15px 0px"
    },    
    wrapServer : {
        width : '50%',
        marginRight : '15px'     
    },
    wrapStore : {
        width : '35%',
        marginRight : '15px',
    },
    wrapMplu : {
        width : '20%',
        marginRight : '15px',
    }
}));
  


function Mkeymap(props) {
    const classes = useStyles();
    const { getAllMkeymap } = props;
    const { getAll } = getAllMkeymap;
       
    useEffect(() => {
        // getAll();
       
    })
    return (
        <div className={classes.wrapMkeymap}>
            <div className={classes.wrapMkeymapHeader}>
                <SearchData />
            </div>
            <div className={classes.wrapMkeymapContent}>
                <div className={classes.wrapServer}>
                    <MkeymapServer/>
                </div>
                <div className={classes.wrapStore}>
                    <MkeymapStore/>
                </div>
                <div className={classes.wrapMplu}>
                    <Mprodplu/>
                </div>
                
                <div>
                </div>

                
            </div>
        </div>
    )
}

Mkeymap.propTypes = {
    getAllMkeymap : PropTypes.shape({
        getAll : PropTypes.func,
    })
}

const mapDispatchToProp = dispatch => {
    return {
        getAllMkeymap : bindActionCreators(MkeymapAction,dispatch)
    }
}

export default connect(null,mapDispatchToProp)(Mkeymap)

