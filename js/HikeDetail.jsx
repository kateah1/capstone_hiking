const React = require('react')
const Nav = require('./Nav.jsx')
const hikeDetail = require('json-loader!../public/data/hikeDetail.json')
const { Link } = require('react-router')

const myHikes = []
var buttonType = <icon className='flaticon-add' />

class HikeDetail extends React.Component {

  changeButton () {
    for (var i = 0; i < myHikes.length; i++) {
      if (myHikes[i].id === 0) {
        buttonType = <icon className='flaticon-trash' />
      }
    }
  }

  addHike () {
    myHikes.push(hikeDetail.hikes[0])
    console.log(myHikes)
    this.changeButton.bind(this)
  }

  render () {
    return (
      <div>
        <Nav />
        <div className='ui hidden section divider' />
        <div className='ui hidden section divider' />
        <div className='ui container'>
          <h1 className='ui header'>{hikeDetail.hikes[0].name}</h1>
          <form className='ui form'>
            <div className='fields'>
              <div className='twelve wide field'>
                <div className='ui fluid image'>
                  <img src={hikeDetail.hikes[0].image} />
                </div>
              </div>
              <div className='four wide field'>
                <div className='ui segments'>
                  <div className='ui segment'>
                    <h3>LOCATION</h3>
                    <h4>{hikeDetail.hikes[0].location}</h4>
                  </div>
                  <div className='ui segment'>
                    <h3>DIFFICULTY RATING</h3>
                    <h4>{hikeDetail.hikes[0].difficulty}</h4>
                  </div>
                  <div className='ui segment'>
                    <h3>TOTAL DISTANCE</h3>
                    <h4>{hikeDetail.hikes[0].distance}</h4>
                  </div>
                  <div className='ui segment'>
                    <h3>AVERAGE HIKING TIME</h3>
                    <h4>{hikeDetail.hikes[0].time}</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className='ui fluid styled accordion'>
              <div className='title'>
                <i className='dropdown icon' />
                Description
              </div>
              <div className='content'>
                <p>{hikeDetail.hikes[0].description}</p>
              </div>
              <div className='title'>
                <i className='dropdown icon' />
                How to Get There
              </div>
              <div className='content'>
                <p>{hikeDetail.hikes[0].directions}</p>
              </div>
            </div>
            <div className='fields'>
              <div className='eight wide field'>
                <button onClick={this.addHike.bind(this)} className='ui fluid large button'>{ buttonType } Add to My Hikes</button>
              </div>
              <div className='eight wide field'>
                <Link to='/review_form'><button className='ui fluid large button'><icon className='flaticon-add' /> Add a review</button></Link>
              </div>
            </div>
            <div className='fields'>
              <div className='eight wide field'>
                <Link to='/reviews'><button className='ui fluid large button'>See MY reviews for this hike</button></Link>
              </div>
              <div className='eight wide field'>
                <Link to='/reviews'><button className='ui fluid large button'>See ALL reviews for this hike</button></Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

module.exports = HikeDetail
