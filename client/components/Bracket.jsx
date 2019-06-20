import React from 'react'

const Bracket = () => {

  return (
  <div>
    <br/>
    <br/>
    <section id="bracket">
      <div className="container">
        <div className="split split-one">
          <div className="round round-one current">
            <div className="round1-wrapper">
              <div className="round-names">Round 1<br /></div>
              <ul className="matchup">
                <li className="player player-top">Big Dan</li>
                <li className="player player-bottom">Tess</li>
              </ul>
              <ul className="matchup">
                <li className="player player-top">Tom</li>
                <li className="player player-bottom">Pineapple Dan</li>
              </ul>
              <ul className="matchup">
                <li className="player player-top">Bridey</li>
                <li className="player player-bottom">Pano</li>
              </ul>
              <ul className="matchup">
                <li className="player player-top">Dan VA</li>
                <li className="player player-bottom">Q</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Bracket