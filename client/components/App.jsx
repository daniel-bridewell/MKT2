import React from 'react'
// import { HashRouter as Router, Route} from react-router-dom
// import Bracket from './Bracket'
import Players from './Players'
import Bracket from './Bracket'

// const App = () => {
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { bracketComponent: false }
  }

  // showBracket () {
  //   set state :
  //   bracket: true
  // }

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
            {this.state.bracketComponent ? <Bracket />: <Players /> }
          </div>
        </div>

// button on click (showbracket)
    )
  }
}

export default App
