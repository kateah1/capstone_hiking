const React = require('react')
const Nav = require('./Nav.jsx')
const { Link } = require('react-router')

class Landing extends React.Component {
  render () {
    return (
      <div>
        <Nav />
        <div className='ui hidden section divider' />
        <div className='ui hidden section divider' />
        <div className='ui middle aligned center aligned grid'>
          <div>
            <h1 className='ui huge header'>Welcome to HIKER</h1>
            <form className='ui large form'>
              <div className='ui raised segment'>
                <Link to='/login'><div className='ui fluid large submit button'>login</div></Link>
              </div>
              <div className='ui raised segment'>
                <Link to='/register'><div className='ui fluid large submit button'>register</div></Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Landing
