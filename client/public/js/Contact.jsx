const React = require('react')
const Footer = require('./Footer.jsx')

class Contact extends React.Component {
  render () {
    return (
      <div className='Site'>
        <div className='Site-content'>
          <div className='ui hidden section divider' />
          <div className='ui hidden section divider' />
          <div className='ui container'>
            <div className='ui middle aligned center aligned grid'>
              <div className='ui small image'>
                <img src='../images/logo.png' />
              </div>
            </div>
            <div className='ui hidden section divider' />
            <div className='ui raised very padded text container segment'>
              <form className='ui large form' action='https://formspree.io/kate.hurd64@gmail.com' method='post' encType='text/plain'>
                <h2 className='ui header'>Contact</h2>
                <div className='field'>
                  <input type='text' name='firstname' required placeholder='first name' />
                </div>
                <div className='field'>
                  <input type='text' name='lastname' placeholder='last name' />
                </div>
                <div className='field'>
                  <input type='text' name='username' placeholder='username' />
                </div>
                <div className='field'>
                  <input type='email' name='_replyto' required placeholder='email' />
                </div>
                <div className='field'>
                  <textarea name='message' required placeholder='message' />
                </div>
                <button className='ui fluid large submit button' type='submit'>send</button>
              </form>
            </div>
          </div>
          <div className='ui hidden section divider' />
          <div className='ui hidden section divider' />
        </div>
        <Footer />
      </div>
    )
  }
}

module.exports = Contact
