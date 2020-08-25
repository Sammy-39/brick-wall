import React from 'react';

import "../Brick/index";

import "./style.css";

class Wall extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            bricks: [1,2,3,4]
        };
    }

    addBrick = () => {
        const newBricks = [...this.state.bricks];

        newBricks.push(newBricks.length+1);

        this.setState({
            bricks: newBricks
        });
    };

    onBrickClick = (number) => {
        window.alert("You clicked Brick" + number)
    };

    render = () =>
    {
        return(
        
            <div className="wall-container">
                {
                    this.state.bricks.map((num) => {
                        return <Brick onClick ={this.onBrickClick} number={num} />;
                    })
                }

            <div className="add-btn-box">
                <button onClick={this.addBrick} className="add-btn">
                    +
                </button>
            </div>
            </div>
        );
    };
}

export default Wall;
