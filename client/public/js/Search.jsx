const React = require('react')
// const Hike = require('./Hike.jsx')

class Search extends React.Component {

  render () {
    return (
      <div>
        <div className='ui hidden section divider' />
        <div className='search-results'>
          <h1>The hikes should be displayed in this section {this.props.hike}</h1>
        </div>
      </div>
    )
  }
}

module.exports = Search
