import React from 'react';

import "./style.css";

const Brick = (props) => {
    return(
        <div onClick={() =>props.onClick(props.number)} className="brick" style={{backgroundColor: props.color}}>
        <span> {props.number} </span>
        </div>
    );
};

export default Brick