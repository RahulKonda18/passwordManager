import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from '../PasswordItem/PasswordItem'
import './PasswordManager.css'

class PasswordManager extends Component {
  state = {
    search: '',
    mail: '',
    username: '',
    password: '',
    passwordsList: [],
    showPassword: false,
  }

  add = event => {
    event.preventDefault()
    this.setState(prev => {
      const x = {
        id: uuidv4(),
        mail: prev.mail,
        username: prev.username,
        password: prev.password,
      }
      return {
        passwordsList: [...prev.passwordsList, x],
        mail: '',
        password: '',
        username: '',
      }
    })
  }

  del = id => {
    const {passwordsList} = this.state
    const x = passwordsList.filter(each => each.id !== id)
    this.setState({passwordsList: x})
  }

  onChangeSearch = event => {
    this.setState({search: event.target.value})
  }

  onChangeMail = event => {
    this.setState({mail: event.target.value})
    console.log(event.target.value)
  }

  show = () => {
    this.setState(prev => ({showPassword: !prev.showPassword}))
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {
      search,
      passwordsList,
      showPassword,
      username,
      password,
      mail,
    } = this.state
    let z = false
    if (passwordsList.length === 0) {
      z = true
    } else {
      z = false
    }
    const p = !z
    const y = passwordsList.filter(each =>
      each.mail.toLowerCase().includes(search.toLowerCase()),
    )
    const i = y.length === 0
    return (
      <div className="bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          className="logo"
          alt="app logo"
        />
        <div className="top-card">
          <form className="inputs-card">
            <h1 className="heading">Add New Password</h1>
            <div className="row">
              <img
                className="icons"
                alt="website"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
              />
              <input
                value={mail}
                onChange={this.onChangeMail}
                placeholder="Enter Website"
                type="mail"
              />
            </div>
            <div className="row">
              <img
                className="icons"
                alt="username"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
              />
              <input
                value={username}
                onChange={this.onChangeUsername}
                placeholder="Enter Username"
                type="text"
              />
            </div>
            <div className="row">
              <img
                className="icons"
                alt="password"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
              />
              <input
                value={password}
                onChange={this.onChangePassword}
                placeholder="Enter Password"
                type="password"
              />
            </div>
            <div className="row-right">
              <button type="submit" onClick={this.add} className="add">
                Add
              </button>
            </div>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="image"
          />
        </div>
        <div className="bottom-card">
          <div className="rows">
            <div className="row">
              <h1 className="heading">Your Passwords</h1>
              <p className="dabba">{passwordsList.length}</p>
            </div>
            <div className="row">
              <img
                className="search-icon"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
              />
              <input
                type="search"
                value={search}
                onChange={this.onChangeSearch}
                placeholder="Search"
                className="search"
              />
            </div>
          </div>
          <hr />
          <div className="row-right">
            <div className="rows2">
              <input type="checkbox" id="box" onChange={this.show} />
              <label className="white" htmlFor="box">
                Show Passwords
              </label>
            </div>
          </div>
          <div className="result">
            {(z || i) && (
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="no-p"
                />
                <p className="heading">No Passwords</p>
              </div>
            )}
            {p && (
              <ul className="wrap">
                {y.map(each => (
                  <PasswordItem
                    del={this.del}
                    show={showPassword}
                    key={each.id}
                    details={each}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
