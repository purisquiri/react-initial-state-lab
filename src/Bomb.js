// your Bomb code here!
import React, { Component} from 'react'

class Bomb extends Component {
    
    construtor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    decrement = () => {
        this.setState({ secondsLeft: this.state.props.secondsLeft})
    }

    render () {
        const timeLeft = this.state.secondsLeft
        return (
            <div>
                {timeLeft === 0 ? 
                <p>Boom!</p> : 
                <p>{timeLeft} seconds left before I go boom!</p>
                }
            </div>
        )
    }
}

export default Bomb;
