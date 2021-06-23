import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HomeSection from '../../components/HomeSection';
import GetInTouch from '../../components/containers/GetInTouch';






class ResidentialManagement extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }



  render () {
    return(
      <div>

      <HomeSection
        imgUrl="https://images.pexels.com/photos/2681640/pexels-photo-2681640.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        text='Residential Management'

      />

      <section className='section-two'>
        <div class='container' style={{marginTop: '50px'}}>
          <div class="column">
              <h1 class="title is-4" style={{textAlign: 'center'}}>We understand that renting out a residential property can be overwhelming....</h1>

          </div>
        </div>
      </section>

      <section style={{padding: '4%'}}>
        <div class="column">
        <div class="columns is-mobile">

          <div class="column">
          <br/>
          <br/>
          <p class="title is-4">Quoin residential management For Your Property Needs</p>
          <p>As one of online's most diverse professional serviced property management companies, we pride ourselves in the value we bring towards clients as well as tenants. The loyalty built with our tenants brings longer term tenancy which is beneficial towards maximising our clients return on investments.

          {/*we understand the value of a well-managed property. It can lead to longer tenancies and in turn help maximise your return on investment. Your dedicated Property Manager will be on-hand to offer individual support to deliver the best possible property asset management for you and your tenants.*/}</p>
          <br />
          <p>
          No matter the condition of the property we are confident Quoin Management can help. From refurbishment to meeting legal guidlines Quoin will have you covered.

          We understand that there can be issues that can arise, but with our local team and contractors we do regular property checks to  avoid many costly maintenance issues. Quoin Emergency team are available 24hrs a day for the general safety of our clients and tenants.
          <br/>
          <br/>
          We send our clients catered statements that shows where and when rent was collected and fixtures/replacements to the property keeping clients updated to have a full hands-off experience.</p>

          </div>



          <div class="column is-half">
            <img class='poo' style={{ marginLeft: '16%', height: '440px', width: '520px', borderRadius: '30%'}} src='https://images.pexels.com/photos/3639504/pexels-photo-3639504.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt='' />
          </div>
        </div>
        </div>
      </section>

      <section style={{padding: '4%'}}>
        <div class="column">
        <div class="columns is-mobile">

          <div class="column">
            <img style={{ height: '440px', width: '550px', borderRadius: '30%'}} src='https://images.pexels.com/photos/5847587/pexels-photo-5847587.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt='' />
          </div>


          <div class="column">

          <p class='title is-4'>Our Residential Management Services </p>
          <p>Clients know our Residential management team best for creating a bond with their property. Our regular overseen supervision
          of the property keeps your building to its highest standard which enables current tenants to feel secure.</p>
          <br/>
          <p>
          Our services include:
          <ul>
            <li>Single let</li>
            <li>HMO</li>
            <li>End of tenancy cleaning</li>
            <li>Refurbishment</li>

          </ul>

          {/*What’s more, we have many satisfied clients who are happy to testify to the service we provide.*/}</p>
          </div>
        </div>
        </div>
      </section>


        <GetInTouch
          title='Get in touch'
          text='We would be delighted to speak with you about your requirements or questions.'
          sub='Click below to fill out our contact form, otherwise, you can call the office on '
          number='020 8226 4200'
          button='Get In Touch'
        />

      </div>
    )
  }
}

// <section class="section is-small">
//     <div class="container is-max-widescreen">
//     <div class="notification is-primary">
//       This container has a <code>max-width</code> of <code>$widescreen - $container-offset</code> on fullhd.
//     </div>
//     </div>
//
// </section>


export default ResidentialManagement;





// <section class="section">
//   <div class="columns is-multiline is-mobile" style={{padding: '100px'}}>
//     <div class="column is-half">
//       <h1 style={{fontSize: '25px', fontWeight: 'bold'}}>Why choose us?</h1>
//       <img src='' alt=''/>
//       <br/>
//       <button class="button is-link has-text-weight-medium is-medium" style={{ backgroundColor: '#7B0100' }}>View our services</button>
//     </div>
//     <div class="column is-one-quarter">
//       <FontAwesomeIcon icon="gem" class='image-icon-gen'/>
//       <p style={{fontWeight: 'bold'}}>Experience</p>
//       <br />
//       <br />
//
//       <p>We’ve been successfully managing clients’ properties for over 35 years and although trends come and go, our determination to provide exceptional service stays the same.</p>
//     </div>
//     <div class="column is-one-quarter">
//       <FontAwesomeIcon icon="hourglass-half" class='image-icon-gen'/>
//       <p style={{fontWeight: 'bold'}}>High Standards</p>
//       <br />
//       <br />
//       <p>Our service is based on the core principles of high end property management: initiative, organisation, efficiency and professionalism at all times.</p>
//     </div>
//     <div class="column is-one-quarter">
//       <FontAwesomeIcon icon="hourglass-half" class='image-icon-gen'/>
//       <p style={{fontWeight: 'bold'}}>High Standards</p>
//       <br />
//       <br />
//       <p>Our service is based on the core principles of high end property management: initiative, organisation, efficiency and professionalism at all times.</p>
//     </div>
//     <div class="column is-one-quarter">
//       <FontAwesomeIcon icon="hourglass-half" class='image-icon-gen'/>
//       <p style={{fontWeight: 'bold'}}>High Standards</p>
//       <br />
//       <br />
//       <p>Our service is based on the core principles of high end property management: initiative, organisation, efficiency and professionalism at all times.</p>
//     </div>
//   </div>
// </section>
