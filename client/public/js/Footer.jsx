const React = require('react')
const { Link } = require('react-router-dom')

class Footer extends React.Component {
  render () {
    return (
      <div className='ui footer inverted segment'>
        <div className='ui center aligned container'>
          <div className='ui stackable grid'>
            <div className='three wide column'>
              <div className='ui tiny image'>
                <img src='../images/logo.png' />
              </div>
            </div>
            <div className='three wide column left aligned'>
              <div className='ui list'>
                <Link to='/home' className='item'>Home</Link>
                <Link to='/user/myhikes' className='item'>My Hikes</Link>
                <Link to='/about' className='item'>About</Link>
                <Link to='/contact' className='item'>Contact</Link>
              </div>
            </div>
            <div className='ten wide column right aligned'>
              <a target='_blank' href='https://www.facebook.com/kate.hurd.5'><i className='big facebook square icon' /></a>
              <a target='_blank' href='https://github.com/kateah1'><i className='big github square icon' /></a>
              <a target='_blank' href='https://www.instagram.com/kateekih/?hl=en'><i className='big instagram icon' /></a>
              <a target='_blank' href='https://www.linkedin.com/in/kate-hurd-73284383/'><i className='big linkedin square icon' /></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Footer
