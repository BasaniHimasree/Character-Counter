import './index.css'

const UserInput = props => {
  const {userDetails} = props
  const {userInput, characterCount} = userDetails

  return (
    <li className="list-item">
      <p className="paragraph">
        {userInput}:{characterCount}
      </p>
    </li>
  )
}

export default UserInput
