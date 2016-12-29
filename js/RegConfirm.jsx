const React = require('react')
const Nav = require('./Nav.jsx')

class RegConfirm extends React.Component {
  render () {
    return (
      <div>
        <Nav />
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
    )
  }
}

module.exports = RegConfirm
