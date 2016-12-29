const React = require('react')
const Home = require('./Home.jsx')
const Hike = require('./Hike.jsx')

class Search extends React.Component {
  render () {
    return (
      <div>
        <Home />
        <div className='ui hidden section divider' />
        <div className='ui middle aligned center aligned grid'>
          <div className='ui form'>
            <label><icon className='flaticon-difficulty' /> difficulty</label>
            <div className='field'>
              <div className='ui checkbox'>
                <input type='checkbox' value='easy' />
                <label>easy</label>
              </div>
            </div>
            <div className='field'>
              <div className='ui checkbox'>
                <input type='checkbox' value='moderate' />
                <label>moderate</label>
              </div>
            </div>
            <div className='field'>
              <div className='ui checkbox'>
                <input type='checkbox' value='challenging' />
                <label>challenging</label>
              </div>
            </div>
            <div className='field'>
              <div className='ui checkbox'>
                <input type='checkbox' value='strenuous' />
                <label>strenuous</label>
              </div>
            </div>
          </div>
          <div className='ui form'>
            <label><icon className='flaticon-distance' /> distance</label>
            <div className='field'>
              <div className='ui checkbox'>
                <input type='checkbox' value='0-2' />
                <label>0-2 miles</label>
              </div>
            </div>
            <div className='field'>
              <div className='ui checkbox'>
                <input type='checkbox' value='3-5' />
                <label>3-5 miles</label>
              </div>
            </div>
            <div className='field'>
              <div className='ui checkbox'>
                <input type='checkbox' value='6-10' />
                <label>6-10 miles</label>
              </div>
            </div>
            <div className='field'>
              <div className='ui checkbox'>
                <input type='checkbox' value='10+' />
                <label>10+ miles</label>
              </div>
            </div>
          </div>
          <div className='ui form'>
            <label><icon className='flaticon-radius' /> radius</label>
            <div className='field'>
              <div className='ui radio checkbox'>
                <input type='radio' value='10' name='radius' defaultChecked='checked' />
                <label>10 miles</label>
              </div>
            </div>
            <div className='field'>
              <div className='ui radio checkbox'>
                <input type='radio' value='25' name='radius' />
                <label>25 miles</label>
              </div>
            </div>
            <div className='field'>
              <div className='ui radio checkbox'>
                <input type='radio' value='50' name='radius' />
                <label>50 miles</label>
              </div>
            </div>
            <div className='field'>
              <div className='ui radio checkbox'>
                <input type='radio' value='50+' name='radius' />
                <label>50+ miles</label>
              </div>
            </div>
          </div>
        </div>
        <div className='ui hidden section divider' />
        <div className='search-results'>
          <Hike />
        </div>
      </div>
    )
  }
}

module.exports = Search
