import React, {Component} from 'react';
import Data from './data';
import Pokemons from './Pokemons';

class App extends Component {
  render() {
    return (
      <Pokemons pokemons={Data}/>
    );
  }
}

export default App;
