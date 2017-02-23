const React = require('react')
const Nav = require('./Nav.jsx')
const { Link } = require('react-router')

class Login extends React.Component {
  componentWillMount (request) {
    let user = {
      email: request.body.email,
      password: request.body.password
    }

    fetch({
      url: '/auth/login',
      type: 'POST',
      data: user
    }).done(function (user) {
      fetch('/api/users/me').done(function (me) {
        for (let hike of me.hikes) {
          console.log(hike)
        }
      })
    }).fail(function (error) {
      console.log(error)
    })
  }

  render () {
    return (
      <div>
        <Nav />
        <div className='ui hidden section divider' />
        <div className='ui hidden section divider' />
        <div className='ui middle aligned center aligned grid'>
          <div>
            <h2 className='ui header'>Login</h2>
            <form className='ui large form'>
              <div className='ui raised segment'>
                <div className='field'>
                  <input type='text' placeholder='email' />
                </div>
                <div className='field'>
                  <input type='password' placeholder='password' />
                </div>
                <Link to='/home'><div className='ui fluid large submit button'>Login</div></Link>
              </div>
            </form>
            <div className='ui message'>
              <p>Forgot your password? Reset here</p>
              <p>Don't have an account? Register <Link to='/register'>here</Link></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Login
