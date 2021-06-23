import React from 'react';
// import Authentication from './components/config/authentication.js';
import Home from './components/Home.js';
// import fire from './components/config/fire.js';
import Header from './components/Header.js';
import Login from './components/auth/Login.js'
import Footer from './components/Footer.js';
import AboutUs from './components/AboutUs.js';
import Payment from './components/Payment.js'
import Property from './components/Property.js';
import Contact from './components/Contact.js'
import PropertyManagement from './components/services/PropertyManagement.js'
import ResidentialManagement from './components/services/ResidentialManagement.js'
import InvestmentSourcing from './components/services/InvestmentSourcing.js'
import ProfessionalServices from './components/services/ProfessionalServices.js'
import CommercialManagement from './components/services/CommercialManagement.js'
import Lettings from './components/services/Lettings.js'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Show from './components/pages/Show.js';
import 'bulma';
// import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {faHome, faCheckCircle, faCheckSquare, faChalkboardTeacher, faComment, faSmile, faGem, faHourglassHalf, faEnvelope, faMapMarkerAlt, faPhone, faClock} from '@fortawesome/free-solid-svg-icons'

library.add(fab, faHome, faCheckCircle, faCheckSquare, faChalkboardTeacher, faComment, faSmile, faGem, faHourglassHalf, faEnvelope, faMapMarkerAlt, faPhone, faClock)


// import '~bulma/sass/utilities/_all.sass'




class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      user : {}
    }


  }


  render() {

  return(

    <BrowserRouter>
        <Header />
          <main>
            <section className="section" style={{padding: '0px', marginRight: '30px', marginLeft: '30px', marginBottom: '0%', marginTop:'5%'}}>

                <Switch>
                <Route path="/login" exact component={Login} />
                <Route path="/aboutus" exact component={AboutUs} />
                <Route path="/home" exact component={Home} />
                <Route path="/" exact component={Property} />
                <Route path="/contact" exact component={Contact} />

                <Route path="/payment" exact component={Payment} />
                <Route path="/lettings" exact component={Lettings} />
                <Route path='/propertymanagement' exact component={PropertyManagement}/>
                <Route path='/residentialmanagement' exact component={ResidentialManagement}/>
                <Route path="/investmentsourcing" exact component={InvestmentSourcing} />
                <Route path="/commercialmanagement" exact component={CommercialManagement} />
                <Route path='/professionalServices' exact component={ProfessionalServices} />






                <Route path="/show/:Id" exact component={Show}/>
                </Switch>
            </section>
          </main>
          <Footer />
      </BrowserRouter>

  );
  }
}






export default App;
