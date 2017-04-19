const React = require('react')
const Hike = require('./Hike.jsx')
const Footer = require('./Footer.jsx')

class MyHikes extends React.Component {
  render () {
    return (
      <div className='Site'>
        <div className='Site-content'>
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
        <Footer />
      </div>
    )
  }
}

module.exports = MyHikes
