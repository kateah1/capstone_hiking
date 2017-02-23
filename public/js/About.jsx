const React = require('react')
const Nav = require('./Nav.jsx')

class About extends React.Component {
  render () {
    return (
      <div>
        <Nav />
        <div className='ui hidden section divider' />
        <div className='ui hidden section divider' />
        <div className='ui middle aligned center aligned grid'>
          <div className='ui small image'>
            <img src='../images/logo.png' />
          </div>
        </div>
        <div className='ui hidden section divider' />
        <div className='ui hidden section divider' />
        <div className='ui container'>
          <div className='ui items'>
            <div className='item'>
              <div className='image'>
                <img src='../images/starrynight.jpg' />
              </div>
              <div className='content'>
                <div className='header'>Header</div>
                <div className='meta'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. </div>
              </div>
            </div>
          </div>
          <div className='ui hidden section divider' />
          <div className='ui hidden section divider' />
          <div className='ui divider' />
          <div className='ui hidden section divider' />
          <div className='ui hidden section divider' />
          <div className='ui four column grid'>
            <div className='center aligned column'>
              <i className='huge circular icon'>
                <icon className='huge flaticon-distance' />
                <icon className='big thin circle icon' />
              </i>
              <h1>FIND</h1>
              <h3>your next trail</h3>
            </div>
            <div className='center aligned column'>
              <i className='huge circular icon'>
                <icon className='huge flaticon-difficulty' />
                <icon className='big thin circle icon' />
              </i>
              <h1>TRACK</h1>
              <h3>your progress</h3>
            </div>
            <div className='center aligned column'>
              <i className='huge circular icon'>
                <icon className='huge flaticon-photo-camera' />
                <icon className='big thin circle icon' />
              </i>
              <h1>CAPTURE</h1>
              <h3>your experience</h3>
            </div>
            <div className='center aligned column'>
              <i className='huge circular icon'>
                <icon className='huge flaticon-radius' />
                <icon className='big thin circle icon' />
              </i>
              <h1>RECORD</h1>
              <h3>your thoughts</h3>
            </div>
          </div>
          <div className='ui hidden section divider' />
          <div className='ui hidden section divider' />
          <div className='ui divider' />
          <div className='ui hidden section divider' />
          <div className='ui hidden section divider' />
          <div className='ui items'>
            <div className='item'>
              <div className='content'>
                <div className='header'>Header</div>
                <div className='meta'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. </div>
              </div>
              <div className='image'>
                <img src='../images/lookingmtn.jpg' />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = About
