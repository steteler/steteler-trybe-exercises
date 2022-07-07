import { Component } from 'react';
class App extends Component {
  constructor() {
    super()

    this.state = {
      contador1: 0,
      contador2: 0,
      contador3: 0,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(state) {
    this.setState((previousState, _props) => (
      {
        [state]: previousState[state] + 1
      }
    ), () => { console.log(`O botão: ${state} está com a cor ${this.changeButtonColor(this.state[state])}`) })
  }

  changeButtonColor(state) {
    return state % 2 ? 'white' : 'green';
  }

  render() {
    const { contador1, contador2, contador3 } = this.state;

    return (
      <div>
        <button onClick={() => this.handleClick('contador1')} style={{ backgroundColor: this.changeButtonColor(contador1) }}>{contador1}</button>
        <button onClick={() => this.handleClick('contador2')} style={{ backgroundColor: this.changeButtonColor(contador2) }}>{contador2}</button>
        <button onClick={() => this.handleClick('contador3')} style={{ backgroundColor: this.changeButtonColor(contador3) }}>{contador3}</button>
      </div>
    )
  }
}

export default App;
