import React from 'react';

const topBorder = {
    borderTop: '1px solid black',
    padding: '10px 0',
    pageBreakInside: 'avoid',
};

const uppercase = {
    textTransform: 'uppercase',
}

const Bolk = (props) => {
    return (
        <div style={topBorder}>
            {props.tittel && <h3 style={uppercase}>{props.tittel}</h3>}
            {props.children}
        </div>
    );
};

export default Bolk;