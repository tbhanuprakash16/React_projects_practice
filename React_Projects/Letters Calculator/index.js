import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    inputText: '',
  }

  onChangeTextInput = event => {
    this.setState({inputText: event.target.value})
  }

  render() {
    const {inputText} = this.state
    return (
      <div className="app-container">
        <div className="content-container">
          <div className="text-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div>
              <label htmlFor="letter" className="label">
                Enter the Phrase
              </label>
              <br />
              <input
                type="text"
                className="input-box"
                onChange={this.onChangeTextInput}
                id="letter"
                placeholder="Enter the Phrase"
              />
            </div>
            <p className="count-text">No.of letters: {inputText.length}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
