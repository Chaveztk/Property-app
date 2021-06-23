import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import logo from '../images/quoin.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';





class Header extends React.Component {
    constructor() {
      super();
      this.state = {
        headerOpen: false,
        user: {}
      }
      this.toggleHeader = this.toggleHeader.bind(this)
    }

    toggleHeader() {
      this.setState({ headerOpen: !this.state.headerOpen })
    }

    componentDidUpdate(prevProps) {
      // console.log(prevProps);
      if(prevProps.headerOpen !== this.headerOpen) {
      this.setState({ headerOpen: true });

  }
}


    render() {
        return(
          <div>

{/*           <div class="notification">
              <FontAwesomeIcon icon="phone" class='image-icon-gens'/>
              <p class="fas fa-film" style={{fontSize: ''}}>020 8788 9700</p>
            </div>*/}

          <div className="hero-head">
            <nav className="navbar is-fixed-top is-transparent nav-bar">
              <div className="container">
                <div className="navbar-brand">
                <Link to='/home'>
                  <img style={{height: '100px', width: '300px', marginLeft: '-130px'}} src={logo} alt=""/>
                </Link>
                  <a
                  role='button'
                  className={`navbar-burger${this.state.headerOpen ? ' is-active' : ''}`}
                  onClick={this.toggleHeader}
                  data-target="navbarMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                  </a>
                </div>
                  <div id="navbarMenu nav-bar" className={`navbar-menu${this.state.headerOpen ? ' is-active' : ''}`}>
                    <div className="navbar-end">
                      <div className="tabs is-right">
                        {/*<Link to='/login'><li>login</li></Link>*/}
                        <Link to='/home'><li>Home</li></Link>
                        {/*<Link to='/residentialmanagement'><li>Lettings</li></Link>*/}
                          <Link to='/aboutus'>
                            <li className="is-active">
                            About Us</li></Link>
                            <Link to='/contact'>
                            <li>Contact</li></Link>

                      </div>
                        </div>
                          <div className="navbar-item has-dropdown is-hoverable">
              						    <a className="navbar-link">Services</a>
              						<div className="navbar-dropdown">
                            <Link to='/residentialmanagement'>
              							  <a className="navbar-item">Residential Management</a>
                            </Link>
                            <Link to='/propertymanagement'
                             className="navbar-item">Property Management
                            </Link>
                            <Link to='/commercialmanagement'>
              							  <a className="navbar-item">Commercial Management</a>
                            </Link>
              							<hr className="navbar-divider"/>
                            <Link to='/investmentsourcing'>
              							  <a className="navbar-item">Investment Sourcing</a>
                            </Link>
              							{/*<div className="navbar-item">Professional Services</div>*/}
                            {/*<div className="navbar-item">Emergency out of Hours</div>*/}

              						</div>
					               </div>
                          </div>
                            </div>
              </nav>
          </div>
          </div>
        );
    }
  }


export default withRouter(Header);


// <header>
// <Link to="/" className="navbar-item">
// <img src="https://i.pinimg.com/originals/83/a6/19/83a619916585d5dfa4346ffaea3ee8da.jpg" height="100" alt='' />
// </Link>
// <Link to="/memegenerator" className="navbar-item"><p>Blah Blah</p></Link>
//
//
// </header>



// <img
//   src='https://i.pinimg.com/originals/83/a6/19/83a619916585d5dfa4346ffaea3ee8da.jpg'
//   alt='Problem?'
//
// />




// New NavBar below


// <nav class="navbar">
// <div class="container">
// <div class="navbar-brand">
// <a class="navbar-item" href="../">
// <img src="../images/bulma.png" alt="Logo"/>
// </a>
// <span class="navbar-burger burger" data-target="navbarMenu">
// <span></span>
// <span></span>
// <span></span>
// </span>
// </div>
// <div id="navbarMenu" class="navbar-menu">
// <div class="navbar-end">
// <a class="navbar-item is-active">Home</a>
// <a class="navbar-item">Examples</a>
// <a class="navbar-item">Features</a>
// <a class="navbar-item">Team</a>
// <a class="navbar-item">Archives</a>
// <a class="navbar-item">Help</a>
// <div class="navbar-item has-dropdown is-hoverable">
//   <a class="navbar-link">Account</a>
//   <div class="navbar-dropdown">
//     <a class="navbar-item">Dashboard</a>
//     <a class="navbar-item">Profile</a>
//     <a class="navbar-item">Settings</a>
//     <hr class="navbar-divider"/>
//     <div class="navbar-item">Logout</div>
//   </div>
// </div>
// </div>
// </div>
// </div>
// </nav>
