import React from 'react'
// import { HashRouter as Router, Route} from react-router-dom
// import Bracket from './Bracket'
import Players from './Players'
import Bracket from './Bracket'

// const App = () => {
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      bracketComponent: false,
      player1: "",
      player2: "",
      player3: "",
      player4: "",
      player5: "",
      player6: "",
      player7: "",
      player8: "",
    }
    this.handleChange = this.handleChange.bind(this)
    this.showBracket = this.showBracket.bind(this)
    this.testClick = this.testClick.bind(this)
  }

  showBracket () {
    this.setState({ bracketComponent: true })
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  testClick() {
    console.log('clicked')
  }

  render() {
    return (
      // {this.state.bracketComponent == true && <Bracket/>}
        <div>
          <div className="hero-image">
            <div className="hero-text">
              <h3>Bridey's</h3>
              <h1>Mario Kart Tournament</h1>
            </div>
          </div>
          <div>
            {this.state.bracketComponent ? <Bracket state={this.state}/>: <Players  updatePlayers={this.handleChange} showBracket={this.showBracket}/> }
          </div>
        </div>

// button on click (showbracket)
    )
  }
}

export default App
