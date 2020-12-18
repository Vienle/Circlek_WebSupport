import React from 'react'
import PropTypes from 'prop-types'
import PromotionServer from './PromotionServer'
import PromotionStore from './PromotionStore'

function Promotion(props) {
    return (
        <div>
            <PromotionServer />
            <br/>
            <PromotionStore/>
        </div>
    )
}

Promotion.propTypes = {

}

export default Promotion

