import { Component } from 'react';

class Pokemons extends Component {
  render() {
    const pokemons = this.props.pokemons;

    return (
      <ul className="list-pokemons">
        {
        pokemons.map(({ id, name, type, averageWeight: { value, measurementUnit}, image }) => (
          <li key={ id } className="pokemon">
            <div className="poke-info">
              <h3>{ name }</h3>
              <p>{ type }</p>
              <p>Average Weight: { `${value} ${measurementUnit}` }</p>
            </div>
            <img src={ image } alt={ name }/>
          </li>
        ))
        }
      </ul>
    );
  }
}

export default Pokemons;