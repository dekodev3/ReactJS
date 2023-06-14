import React, { Component } from 'react';
import './CharactersPage.css'


class Character extends Component {
  render() {
    const { character } = this.props;
    return (
      <div className='character '>
        <h2 >{character.name}</h2>
        <p>Height: {character.height}</p>
        <p>Gender: {character.gender}</p>
        <p>Birth Year: {character.birth_year}</p>
      </div>
    );
  }
}

class CharactersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    };
  }

  componentDidMount() {
    fetch('https://swapi.dev/api/people/')
     .then(response => response.json())
     .then(data => {
        this.setState({ characters: data.results });
      })
     .catch(error => console.log(error));
  }

  render() {
    const { characters } = this.state;
    return (
      <div className='characters-page '>
        {characters.map(character => (
          <Character key={character.url} character={character} />
        ))}
      </div>
    );
  }
}

export default CharactersPage;