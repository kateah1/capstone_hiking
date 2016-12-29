const React = require('react')
const Nav = require('./Nav.jsx')
const Hike = require('./Hike.jsx')

class MyHikes extends React.Component {
  render () {
    return (
      <div>
        <Nav />
        <div className='ui hidden section divider' />
        <div className='ui hidden section divider' />
        <div className='ui middle aligned center aligned grid'>
          <h1 className='welcome-header'>My Hikes</h1>
        </div>
        <div className='ui hidden section divider' />
        <div className='myhikes'>
          <Hike />
        </div>
      </div>
    )
  }
}

module.exports = MyHikes
