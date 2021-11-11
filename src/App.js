import React from "react";
import species from "./species";
import "./App.css";
import Headings from "./components/Headings";
import ParkInfo from "./components/ParkInfo";
import Park from "./components/Park";
import Buttons from "./components/Buttons";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // WHAT WILL CHANGE LIVES IN APP.JS
      dinos: [],
      currentSpecies: species[0],
      // IS THE FIRST ONE IN SPECIES ARRAY
   // numberOfDinos: 0, OR dinos.length
    };
  }

  reset = () => {
    this.setState({
      dinos: [],
      numberOfDinos: 0,
    })
  }

  addNewDino = () => {
    const { dinos, currentSpecies } = this.state;
    this.setState({
      // dinos: [currentSpecies, ...dinos] OR
      dinos: [currentSpecies].concat(dinos),
    });
  };

  getRandomSpecies = () => {
    // GIVES A RANDOM INDEX NUMBER BETWEEN 0 - 6
    const i = Math.floor(Math.random() * species.length);
    this.setState({
      currentSpecies: species[i],
    });
  };

  render() {
    return (
      <div className="App">
        <Headings />
        <Buttons
          randomSpeciesHandler={this.getRandomSpecies}
          addDinoHandler={this.addNewDino}
          destroyParkHandler={this.reset}
        />
        <ParkInfo
          currentSpecies={this.state.currentSpecies.name}
          numberOfDinos={this.state.dinos.length}
        />
        <Park dinos={this.state.dinos} />
      </div>
    );
  }
}

export default App;
