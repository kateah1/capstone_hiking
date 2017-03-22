const React = require('react')
const ReactDOM = require('react-dom')
const { BrowserRouter, Route } = require('react-router-dom')
const Landing = require('./Landing.jsx')
const Login = require('./Login.jsx')
const Register = require('./Register.jsx')
const RegConfirm = require('./RegConfirm.jsx')
const Home = require('./Home.jsx')
const Search = require('./Search.jsx')
const MyHikes = require('./MyHikes.jsx')
const Reviews = require('./Reviews.jsx')
const ReviewForm = require('./ReviewForm.jsx')
const About = require('./About.jsx')
const Contact = require('./Contact.jsx')

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' component={Landing} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/register_confirmation' component={RegConfirm} />
          <Route path='/home' component={Home} />
          <Route path='/search' component={Search} />
          <Route path='/user/myhikes' component={MyHikes} />
          <Route path='/:id/reviews' component={Reviews} />
          <Route path='/:id/review_form' component={ReviewForm} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
