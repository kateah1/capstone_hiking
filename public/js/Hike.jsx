const React = require('react')
const {Link} = require('react-router')

const myHikes = []
var buttonType = <icon className='flaticon-add' />

class Hike extends React.Component {

  changeButton () {
    for (var i = 0; i < myHikes.length; i++) {
      if (myHikes[i].id === 0) {
        buttonType = <icon className='flaticon-trash' />
      }
    }
  }

  addHike () {
    myHikes.push(hike.name)
    console.log(myHikes)
    this.changeButton.bind(this)
  }

  constructor (props) {
    super(props)

    this.state = {
      hikes: []
    }
  }

  componentWillMount () {
    fetch('https://trailapi-trailapi.p.mashape.com/', {
      headers: {
        'X-Mashape-Authorization': 'QYyfJ0AJ55mshNE7Z8fXe8CIU4pQp1bT9bMjsnaTW8xTgmib0u'
      }
    }).then(response => {
      return response.json()
    }).then(response => {
      console.log(response)
      this.setState({hikes: response.places})
    }).catch(err => {
      console.log(err)
    })
  }

  render () {
    const places = this.state.hikes.map((hike) =>
      <div key={hike.unique_id} className='card'>
        <div className='ui fluid image'>
          <img src='../images/hiking-trail.png' />
        </div>
        <div className='content'>
          <i onClick={this.addHike.bind(this)} className='right floated icon'>{ buttonType }</i>
          <div className='header'>{hike.name}</div>
          <div className='meta'>{hike.city}, {hike.state}</div>
          <div className='description'>
            <p>{hike.description}</p>
            <p>Directions: {hike.directions}</p>
          </div>
        </div>
        <div className='ui bottom attached button'><icon className='flaticon-right-arrow' /> See all reviews</div>
        <div className='ui bottom attached button'><Link to='/:id/review_form'><icon className='flaticon-right-arrow' /> Add a review</Link></div>
      </div>
    )

    return (
      <div className='ui middle aligned center aligned grid cards'>
        {places}
      </div>
    )
  }
}

module.exports = Hike
