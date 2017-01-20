const React = require('react')
const { Link } = require('react-router')

class Hike extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      hikes: []
    }
  }

  componentDidMount () {
    fetch('https://trailapi-trailapi.p.mashape.com/', {
      headers: {'X-Mashape-Authorization': 'QYyfJ0AJ55mshNE7Z8fXe8CIU4pQp1bT9bMjsnaTW8xTgmib0u'}
    }).then((response) => {
      this.setState({
        hikes: response
      })
      console.log('first', response)
    }).catch((err) => {
      console.log(err)
    })
  }

  render () {
    const data = this.state.hikes.places
    console.log('hello', this.state)
    const places = data.map(function (hike) {
      <div className='ui middle aligned center aligned grid cards'>
        <div className='card' key={hike.unique_id}>
          <div className='ui fluid image'>
            <img src='' />
          </div>
          <div className='content'>
            <Link to='/hikedetail'><div className='header'>${hike.name}</div></Link>
            <div className='description'>
              <h2>${hike.city}, ${hike.state}</h2>
              <p>${hike.description}</p>
              <p>Directions: ${hike.directions}</p>
              <a href={hike.activities[0].url}>Read more</a>
            </div>
          </div>
        </div>
      </div>
    })
    return ({ places })
  }
}

module.exports = Hike
