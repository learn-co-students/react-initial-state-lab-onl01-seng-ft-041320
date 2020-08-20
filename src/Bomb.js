// your Bomb code here!
import React from 'react' 

class Bomb extends React.Component{
    constructor(props){
        super()

        this.state = {
            secondsLeft: props.initialCount
        }
    }

    message = () => {
    if (this.state.secondsLeft === 0) {return 'Boom!' }
    else {
        return `${this.state.secondsLeft} seconds left before I go boom!`
    }
}
        
    render() { 

 //=== 0 ? console.log('Boom!') : `${this.state.secondsLeft} seconds left before I go boom!`;

    
        return (
        <div>{this.message()}</div>
        )
    }
}
export default Bomb;