const React = require('react')
const Nav = require('./Nav.jsx')

class ReviewForm extends React.Component {
  render () {
    return (
      <div>
        <Nav />
        <div className='ui hidden section divider' />
        <div className='ui hidden section divider' />
        <div className='ui container'>
          <div className='ui middle aligned center aligned grid'>
            <div className='ui small image'>
              <img src='public/images/logo.png' />
            </div>
          </div>
          <div className='ui hidden section divider' />
          <h1 className='ui header'>Review NAME OF HIKE</h1>
          <form className='ui form'>
            <div className='fields'>
              <div className='eight wide field'>
                <label>Date Hiked</label>
                <input type='date' min='1950-01-01' required placeholder='date hiked' />
              </div>
              <div className='eight wide field'>
                <label>Hiking Time</label>
                <div className='two fields'>
                  <div className='field'>
                    <input type='number' min='0' />hr
                  </div>
                  <div className='field'>
                    <input type='number' min='0' max='59' />min
                  </div>
                </div>
              </div>
            </div>
            <div className='field'>
              <div className='field'>
                <label>Trailhead</label>
                <input type='text' placeholder='trailhead' />
              </div>
              <div className='field'>
                <label>Trail Conditions</label>
                <textarea placeholder='how was the terrain itself during your hike? e.g. branches down, unclear paths, rock scrambling' />
              </div>
              <div className='field'>
                <label>Weather</label>
                <textarea placeholder='what was the weather like? e.g. temperature, wind, exposure, wet or dry' />
              </div>
              <div className='field'>
                <label>Gear Used</label>
                <textarea placeholder='any special gear used or anything you would recommend this time of year?' />
              </div>
            </div>
            <div className='fields'>
              <div className='eight wide field'>
                <button className='ui fluid large button'>Upload Photos</button>
              </div>
              <div className='eight wide field'>
                <button className='ui fluid large submit button'>Submit Review</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

module.exports = ReviewForm
