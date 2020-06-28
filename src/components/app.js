import React, { Component } from 'react';
import GameName from './gameName';
import SlotContainer from './slotContainer';


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <GameName />
        <SlotContainer />
      </div>
    );
  }
}
