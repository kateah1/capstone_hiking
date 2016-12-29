const React = require('react')
const Nav = require('./Nav.jsx')

class Contact extends React.Component {
  render () {
    return (
      <div>
        <Nav />
        <div className='ui hidden section divider' />
        <div className='ui hidden section divider' />
        <div className='ui container'>
          <h1 className='ui header'>Welcome to HIKER</h1>
          <div className='ui raised very padded text container segment'>
            <form className='ui large form'>
              <h2 className='ui header'>Contact</h2>
              <div className='field'>
                <input type='text' required placeholder='first name' />
              </div>
              <div className='field'>
                <input type='text' placeholder='last name' />
              </div>
              <div className='field'>
                <input type='text' placeholder='username' />
              </div>
              <div className='field'>
                <input type='email' required placeholder='email' />
              </div>
              <div className='field'>
                <textarea required placeholder='message' />
              </div>
              <button className='ui fluid large submit button' type='submit'>send</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Contact
