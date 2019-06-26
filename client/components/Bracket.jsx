import React from 'react'

const Bracket = () => {

  return (
  <div className="center-all">
    <br/>
    <br/>
    <section id="bracket">
    <div className="container">
    <div className="split split-one">
        <div className="round round-one current">
            <div className="round-details">Round 1<br/><span className="date">Welcome!</span></div>
            <ul className="matchup">
                <li className="team team-top">placeholder</li>
                <li className="team team-bottom">placeholder</li>
            </ul>
            <ul className="matchup">
                <li className="team team-top">placeholder</li>
                <li className="team team-bottom">placeholder</li>
            </ul>
            <ul className="matchup">
                <li className="team team-top">placeholder</li>
                <li className="team team-bottom">placeholder</li>
            </ul>
            <ul className="matchup">
                <li className="team team-top">placeholder</li>
                <li className="team team-bottom">placeholder</li>
            </ul>                                               
        </div>

        <div className="round round-two current">
            <div className="round-details">Semi-Finals<br/><span className="date">Don't choke</span></div>         
            <ul className="matchup">
                <li className="team team-top">&nbsp;<span className="score">&nbsp;</span></li>
                <li className="team team-bottom">&nbsp;<span className="score">&nbsp;</span></li>
            </ul>   
            <ul className="matchup">
                <li className="team team-top">&nbsp;<span className="score">&nbsp;</span></li>
                <li className="team team-bottom">&nbsp;<span className="score">&nbsp;</span></li>
            </ul>                                     
        </div>
        
        <div className="round round-three current">
            <div className="round-details">Finals<br/><span className="date">Congrats!</span></div>         
            <ul className="matchup">
                <li className="team team-top">&nbsp;<span className="score">&nbsp;</span></li>
                <li className="team team-bottom">&nbsp;<span className="score">&nbsp;</span></li>
            </ul>                                       
        </div>    
    </div>
  </div>
  </section>
  </div>
  )
}


export default Bracket