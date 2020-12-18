import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper';
import SapOITM   from './SapOITM'
import ProductStore   from './store/Product'
import Mprodplu   from './store/Mprodplu'
import Grid from '@material-ui/core/Grid';

function Product(props) {
    return (
        <div>
            <Paper>
            <Grid container spacing={2}>
                <Grid item xs={6}><SapOITM/></Grid>
                <Grid item xs={4}><ProductStore/></Grid>
                <Grid item xs={2}><Mprodplu/></Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={6}><SapOITM/></Grid>
                <Grid item xs={4}><ProductStore/></Grid>
                <Grid item xs={2}><Mprodplu/></Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={6}><SapOITM/></Grid>
                <Grid item xs={4}><ProductStore/></Grid>
                <Grid item xs={2}><Mprodplu/></Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={6}><SapOITM/></Grid>
                <Grid item xs={4}><ProductStore/></Grid>
                <Grid item xs={2}><Mprodplu/></Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={6}><SapOITM/></Grid>
                <Grid item xs={4}><ProductStore/></Grid>
                <Grid item xs={2}><Mprodplu/></Grid>
            </Grid>
            </Paper>
        </div>
    )
}

Product.propTypes = {

}

export default Product

