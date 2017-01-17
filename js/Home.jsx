const React = require('react')
const Nav = require('./Nav.jsx')
const { Link } = require('react-router')

class Home extends React.Component {

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
          <div className='column'>
            <h1 className='ui huge header'>Welcome to HIKER</h1>
            <div className='ui input'>
              <input id='search-box' value={this.state.value} required type='text' placeholder='enter name of park, city or state' />
              <Link to='/search'><icon onClick={this.handleChange} className='flaticon-search' /></Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Home
