const React = require('react')
// const { Link } = require('react-router')
const fetch = require('whatwg-fetch')

class Hike extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      hikes: []
    }
  }

  componentDidMount () {
    /** var params = {
      'q[activities_activity_type_name_eq]': 'hiking',
      'q[city_cont]': searchTerm,
      'q[country_cont]': 'United States',
      'q[state_cont]': searchTerm
    } **/

    var request = new Request('https://trailapi-trailapi.p.mashape.com/', {
      headers: new Headers({
        'X-Mashape-Authorization': 'QYyfJ0AJ55mshNE7Z8fXe8CIU4pQp1bT9bMjsnaTW8xTgmib0u'
      })
    })

    fetch(request)
    .then(function (data) {
      console.log(data)
    })/** .then(function (response) {
      const filteredHikes = response.data.places.filter(function (hike) {
        if ()
        `${hike.city} ${hike.state}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0
      })
      const hikes = filteredHikes.map(function (object) { object.data })
      this.setState({ hikes })
    }) **/.then(function (json) {
      console.log('parsed json', json)
    }).catch(function (ex) {
      console.log('parsing failed', ex)
    })
  }

  render () {
    return (
      <h1>this is rendering</h1>
      /** this.state.hikes
        .map(function (hike) {
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
        }) **/
    )
  }
}

module.exports = Hike
