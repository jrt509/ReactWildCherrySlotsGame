import React, { Component } from 'react';
import Seven from '../../static/assets/images/7.png';
import Bar from '../../static/assets/images/bar.png';
import Bar2 from '../../static/assets/images/bar2.png';
import Bar3 from '../../static/assets/images/bar3.png';
import Wild from '../../static/assets/images/wild.png';
import Chance from 'chance';




export default class SlotContainer  extends Component {
    constructor(props) {
        super(props)

        this.state = {
            img1: {Wild},
            img2: {Seven},
            img3: {Bar},
            reelsImages: {
                Seven: 1,
                Bar: 2,
                Bar2: 3,
                Bar3: 3,
                Wild: 1
            },
            reelsBoxes: []
        }
    }

    weightReturn() {
        let arrayOne = Object.keys(reelsImages);
        let arrayTwo = Object.values(reelsImages);
        return Chance.weighted(arrayOne, arrayTwo)
    }
    ImageAdder() {
      for (let i = 0; i < 3; i++) {
          reelsBoxes.push(this.weightReturn)
      }
      return reelsBoxes;
    }

    clickHandler() {
        for (let i = 0; i < 3; i++) {
            this.setState({
               
            })
            
        }
    } 

    render() {
       
        return (
            <div className='slot-wrapper'>
                <img src={this.state.img1} ></img>
                <img src={this.state.img2} ></img>
                <img src={this.state.img3} ></img>
            </div>
        )
    }
}