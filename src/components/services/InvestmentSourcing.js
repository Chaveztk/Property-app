import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HomeSection from '../../components/HomeSection.js';
// import FormContainer from '../../components/containers/FormContainer.js';
import GetInTouch from '../../components/containers/GetInTouch';






class InvestmentSourcing extends React.Component {
  constructor() {
    super();
  }


  render() {
    return(
      <div>

      <HomeSection
        imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaz47d3oAzg6E0U4WtugN11h_Y6r1PmdGioA&usqp=CAU'
        text='Investment Sourcing'
      />

      <section style={{textAlign: 'center', paddingTop: '70px', paddingLeft: '300px', paddingRight: '300px'}}>
        <p class=' bd-notification is-info' style={{ fontWeight: 'bold', paddingBottom: '30px', color: '#7B0100', fontSize: '30px', marginBottom: '20px'}}>A Complete Property Investment Solution</p>

          <div class="columns is-mobile">
            <div class="column">
              <p class="bd-notification is-danger"><FontAwesomeIcon icon="check-circle" class='image-icon-gen'/>
              We work with investors from all over the world.</p>
            </div>
            <div class="column">
              <p class="bd-notification is-danger"><FontAwesomeIcon icon="check-circle" class='image-icon-gen'/>
              Our sold deals average over 14% forecast gross rental yield**.</p>
            </div>
            <div class="column">
              <p class="bd-notification is-danger"><FontAwesomeIcon icon="check-circle" class='image-icon-gen'/>
              Properties range from £20k to £1 million+.</p>
            </div>
          </div>

{/*       <div class="columns is-mobile">
          <div class="column">
            <p class="bd-notification is-danger"><FontAwesomeIcon icon="check-circle" class='image-icon-gen'/>
            Properties available for flips, redevelopments, HMOs, buy-to-lets and more.</p>
          </div>
          <div class="column">
            <p class="bd-notification is-danger"><FontAwesomeIcon icon="check-circle" class='image-icon-gen'/>
            Properties available for flips, redevelopments, HMOs, buy-to-lets and more.</p>
          </div>
          <div class="column">
            <p class="bd-notification is-danger"><FontAwesomeIcon icon="check-circle" class='image-icon-gen'/>
            Our systems provide protection during your investment.</p>
          </div>
        </div>*/}
    </section>

      <div class="container" style={{marginTop: '100px', marginBottom: '100px'}}>
        <div style={{textAlign: 'center'}}>
          <p>You can access as much or little of our services as suits your personal circumstances.</p>
        </div>
      </div>


      <section class='notification' style={{marginTop: '100px', marginLeft: '-60px', marginRight: '-70px', marginBottom: '100px'}}>
        <div class="columns is-gapless is-multiline is-mobile" style={{marginBottom: '-25px', marginTop: '-15px'}}>
            <div class="column is-half">
            <img style={{height: '400px', width: '1000px', marginTop: '-6px'}} src='https://mk0h360connecth0vd5d.kinstacdn.com/wp-content/uploads/2019/11/hassan-ouajbir-IYU_YmMRm7s-unsplash-1024x683.jpg' alt=''/>
            </div>
            <div class="column is-half">
                <h2 class='title is-4' style={{color: '#7B0100', textAlign: 'center'}}>The Investment Platform</h2>
                <p style={{marginTop: '20px', padding: '70px'}}>We are one of the UK’s most active real estate investors with a growing portfolio of property assets. We believe that by taking a hands on approach we protect and enhance the value of our assets for the long term.
                We are one of the UK’s most active real estate investors with a growing portfolio of property assets. We believe that by taking a hands on approach we protect and enhance the value of our assets for the long term.</p>

            </div>


            {/*<div class="column is-half" style={{marginLeft: 'auto', marginRight: 'auto', width: '20em'}}>
              <p>An initial call with an experienced property investor from the Managed Service team, about your goals, your budget and the best way to get you to your goals. We look at:</p>
            </div>
            <div class="column is-half" style={{marginLeft: 'auto', marginRight: 'auto', width: '20em'}}>
                <p>An initial call with an experienced property investor from the Managed Service team, about your goals, your budget and the best way to get you to your goals. We look at:</p>
            </div>
            <div class="column is-half">
              <img style={{height: '400px', width: '1000px', marginTop: '-6px'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmHXnIN5DTPa5js5u_yHfsU93tHDZzQggQRg&usqp=CAU' alt=''/>
            </div>*/}


          {/*<div class="column is-half">
            <img style={{height: '400px', width: '1000px', marginTop: '-6px'}} src='https://sourcinginvestments.co.uk/wp-content/uploads/2020/05/iStock-1199144277-1-768x512.jpg' alt=''/>
          </div>
            <div class="column is-half" style={{marginLeft: 'auto', marginRight: 'auto', width: '20em'}}>
              <p>An initial call with an experienced property investor from the Managed Service team, about your goals, your budget and the best way to get you to your goals. We look at:</p>
            </div>
            <div class="column is-half" style={{marginLeft: 'auto', marginRight: 'auto', width: '20em'}}>
                <p>An initial call with an experienced property investor from the Managed Service team, about your goals, your budget and the best way to get you to your goals. We look at:</p>
            </div>*/}


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




export default InvestmentSourcing;
