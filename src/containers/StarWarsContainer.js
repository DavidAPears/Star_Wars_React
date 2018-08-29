import React, { Component } from 'react';
import CharacterSelector from '../components/CharacterSelector.js';
import CharacterDetail from '../components/CharacterDetail.js';


class StarWarsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      selectedCharacter: null
    };
    this.handleCharacterSelected = this.handleCharacterSelected.bind(this);
  }

componentDidMount() {
  const url = 'https://swapi.co/api/people'
  fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((characters) => {
    this.setState({
     characters: characters.results
    });
  })
}

handleCharacterSelected(index) {
  console.log(index);
  const selectedCharacter = this.state.characters[index];
  this.setState({
    selectedCharacter: selectedCharacter
  });
}

render() {
  return(
    <div className="star-wars-container">
    <h2>Star Wars Heading</h2>
    <CharacterSelector characters={this.state.characters}
      onCharacterSelected = {this.handleCharacterSelected}/>
    <CharacterDetail selectedCharacter={this.state.selectedCharacter}/>
  </div>
    )
  }
};



export default StarWarsContainer;
