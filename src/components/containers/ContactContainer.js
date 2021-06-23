import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Google from '../containers/GoogleContainer.js'



function ContactContainer(props) {
  return (
    <div>
    <section style={{paddingTop: '70px', paddingLeft: '15px', paddingRight: '15px', marginBottom: '100px'}}>
      <div class="column" style={{marginLeft: '120px'}}>
      <h1 className="title is-2" style={{color: '#7B0100'}}>General Enquires</h1>
      <div class="columns is-mobile">

        <div class="column">
          <h1 style={{fontSize: '20px', fontWeight: 'bold'}}>Contact Details</h1>
          <br />
          <FontAwesomeIcon icon="envelope" class='image-icon-gen'/>
          <p style={{fontSize: '18px'}}>info@jcfpropertymanagement.com</p>
          <br />
          <FontAwesomeIcon icon="phone" class='image-icon-gen'/>
          <p class="fas fa-film" style={{fontSize: '18px'}}>020 8788 9700</p>
          <br />
          {/*<FontAwesomeIcon icon="map-marker-alt" class='image-icon-gen'/>
          <p style={{fontSize: '18px'}}>322 Upper Richmond Road,London, SW15 6TL</p>*/}

          <br/>
          <h1 style={{fontSize: '20px', fontWeight: 'bold'}}>Opening hours</h1>
          <br />
          <p style={{fontSize: '18px'}}>Monday – Friday: 9am – 6pm</p>
          <p style={{fontSize: '18px'}}>Saturday – Sunday: Closed</p>

          <br />
            <strong><p style={{fontSize: '18px'}}>Emergency contact:</p></strong>
          <br />
          <FontAwesomeIcon icon="phone" class='image-icon-gen'/>
          <p style={{fontSize: '18px'}}>020 8788 9700</p>
          <br/>
          </div>


        <div class="column" style={{marginRight: '500px'}}>
          <Google />
        </div>
      </div>
      </div>
    </section>



    </div>
  )
}





export default ContactContainer
