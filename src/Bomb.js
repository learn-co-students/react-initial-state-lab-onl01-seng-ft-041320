import React from 'react'

export default class Bomb extends React.Component {
    constructor(props) {
        super()
        this.state = {
            // initialCount: 120
            secondsLeft: props.initialCount
        }
    }
    render() {
        if (this.state.secondsLeft > 0) {
            return(
                <p>{this.state.secondsLeft} seconds left before I go boom!</p>
            )
        }
        if (this.state.secondsLeft === 0) {
            return(
                <h1>Boom!</h1>
            )
        }
    }
}