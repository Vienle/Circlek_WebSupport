import React from 'react'
import PropTypes from 'prop-types'
import PromotionServer from './PromotionServer'
import PromotionStore from './PromotionStore'
import SearchData from './../../common/SearchData'

function Promotion(props) {
    return (
        <div>
            <SearchData/>
            <PromotionServer />
            <br/>
            <PromotionStore/>
        </div>
    )
}

Promotion.propTypes = {

}

export default Promotion

