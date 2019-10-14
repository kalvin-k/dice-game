import React,  { Component } from 'react';



class Rolls extends Component {
    render() {

        return (
            <div>
                {this.props.newProp.map((x,y) => {
                    return <h1 key = {y}> {x} </h1>
                })}
            </div>
        );
    }
}

export default Rolls;
