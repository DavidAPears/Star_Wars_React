import React from 'react';

const CharacterDetail = function (props) {
  console.log(props.selectedCharacter);
  if (!props.selectedCharacter) return null;
  return (
    <div className="results-box">
      <p>{props.selectedCharacter.name}</p>
      <p>Height: {props.selectedCharacter.height}</p>
      <p>Year born: {props.selectedCharacter.birth_year}</p>
      <p>Skin colour: {props.selectedCharacter.skin_color}</p>
      <p>Hair colour: {props.selectedCharacter.hair_color}</p>
      <p>Eye colour: {props.selectedCharacter.eye_color}</p>
      <p>Gender: {props.selectedCharacter.gender}</p>
      <p>Weight: {props.selectedCharacter.mass}</p>
    </div>
  )
}

export default CharacterDetail;
