const React = require('react')
const Search = require('./Search.jsx')
const Footer = require('./Footer.jsx')
// const { Link } = require('react-router-dom')
import 'whatwg-fetch'

class Home extends React.Component {

  constructor (props) {
    super(props)
    this.state = { value: '' }
    console.log(this.state)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.conductSearch = this.conductSearch.bind(this)
  }

  conductSearch (searchTerm) {
    fetch('https://trailapi-trailapi.p.mashape.com/?q[activities_activity_type_name_eq]=hiking&q[country_cont]=United+States&q[state_cont]=' + searchTerm, {
      method: 'GET',
      headers: {
        'X-Mashape-Authorization': 'QYyfJ0AJ55mshNE7Z8fXe8CIU4pQp1bT9bMjsnaTW8xTgmib0u'
      }
    }).then(response => {
      return response.json()
    }).then(hikes => {
      console.log(hikes)
    }).catch(err => {
      console.log(err)
    })
  }

  handleChange (event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit (event) {
    event.preventDefault()
    console.log(this.state.value)
    const searchTerm = this.state.value
    this.conductSearch(searchTerm)
  }

  render () {
    return (
      <div className='Site'>
        <div className='Site-content'>
          <div className='ui hidden section divider' />
          <div className='ui hidden section divider' />
          <div className='ui middle aligned center aligned grid'>
            <div className='ui small image'>
              <img src='../images/logo.png' />
            </div>
          </div>
          <div className='ui hidden section divider' />
          <div className='ui middle aligned center aligned grid'>
            <form className='ui input' onSubmit={this.handleSubmit}>
              <input id='search-box' name='searchTerm' value={this.state.value} onChange={this.handleChange} required type='text' placeholder='enter city or state' />
              {/** <Link to='/search'><icon onClick={this.handleChange} className='flaticon-search' /></Link> **/}
            </form>
          </div>
          <div>
            <Search />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

module.exports = Home
