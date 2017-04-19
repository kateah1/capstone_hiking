const React = require('react')
const Footer = require('./Footer.jsx')
const { Link } = require('react-router-dom')
const reviewsData = require('json-loader!../data/reviews.json')

class Reviews extends React.Component {
  render () {
    return (
      <div className='Site'>
        <div className='Site-content'>
          <div className='ui hidden section divider' />
          <div className='ui hidden section divider' />
          <div className='ui container'>
            <h1 className='ui header'>Name of Hike</h1>
            {reviewsData.farmingtonriver.map(function (review) {
              return (
                <form className='ui padded form' key={review.id}>
                  <div className='fields'>
                    <div className='twelve wide field'>
                      <div className='ui fluid image'>
                        <img src='public/images/lookingmtn.jpg' />
                      </div>
                    </div>
                    <div className='four wide field'>
                      <div className='ui segments'>
                        <div className='ui segment'>
                          <h3>DATE HIKED</h3>
                          <h4>{review.date}</h4>
                        </div>
                        <div className='ui segment'>
                          <h3>USERNAME</h3>
                          <h4>{review.user}</h4>
                        </div>
                        <div className='ui segment'>
                          <h3>HIKING TIME</h3>
                          <h4>{review.time}</h4>
                        </div>
                        <div className='ui segment'>
                          <h3>TRAILHEAD</h3>
                          <h4>{review.trailhead}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='ui styled fluid accordion'>
                    <div className='title'>
                      <i className='dropdown icon' />
                      Trail Conditions
                    </div>
                    <div className='content'>
                      <p>{review.conditions}</p>
                    </div>
                    <div className='title'>
                      <i className='dropdown icon' />
                      Weather
                    </div>
                    <div className='content'>
                      <p>{review.weather}</p>
                    </div>
                    <div className='title'>
                      <i className='dropdown icon' />
                      Gear Used
                    </div>
                    <div className='content'>
                      <p>{review.gear}</p>
                    </div>
                  </div>
                  <div className='ui horizontal divider' />
                </form>
              )
            })}
            <h1>There are currently no reviews for this hike</h1>
            <Link to='/review_form'><button className='ui fluid large button'><icon className='flaticon-add' /> Add a review</button></Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

module.exports = Reviews
