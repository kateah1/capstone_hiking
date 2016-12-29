const React = require('react')
const Nav = require('./Nav.jsx')
const { Link } = require('react-router')

class Register extends React.Component {
  render () {
    return (
      <div>
        <Nav />
        <div className='ui hidden section divider' />
        <div className='ui hidden section divider' />
        <div className='ui middle aligned center aligned grid'>
          <div>
            <h2 className='ui header'>Register</h2>
            <form className='ui large form'>
              <div className='ui raised segment'>
                <div className='field'>
                  <input type='text' required placeholder='first name' />
                </div>
                <div className='field'>
                  <input type='text' placeholder='last name' />
                </div>
                <div className='field'>
                  <input type='text' required placeholder='username' />
                </div>
                <div className='field'>
                  <input type='email' required placeholder='email' />
                </div>
                <div className='field'>
                  <input type='password' required placeholder='password' />
                </div>
                <div className='field'>
                  <input type='password' required placeholder='confirm password' />
                </div>
                <Link to='/register_confirmation'><div className='ui fluid large submit button'>Register</div></Link>
              </div>
            </form>
            <div className='ui message'>
              <p>Already have an account? Login <Link to='/login'>here</Link></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Register
