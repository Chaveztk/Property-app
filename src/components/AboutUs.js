import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HomeSection from '../components/HomeSection'
// import Profile from '../components/containers/ProfileContainer.js'

import Cards from '../components/Cards.js';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';




class AboutUs extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  render(){
    return (
      <div>
        <HomeSection
          imgUrl='https://images.pexels.com/photos/1030974/pexels-photo-1030974.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
          text='About us'
        />


        <section style={{padding: '4%', marginTop:'20px'}}>
          <div class="column">
          <div class="columns is-mobile">




            <div class="column">
            <div class="block">
            <br />

              <h1 className="title is-3">Who We Are</h1>
              <p>Our experties at Quoin Management have been providing professional estate management services all over the UK since 2008.</p>
              <br />
              <p>First starting in London expanding broadly across the UK, we at Quoin management have now become an online management company diversing the value we bring towards other clients across the UK.    </p>
              <br />
              <p>Quoin Management is based on making sure you keep an integrity of mind. This is a common practice here at Quoin management which goes out to all our clients including tenants giving you a personal touch of secuirty.</p>
            </div>
            </div>
            <div class="column">
              <img style={{ height: '440px', width: '550px'}} src='https://images.pexels.com/photos/5847587/pexels-photo-5847587.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt='' />
            </div>
          </div>
          </div>
        </section>


        {/*<section style={{textAlign: 'center', paddingTop: '70px', paddingLeft: '300px', paddingRight: '300px'}}>
          <p class=' bd-notification is-info' style={{ fontWeight: 'bold', paddingBottom: '30px', color: '#7B0100', fontSize: '30px', marginBottom: '20px'}}>By using our service you can be confident that:</p>
            <div class="columns is-mobile">
              <div class="column">
                <p class="bd-notification is-danger"><FontAwesomeIcon icon="check-circle" class='image-icon-gen'/>
                They have the right professional experience: every member has to prove they have at least two years' residential management experience.</p>
              </div>
              <div class="column">
                <p class="bd-notification is-danger"><FontAwesomeIcon icon="check-circle" class='image-icon-gen'/>
                They have the right professional experience: every member has to prove they have at least two years' residential management experience.</p>
              </div>
            </div>

          <div class="columns is-mobile">
            <div class="column">
              <p class="bd-notification is-danger"><FontAwesomeIcon icon="check-circle" class='image-icon-gen'/>
              They have the right professional experience: every member has to prove they have at least two years' residential management experience.</p>
            </div>
            <div class="column">
              <p class="bd-notification is-danger"><FontAwesomeIcon icon="check-circle" class='image-icon-gen'/>
              They have the right professional experience: every member has to prove they have at least two years' residential management experience.</p>
            </div>
          </div>

          <div class="columns is-mobile">
            <div class="column">
              <p class="bd-notification is-danger"><FontAwesomeIcon icon="check-circle" class='image-icon-gen'/>
              They have the right professional experience: every member has to prove they have at least two years' residential management experience.</p>
            </div>
            <div class="column">
              <p class="bd-notification is-danger"><FontAwesomeIcon icon="check-circle" class='image-icon-gen'/>
              They have the right professional experience: every member has to prove they have at least two years' residential management experience.</p>
            </div>
          </div>
      </section>*/}



      <section class="section is-medium">
      <div class="columns is-mobile">
        <div class="column " style={{marginBottom: '1%', padding: '' }}>
          <p class='title is-3' style={{marginLeft:'3.5%'}}> Head Management Team</p>
        </div>
      </div>


      <div class="tile is-ancestor" style={{padding: '300px', marginTop:'-10%'}}>
      <div class="tile is-parent">
        <article class="tile is-child">
            <figure class="image">
              <img  src='https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?cs=srgb&dl=pexels-mentatdgt-937481.jpg&fm=jpg' style={{width: '324px', height: '224px'}}/>
            </figure>
            <p class="title is-5" style={{textAlign: 'center', padding:'20px'}}>David King</p>
          <p class="subtitle is-6" style={{textAlign: 'center'}}>Residential Manager</p>
        </article>
      </div>
      <div class="tile is-parent">
      <article class="tile is-child">
        <figure class="image">
          <img src="https://images.pexels.com/photos/1138903/pexels-photo-1138903.jpeg?cs=srgb&dl=pexels-mentatdgt-1138903.jpg&fm=jpg"
          style={{width: '324px', height: '224px'}}/>
        </figure>
        <p class="title is-5" style={{textAlign: 'center', padding:'20px'}}>Harry King</p>
        <p class="subtitle is-6" style={{textAlign: 'center'}}>Commercial Manager</p>
      </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child">
          <figure class="image">
            <img src="https://images.pexels.com/photos/7468194/pexels-photo-7468194.jpeg?cs=srgb&dl=pexels-rodnae-productions-7468194.jpg&fm=jpg"
            style={{width: '324px', height: '224px'}}/>
          </figure>
          <p class="title is-5" style={{textAlign: 'center', padding:'20px'}}>Chavez King</p>
        <p class="subtitle is-6" style={{textAlign: 'center'}}>Property Manager</p>
      </article>
      </div>
      </div>



      </section>

      <section class="section is-medium" style={{marginTop:'-20%'}}>
      <div class="columns is-mobile">
        <div class="column " style={{marginBottom: '1%', padding: '' }}>
          <p class='title is-3' style={{marginLeft:'3.5%'}}> Dont just take our word for it</p>
        </div>
      </div>
          <div class="content">
          {<Swiper
                autoplay={{delay: 4000}}
                spaceBetween={40}
                slidesPerView={1}

                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
              >
                {Cards.map(data =>
                  <SwiperSlide key={data.id} virtualIndex={data.index} className='swiper-slide'>

                    <div class="container is-max-desktop">
                    <div class="">
                    <p class="title is-4"></p>
                    <br />
                    <div class="content">{data.text}</div>
                    </div>
                  </div>

                  </SwiperSlide>
                )}
              </Swiper>}
          </div>


      </section>

        {/*<section className='section-two'>
          <div class='container' style={{marginTop: '50px'}}>
            <div class="column">
                <h1 class="sub-heading" style={{}}>What makes us different from other property buyers?</h1>
              <div class="columns">
                <div class="column">
                  <FontAwesomeIcon icon="home" class='image-icon' style={{padding: '25px'}}/>
                  <p class="bd-notification" style={{textAlign: 'center' }}>We are one of the UKs most experienced house buying service, operating for over 15 years</p>
                </div>

                <div class="column">
                  <FontAwesomeIcon icon="check-circle" class='image-icon' style={{padding: '25px'}} />
                  <p class="bd-notification" style={{textAlign: 'center' }}>We are one of the UKs most experienced house buying service, operating for over 15 years</p>
                </div>

                <div class="column">
                  <FontAwesomeIcon icon='chalkboard-teacher'  class='image-icon' style={{padding: '25px'}} />
                  <p class="bd-notification" style={{textAlign: 'center' }}>We are one of the UKs most experienced house buying service, operating for over 15 years</p>
                </div>

                <div class="column">
                  <FontAwesomeIcon icon='comment' class='image-icon' style={{padding: '25px'}}/>
                  <p class="bd-notification" style={{textAlign: 'center' }}>We are one of the UKs most experienced house buying service, operating for over 15 years</p>
                </div>

                <div class="column">
                  <FontAwesomeIcon icon='smile' class='image-icon' style={{padding: '25px'}}/>
                  <p class="bd-notification" style={{textAlign: 'center' }}>We are one of the UKs most experienced house buying service, operating for over 15 years</p>
                </div>
              </div>
            </div>
          </div>
        </section>*/}

      </div>
    )
  }
}


export default AboutUs;

// <div class="columns">
//   <img src='https://www.nationalpropertytrade.co.uk/wp-content/uploads/2019/01/tick-orange.png' alt=''/>
//     <div class="column is-one-third">is-four-fifths dewdew dede d wedededed edwededwe dewdededed edededw </div>
//     <div class="column">Auto sqswde dedeq dedw dqwdwqd wqdqwdw dwd wdwdwq wdqwd wdwd wqdq qwdq ddwd wdqwd  </div>
//     <div class="column">Auto</div>
// </div>
//
// <div class="card">
//   <div class="card-content">
//     <p class="title">“There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”</p>
//     <p class="subtitle">Jeff Atwood</p>
//   </div>
//   <footer class="card-footer">
//     <p class="card-footer-item">
//     <span>View on <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a></span>
//     </p>
//     <p class="card-footer-item">
//     <span>Share on <a href="#">Facebook</a></span></p>
//   </footer>
//  </div>
