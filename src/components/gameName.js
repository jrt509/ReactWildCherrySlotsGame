import React, { Component } from 'react'

export default class GameName extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className='game-name-wrapper'>
                <div className='image-wrapper'>
                    <img src='assets/images/Wild.png'></img>
                </div>
                <text>WILD CHERRY SLOTS</text>
                <div className='image-wrapper'>
                    <img src='assets/images/Wild.png'></img>
                </div>
                
            </div>
        )
    }
}