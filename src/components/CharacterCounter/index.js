import {Component} from 'react'
import {v4} from 'uuid'
import UserInput from '../UserInput'
import './index.css'

class CharacterCounter extends Component {
  state = {input: '', userInputList: []}

  onEnterName = event => {
    this.setState({input: event.target.value})
  }
  onsubmitName = event => {
    event.preventDefault()
    const {input} = this.state
    const newInput = {id: v4(), userInput: input, characterCount: input.length}

    this.setState(prevState => ({
      userInputList: [...prevState.userInputList, newInput],
      input: '',
    }))
  }

  render() {
    const {userInputList} = this.state
    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Count the characters like a Boss...</h1>
          {userInputList.length === 0 ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
              className="input-image"
            />
          ) : (
            <ul>
              {userInputList.map(eachItem => (
                <UserInput userDetails={eachItem} key={eachItem.id} />
              ))}
            </ul>
          )}
        </div>
        <div className="card1">
          <h1 className="heading">Character Counter</h1>
          <div>
            <form onSubmit={this.onsubmitName}>
              <input
                type="text"
                placeholder="Enter the Characters here"
                onChange={this.onEnterName}
              />
              <button type="submit" className="button">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default CharacterCounter
