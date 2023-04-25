import Display from "./component/Display";
import PanelDeBotones from "./component/PanelDeBotones";
import { Component } from "react";
import operaciones from "../src/logic/operaciones";
import "./App.css"

class App extends Component {

  state = {
    total: null,
    siguiente: null,
    operador: null,
  }
    
  handleClick = nombreDeBoton => this.setState(operaciones(this.state, nombreDeBoton))
  
  render() {
     return (
      <div className="comoponent-app">
        <Display value={this.state.siguiente || this.state.total || "0"} />
        <PanelDeBotones clickHandle={this.handleClick} />
      </div>
    );
  }
}

export default App;