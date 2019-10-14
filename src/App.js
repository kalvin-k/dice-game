import React,  { Component } from 'react';
import './App.css';
import Dice from './Dice'
import Rolls from './Rolls'


class App extends Component {
    constructor(props) {
        super(props)
            this.state = {
                rolls: [],
                display: "Click here!"
            }
        }

        recordRoll = (num) => {
            let { rolls } = this.state;
            rolls.push(num)
            this.setState({rolls: rolls, display: num});
        }

    render() {

        return (
            <div >
                <Dice
                rollButton = {this.recordRoll}
                display = {this.state.display}
                />
                <Rolls newProp = {this.state.rolls}/>
            </div>
        );
    }
}
export default App;
