import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper';
import SapOITM   from './SapOITM'
import Grid from '@material-ui/core/Grid';
import SearchData from './../../common/SearchData'
import * as ProductAction from './../../../actions/Product'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

function Product(props) {
    const { creatorProductAction,listProduct } = props;
    const { getByProdcutAndStores } = creatorProductAction;
    console.log('listProduct',listProduct);
    const dataSearch = (itemcodes,stores) => {
        getByProdcutAndStores(itemcodes);
    }

    return (
        <div>
            <Paper>
            <SearchData dataSearch={dataSearch} isProduct="true"/>
            <Grid container spacing={2}>
                <Grid item xs={8}><SapOITM
                    products={listProduct}
                /></Grid>
            </Grid>
            </Paper>
        </div>
    )
}

Product.propTypes = {
    creatorProductAction : PropTypes.shape({
        getByProdcutAndStores : PropTypes.func,
    })
}

const mapStateToProps = state => {
    console.log(state)
    return {
      listProduct : state.product.ListProduct,
    }
  }
const mapDispatchToProps = dispatch => {
    return {
        creatorProductAction : bindActionCreators(ProductAction,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Product)

