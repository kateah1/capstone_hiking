const React = require('react')
const Nav = require('./Nav.jsx')
const { Link } = require('react-router-dom')
import 'whatwg-fetch'

class Landing extends React.Component {
  constructor (props) {
    super(props)

    this.handleSubmit = this
      .handleSubmit
      .bind(this)

    this.login = this
      .login
      .bind(this)
  }

  login (email, password) {
    fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    }).then(function (response) {
      return response.json()
    }).then(function (user) {
      console.log(user)
    }).catch(function (error) {
      console.log(error)
    })
  }

  handleSubmit (event) {
    event.preventDefault()
    const target = event.target
    const email = target.email.value
    const password = target.password.value
    this.login(email, password)
    console.log('Form Submitted!')
  }

  render () {
    return (
      <div>
        <Nav />
        <div className='ui hidden section divider' />
        <div className='ui hidden section divider' />
        <div className='ui middle aligned center aligned grid'>
          <div>
            <h1 className='ui huge header'>Welcome to HIKER</h1>
            <form className='ui large form' onSubmit={this.handleSubmit}>
              <div className='ui raised segment'>
                <div className='field'>
                  <input type='text' placeholder='email' name='email' />
                </div>
                <div className='field'>
                  <input type='password' placeholder='password' name='password' />
                </div>
                <button className='ui fluid large submit button'>Login</button>
              </div>
            </form>
            <div className='ui message'>
              <p>Forgot your password? Reset here</p>
              <p>Don't have an account? Register
                <Link to='/register'>here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Landing
