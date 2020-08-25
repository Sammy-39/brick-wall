import React from 'react';

import Brick from "../Brick/index";

import "./style.css";

class Wall extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            bricks: [1,2,3,4] ,
            colors: ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']
        };
        
    }

    addBrick = () => {
        const newBricks = [...this.state.bricks];

        newBricks.push(newBricks.length+1);

        const newColors = [...this.state.colors];

        newColors.push(this.state.colors[newColors.length%4])

        this.setState({
            bricks: newBricks ,
            colors: newColors
        });
    };

    onBrickClick = (number) => {
        window.alert("You clicked Brick " + number)
    };

    render = () =>
    {
        return(
        
            <div className="wall-container">
                {
                    this.state.bricks.map((num) => {
                        return <Brick onClick ={this.onBrickClick} number={num} color = {this.state.colors[num-1]} />;
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
