import React from 'react'

const Players = () => {
  return (
    
    <div className="name-form-container">
      <form className="nameForm" action="/">
        <ul>
          <li>
            <label>Player 1</label>
            <input type="text" name="name" maxLength="100" />
            <span>What's your name?</span>
          </li>
          <li>
            <label>Player 2</label>
            <input type="text" name="name" maxLength="100" />
            <span>What's your name?</span>
          </li>
          <li>
            <label>Player 3</label>
            <input type="text" name="name" maxLength="100" />
            <span>What's your name?</span>
          </li>
          <li>
            <label>Player 4</label>
            <input type="text" name="name" maxLength="100" />
            <span>What's your name?</span>
          </li>
          <li>
            <label>Player 5</label>
            <input type="text" name="name" maxLength="100" />
            <span>What's your name?</span>
          </li>
          <li>
            <label>Player 6</label>
            <input type="text" name="name" maxLength="100" />
            <span>What's your name?</span>
          </li>
          <li>
            <label>Player 7</label>
            <input type="text" name="name" maxLength="100" />
            <span>What's your name?</span>
          </li>
          <li>
            <label>Player 8</label>
            <input type="text" name="name" maxLength="100" />
            <span>What's your name?</span>
          </li>
        </ul>
        <br />
        <div className="button-div">
          <input type="submit" value="Race!" />
        </div>
      </form>
    </div>
  )
}

export default Players