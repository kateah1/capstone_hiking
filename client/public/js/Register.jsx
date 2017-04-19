const React = require('react')
const Footer = require('./Footer.jsx')
const { Link } = require('react-router-dom')
import 'whatwg-fetch'

class Register extends React.Component {
  constructor (props) {
    super(props)

    this.handleSubmit = this
      .handleSubmit
      .bind(this)

    this.register = this
      .register
      .bind(this)
  }

  register (name, email, password) {
    fetch('/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name, email, password})
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
    const name = target.name.value
    const email = target.email.value
    const password = target.password.value
    this.register(name, email, password)
    console.log('Form Submitted!')
  }

  render () {
    return (
      <div className='Site'>
        <div className='Site-content'>
          <div className='ui hidden section divider' />
          <div className='ui hidden section divider' />
          <div className='ui middle aligned center aligned grid'>
            <div>
              <h2 className='ui header'>Register</h2>
              <form className='ui large form' onSubmit={this.handleSubmit}>
                <div className='ui raised segment'>
                  <div className='field'>
                    <input type='text' required placeholder='username' name='name' />
                  </div>
                  <div className='field'>
                    <input type='email' required placeholder='email' name='email' />
                  </div>
                  <div className='field'>
                    <input type='password' required placeholder='password' name='password' />
                  </div>
                  <button className='ui fluid large submit button'>Register</button>
                </div>
              </form>
              <div className='ui message'>
                <p>Already have an account? Login <Link to='/landing'>here</Link></p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

module.exports = Register
