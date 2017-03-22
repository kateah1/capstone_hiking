const React = require('react')
const Home = require('./Home.jsx')
const Hike = require('./Hike.jsx')

class Search extends React.Component {
  render () {
    return (
      <div>
        <Home />
        <div className='ui hidden section divider' />
        <div className='search-results'>
          <Hike />
        </div>
      </div>
    )
  }
}

module.exports = Search
