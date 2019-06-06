import React from 'react'
import PropTypes from 'prop-types'

const totalPrice = (props) => <p>Price: <strong>&pound;{( props.totalPrice / 100 ).toFixed(2)}</strong></p>

totalPrice.propTypes = {
    totalPrice: PropTypes.number
}

export default totalPrice
