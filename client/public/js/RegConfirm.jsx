const React = require('react')
const Footer = require('./Footer.jsx')

class RegConfirm extends React.Component {

  componentWillMount (request) {
    let user = {
      name: request.body.name,
      email: request.body.email,
      password: request.body.password
    }

    fetch({
      url: '/auth/register',
      type: 'POST',
      data: user
    }).done(function (user) {
      fetch('/api/users/me').done(function (me) {
        console.log(me)
      })
    }).fail(function (error) {
      console.log(error)
    })
  }

  render () {
    return (
      <div className='Site'>
        <div className='Site-content'>
          <div className='ui hidden section divider' />
          <div className='ui hidden section divider' />
          <div className='ui middle aligned center aligned grid'>
            <div className='column'>
              <h1 className='ui header'>Welcome to HIKER</h1>
              <p>Thanks for registering!</p>
              <p>Check your email for a confirmation link</p>
              <p>Having trouble? Send it again</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

module.exports = RegConfirm
