const React = require('react')
const hikesData = require('json-loader!../public/data/hikes.json')
const { Link } = require('react-router')

class Hike extends React.Component {
  render () {
    return (
      <div className='ui middle aligned center aligned grid cards'>
        {hikesData.hikes.map(function (hike) {
          return (
            <div className='card' key={hike.id}>
              <div className='ui fluid image'>
                <img src={hike.image} />
              </div>
              <div className='content'>
                <Link to='/hikedetail'><div className='header'>{hike.name}</div></Link>
                <div className='description'>
                  <h2>{hike.location}</h2>
                </div>
              </div>
            </div>
          )
        })}
        <div className='column'>
          <h1 className='ui header'>No hikes found</h1>
          <h3>Try modifying your search radius or changing your city</h3>
        </div>
      </div>
    )
  }
}

module.exports = Hike
