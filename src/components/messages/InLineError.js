import React  from 'react'
import propTypes from 'prop-types';

const InLineError = ({ text }) => (
    <span style={{ color: "#ae5856" }}>
        {text}
    </span>
);

InLineError.PropTypes = {
    text: propTypes.string.isRequired
};

export default InLineError;
