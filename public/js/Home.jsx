const React = require('react')
const Nav = require('./Nav.jsx')
const { Link } = require('react-router')

class Home extends React.Component {

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

  constructor () {
    super()
    this.state = { value: '' }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({ value: event.target.value })
    console.log(this.state)
  }

  render () {
    return (
      <div>
        <Nav />
        <div className='ui hidden section divider' />
        <div className='ui hidden section divider' />
        <div className='ui middle aligned center aligned grid'>
          <div className='ui small image'>
            <img src='../images/logo.png' />
          </div>
        </div>
        <div className='ui hidden section divider' />
        <div className='ui middle aligned center aligned grid'>
          <div className='ui input'>
            <input id='search-box' value={this.state.value} required type='text' placeholder='enter city or state' />
            <Link to='/search'><icon onClick={this.handleChange} className='flaticon-search' /></Link>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Home
