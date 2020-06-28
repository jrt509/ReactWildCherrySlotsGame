import React, { Component } from 'react';
import Seven from '../../static/assets/images/7.png';


export default class SlotContainer  extends Component {
    constructor(props) {
        super(props)

        this.state = {
            reelsImages: [
                Seven,
            
            ]
        }
    }
    // ImageAdder() {
    //     this.setState {

    //     }
    // }

    render() {
       
        return (
            <div className='slot-wrapper'>
               <img src={this.state.reelsImages}></img>

            </div>
        )
    }
}