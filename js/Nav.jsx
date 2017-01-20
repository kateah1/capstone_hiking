const React = require('react')
const { Link } = require('react-router')

class Nav extends React.Component {
  render () {
    return (
      <div className='ui fixed inverted huge right menu'>
        <div className='ui container'>
          <Link to='/home' className='item'><img src='public/images/logo.png' /></Link>
          <Link to='/myhikes' className='item'>My Hikes</Link>
          <Link to='/about' className='item'>About</Link>
          <Link to='/contact' className='item'>Contact</Link>
        </div>
      </div>
    )
  }
}

module.exports = Nav
