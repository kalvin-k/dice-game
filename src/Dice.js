import React,  { Component } from 'react';



class Dice extends Component {

    randomRoll = () => {
        let random = Math.floor(Math.random() * 6 + 1)
        this.props.rollButton(random)
        console.log(random)
    }

    render() {

        return (
            <div >
                <button onClick = {this.randomRoll}>
                {this.props.display}
                </button>
            </div>
        );
    }
}

export default Dice;
