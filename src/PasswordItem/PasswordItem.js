import './PasswordItem.css'

const PasswordItem = props => {
  const {details, show, del} = props
  const {mail, username, password, id} = details
  const x = mail.charAt(0)
  console.log(x, password)

  const hello = () => {
    del(id)
  }
  return (
    <li className="item">
      <div className="display">{x}</div>
      <div className="column">
        <p className="text">{mail}</p>
        <p className="text">{username}</p>
        {show && <p className="text">{password}</p>}
        {!show && (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="stars"
          />
        )}
      </div>
      <button onClick={hello} data-testid="delete" type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete"
        />
      </button>
    </li>
  )
}

export default PasswordItem
