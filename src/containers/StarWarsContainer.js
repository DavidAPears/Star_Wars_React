import React, { Component } from 'react';
import CharacterSelector from './components/CharacterSelector.js';
import CharacterDetail from './components/CharacterDetail.js';


class StarWarsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      selectedCharacter: null
    };
    //this.handleCharacterSelected = this.handleCharacterSelected.bind(this);
  }







render() {
  return(
    <div className="star-wars-container"/>
    <h2>Star Wars Heading</h2>
    <CharacterSelector characters={this.state.characters}/>
  </div>
    )
  }
};



export default CharacterSelector;
