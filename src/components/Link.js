import React     from 'react';
import PropTypes from 'prop-types';

const Link = ({active, children, onClick}) => (
    <button
        onClick={onClick}
        disabled={active}
        style={{
            marginLeft: '5px'
        }}
    >
        {children}
    </button>
);

Link.propsType = {
    active  : PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick : PropTypes.func.isRequired
};

export default Link;
