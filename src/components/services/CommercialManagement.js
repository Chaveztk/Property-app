import React from 'react';
import GetInTouch from '../../components/containers/GetInTouch';
import HomeSection from '../../components/HomeSection.js';



class CommercialManagement extends React.Component{
  constructor() {
    super();
    this.state={}
  }

  render(){
    return(
      <div>

      <HomeSection
        imgUrl="https://www.emeraldgrouppublishing.com/sites/default/files/2020-02/ejournal_subject_-_fw_-_property_management_and_built_environment.jpg"
        text='Commercial Management'

      />

      <section className='section-two'>
        <div class='container' style={{marginTop: '50px'}}>
          <div class="column">
              <h1 class="title is-4" style={{textAlign: 'center'}}>No matter the size of your commercial property large or small, it's important to Quoin that you feel confident that your property is under full control.</h1>

          </div>
        </div>
      </section>

      <section style={{padding: '4%'}}>
        <div class="column">
        <div class="columns is-mobile">

          <div class="column">
          <br/>
          <br/>
          <p class=''>

              Our commercial services to landlords include a variety ranging from shops, industrial units to mixed-used properties.
              <br/>
              Quoin Management understand that dealing with issues such as rent arrears and tenants following to meet the lease agreement in place can be challenging. With Quoin Managements experienced commercial property team we are confident in giving the best adivce to our clients on how to deal with these issues at hand.<br/><br/>
              We stay on top of our timed scheduled visits and general maintenance to make sure all problems as well as building issues can be dealt with efficiently at a lower cost.
              We understand that every client has different needs. Thats what makes the service here at Quoin successful because we work round the clock to enable the satisfaction of our clients.


              </p>

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

          <p class='title is-4'>Our commercial property management service includes:</p>
          <br />
          <br />
          <ul>
          <li>Everyday repairs and maintenance</li>
          <li>Half yearly property inspections</li>
          <li>Serving of relevant notices</li>
          <li>General health and safety checks</li>
          <li>Financial services</li>
          <li>Leasehold enquiries and lease interpretations</li>


          <br />


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






  {/*{<Swiper
        // effect='fade'
        autoplay={{delay: 5000}}
        spaceBetween={40}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {Cards.map(data =>
          <SwiperSlide key={data.id} virtualIndex={data.index} className='slide'>
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src={data.imageUrl} alt="Placeholder image"/>
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">{data.title}</p>
                </div>
              </div>

            <div class="content">{data.text}</div>
            </div>
          </div>

          </SwiperSlide>
        )}
      </Swiper>}*/}
      </div>


    )
  }
}



export default CommercialManagement;



//
// <div class="tile is-ancestor" style={{marginLeft: '9.25%', marginRight: '-6%'}}>
//   <div class="tile is-parent">
//     <div class="tile is-child">
//       <p class="title">We offer a comprehensive service to landlords covering all types of mixed-use or commercial property,             including offices, shops and industrial units.</p>
//           <p>Our services include dealing with building maintenance and repairs, checking that tenants are meeting their obligations and advising you of what legal action is necessary thereafter. We also collect rent and service charges and issue a financial update to our clients on either a monthly or quarterly basis.
//
//           Our clients often find it helpful to have an experienced Property Manager on hand to advise on the best way to deal with issues such as rent arrears or failure by a tenant to comply with the requirements of their lease. We can also advise you on issues such as dilapidations at the end of the tenancy.
//
//           We work proactively to reduce costs by anticipating problems with premises so that they can be rectified more easily and at the minimum expense.</p>
//           <br/>
//           <p class='title'>Our comprehensive property management service includes:</p>
//           <ul>
//           <li>Tenant find</li>
//           <li>Expert referencing</li>
//           <li>Check in and check out services</li>
//           <li>Tenant deposit protection</li>
//           <li>Rent collection</li>
//           <li>Everyday repairs and maintenance</li>
//           <li>Half yearly property inspections</li>
//           <li>Serving of relevant notices</li>
//           <li>Reducing void periods</li>
//           <li>Negotiating tenancy renewals</li>
//           </ul>
//
//     </div>
//   </div>
//   <div class="tile is-4 is-vertical is-parent">
//     <div class="tile is-child is-5 box">
//       <p class="title is-5">Useful links</p>
//       <div>
//       <img style={{height: '100px', width: '300px'}} src='https://www.mcdonaldjoneshomes.com.au/sites/default/files/styles/blog_hero_banner/public/tulloch-25-halifax-facade-edited.jpg?itok=IgDG63EW' alt=''/>
//       </div>
//       <ul>
//       <li>Careers</li>
//       <hr/>
//       <li>Contact us</li>
//       <hr/>
//       <li>News</li>
//       </ul>
//     </div>
//     <div class="tile is-child is-5 box">
//       <p class="title">Two</p>
//       <p> Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
//     </div>
//     <div class="tile is-child is-5 box">
//       <p class="title">Two</p>
//       <p> Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
//     </div>
//
// </div>
//
// </div>
