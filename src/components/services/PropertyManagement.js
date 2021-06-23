import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HomeSection from '../../components/HomeSection.js';
import { Link } from 'react-router-dom';
import Cards from '../../components/Cards.js';
import GetInTouch from '../../components/containers/GetInTouch';







class PropertyManagement extends React.Component {
  constructor() {
    super();
    this.state = {
        card: []
    }
  }


render() {


  return(

    <div>

    <HomeSection
      imgUrl="https://www.emeraldgrouppublishing.com/sites/default/files/2020-02/ejournal_subject_-_fw_-_property_management_and_built_environment.jpg"
      text='PROPERTY AND BLOCK MANAGEMENT SERVICES'

    />
    <section className='section-two'>
      <div class='container' style={{marginTop: '50px'}}>
        <div class="column">
            <h1 class="title is-4" style={{textAlign: 'center'}}>Quoin Management are highly experienced service providers for blocks of flats, properties and estates.</h1>

        </div>
      </div>
    </section>

{ /*           Our property management teams never stand still when it comes to the day-to-day managing of your asset, finding and retaining tenants, collecting rent and overseeing maintenance and compliancy.
            <br/>


            Whether you own a multi-asset portfolio of commercial properties or a buy-to-let investment, we predict and react to market conditions ahead, tailoring our advice and, in turn, services to make sure your property gives your consistent returns on investment as long as you own it.</p>*/}




{ /*   <section className='section-two'>
      <div class='container' style={{marginTop: '50px'}}>
        <div class="column">
          <div class="columns">

            <div class="column">
              <FontAwesomeIcon icon="check-circle" class='image-icon-about' />
              <p class="bd-notification" style={{textAlign: 'center' }}>To work together to deliver the most reliable and transparent property management service for companies, boards, freeholders, leaseholders and tenants across London.</p>
            </div>

            <div class="column">
              <FontAwesomeIcon icon='check-circle'  class='image-icon-about' />
              <p class="bd-notification" style={{textAlign: 'center' }}>We make the asset work to financial gain requires tactical, flexible property management strategies and solutions that extract, protect and enhance value and efficiency at every stage of ownership.</p>
            </div>
          </div>
        </div>
      </div>
    </section>*/}

    <br/>


    <section style={{padding: '4%'}}>
      <div class="column">
      <div class="columns is-mobile">

        <div class="column">
        <br/>
        <br/>
        <p class="title is-4">Big or small we have a list of properties under management.</p>

            <p>When it come to our property block management or the management of our clients units, we specialise in having all managed sites to be customised to suit their individual needs.  Quion management has grown successfully over the years with our key knowledge in property and experience in learning to adopt and adapt through the personal growth between ourseleves and our clients.
            We keep close attention to detail making sure you are always kept updated with all legislation and changes that can affect you and your property assests.</p>
            <br/>
            We have a detailed understanding of the complex laws that can affect property owners and as a firm of Chartered Surveyors, we have the additional benefit of understanding the technical issues involved in building construction and property maintenance.


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

        <p class='title is-4'>Our property and block management service includes:</p>
        <ul>
          <li>Day to day management of programmed and reactive maintenance</li>
          <li>On-site caretakers</li>
          <li>Collection of service charges and ground rents</li>
          <li>Preparation of annual income and expenditure accounts</li>
          <li>Manage and maintain a ‘ring fenced’ client account</li>
          <li>Retain accounts records in line with the RICS Service Charge Residential Management Code (3rd Edition)</li>
          <li>Dealing with leasehold enquiries and lease interpretations</li>
          {/*<li>Dispute resolutions</li>*/}
          <li>Project management on major works</li>
          <li>Section 20 consultations and project management</li>
          <li>Arrange for Fire and Health and Safety inspections and compliance</li>
          <li>Carrying out quarterly property inspections</li>
          <li>Assisting with the ‘Right to Manage’ process and collective enfranchisement</li>
        </ul>
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





export default PropertyManagement;
