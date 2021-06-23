import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../images/map.jpeg'
import HomeSection from '../components/HomeSection.js';
import ContactContainer from '../components/containers/ContactContainer.js'
import FormContainer from '../components/containers/FormContainer.js';

import Cards from '../components/Cards.js';
import HomeCards from '../components/containers/HomeCards.js';
import Google from '../components/containers/GoogleContainer.js'





import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/effect-fade/effect-fade.scss';


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]);







class Home extends React.Component{
  constructor() {
    super()
    this.state = {}


  }



  render() {

    const card = Cards.map(data =>
      <div class="column service-text">
      <Link to={data.url}>
        <img class='service-image' src='https://images.adsttc.com/media/images/51d4/84a8/b3fc/4bea/e100/01d6/large_jpg/Portada.jpg?1372882078' alt=''/>
        <p class="bd-notification is-danger">{data.title}</p>
      </Link>
      </div>
    )

    const homeCard = HomeCards.map(data =>
      <div class="tile is-parent">
        <article class="tile is-child">
          <figure class="image is-3by3">
            <img  src={data.imageUrl} style={{width: '324px', height: '224px'}}/>
          </figure>
          <p class="title is-4" style={{textAlign: 'center', padding:'35px'}}>{data.title}</p>
          <p class="subtitle is-6" style={{textAlign: 'center'}}>{data.text}</p>
        </article>
        </div>
    )


    return (
      <div>
      <section class="section-background">

        <div class="container-forImage">
          <img className='home-image' src="https://images.pexels.com/photos/1000985/pexels-photo-1000985.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt='' />
          <div className="text-block">
            <div class='container'>
              <h1 className='img-text'>Quoin Property Management</h1>
              <h1 class='mid-text' style={{paddingTop: '50px'}}></h1>
            </div>
          </div>
        </div>
      </section>

  <br/>

  <div class="container is-max-desktop">
      <p class='subtitle is-4' style={{textAlign:'center', marginTop:'4%', marginBottom: '-200px'}}>
        It is Quoin Estate mission to help our clients from investment companies<br />
        to home owners across a vareity of buildings, from large blocks<br />
        of flats to converted terraced properties. The servies we offer are <br />
        highly valued to all our clients, tenants and landlords.

        {/*We help a wide variety of clients ranging from investment companies<br/>
        to owner-occupiers across a spectrum of buildings, from large blocks<br/>
        of flats to converted terraced properties. Our service is highly personal<br/>
        to both our landlord, clients and their tenants.*/}
      </p>
  </div>

  <div class="tile is-ancestor" style={{padding: '300px'}}>
  <div class="tile is-parent">
    <article class="tile is-child">
      <Link to='/residentialmanagement'>
        <figure class="image">
          <img  src="https://images.pexels.com/photos/3935350/pexels-photo-3935350.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" style={{width: '324px', height: '224px'}}/>
        </figure>
        <p class="title is-4" style={{textAlign: 'center', padding:'35px'}}>Residential Management</p>
      </Link>
      <p class="subtitle is-6" style={{textAlign: 'center'}}>Its within the Quoin Management teams care that our clients premises remains maintained to a high rated standard for the safe secuirty of residents.</p>
    </article>
  </div>
  <div class="tile is-parent">
  <article class="tile is-child">
  <Link to='/commercialmanagement'>
    <figure class="image">
      <img src="https://images.pexels.com/photos/3639504/pexels-photo-3639504.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      style={{width: '324px', height: '224px'}}/>
    </figure>
    <p class="title is-4" style={{textAlign: 'center', padding:'35px'}}>Commercial Management</p>
  </Link>
    <p class="subtitle is-6" style={{textAlign: 'center'}}>Quoin commercial department endeavor to make sure that our clients reach maximum potential using a personalised tailored plan specially designed by our team of experts.
    {/*this service includes retail, office and business space, leisure and industrial.*/}</p>
  </article>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child">
    <Link to='/propertymanagement'>
      <figure class="image">
        <img src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        style={{width: '324px', height: '224px'}}/>
      </figure>
      <p class="title is-4" style={{textAlign: 'center', padding:'35px'}}>Property <br /> Management</p>
    </Link>
    <p class="subtitle is-6" style={{textAlign: 'center'}}>We stand by our policy for the peace of our clients, working together with all parties to know the building in-depth, ensuring all aspects of the building are covered.</p>
  </article>
  </div>
  </div>

  <div class="tile is-ancestor" style={{ marginTop: '-590px', padding: '300px', marginBottom: '-11%'}}>
      {homeCard}
  </div>


  <HomeSection
  imgUrl='https://images.pexels.com/photos/3639507/pexels-photo-3639507.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
  text='Why Quoin Estate Management?'
  />


  <section class="section is-small" style={{margin: '8%'}}>
{/*  <div class="columns is-mobile">
    <div class="column is-half is-offset-one-quarter" style={{margin: '3%', padding: '' }}>
      <p class='title is-3'> Why internode Services?</p>
    </div>
  </div>
  <hr class='hr-tag'/>*/}
  <div class="columns is-gapless is-multiline is-mobile">
    <div class="column is-one-quarter">
      <p class='title is-3'>Where We Operate</p>
        <br/>
        <p>The strength of our company is in that we're an online run management company, this has given us the ability to communicate with our clientle more effectively across the UK. </p>
        <br />

        <p>Our team work after hours ensuring our clients have the most of their comfort. As a new customer, our team at Quoin management would be glad to answer any of your requests. Please use the form below or send us an email to get in touch.</p>


    </div>
    <div class="column" style={{marginLeft: '114px', marginBottom: '400px'}}>
      <Google />
      {/*<img src={logo} alt='' style={{transform: 'rotate(-10deg)', height:'400px'}}/>*/}
    </div>
  </div>



{ /* <div class="columns is-gapless">
  <div class="column">
  <div class="tile is-parent">
  <article class="tile is-child">
  <FontAwesomeIcon icon='comment' class='font-home'/>
    <p class="title is-4" style={{textAlign: 'center', padding:'35px'}}>Done - Professional Services</p>
    <p class="subtitle is-6" style={{textAlign: 'center'}}>It is at our forefront to build secure relationships with our clients to grow to a  sufficient level. {/*Our mission is to improve our work to the lives of those we touch.</p>
  </article>
  </div>
  </div>
  <div class="column">
  <div class="tile is-parent">
  <article class="tile is-child">
  <FontAwesomeIcon icon="hourglass-half" class='font-home'/>
    <p class="title is-4" style={{textAlign: 'center', padding:'35px'}}>Maintenance Services</p>
    <p class="subtitle is-6" style={{textAlign: 'center'}}>Our well timed schedules for maintenance initiatives and planning with our historical trend of experties and clientel.</p>
  </article>
  </div>
  </div>
  <div class="column">
  <div class="tile is-parent">
  <article class="tile is-child">
  <FontAwesomeIcon icon='clock' class='font-home'/>
    <p class="title is-4" style={{textAlign: 'center', padding:'35px'}}>Done - Health & Safety</p>
    <p class="subtitle is-6" style={{textAlign: 'center'}}>The general updates of Health & Safety regulations.</p>
  </article>
  </div>
  </div>

  </div>*/}

</section>


{/*<section class="section is-medium donuts">
<div class="tile is-ancestor">
<div class="tile is-parent">
  <article class="tile is-child">
    <p class="title is-2" style={{color: 'white'}}>Our Reviews</p>
    <p class="subtitle is-4" style={{color: 'white'}}>No matter the magnitude or triviality of your issue, we provide the same priority and attention, knowing it’s  important to you.</p>
    <div class="content">
    <br />
    <br />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
    </div>
  </article>
</div>
<div class="tile is-parent is-8">
  <article class="tile is-child">
    <br />
    <br />

    <div class="content">
    {<Swiper
          autoplay={{delay: 4000}}
          spaceBetween={40}
          slidesPerView={1}
          notification
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {Cards.map(data =>
            <SwiperSlide key={data.id} virtualIndex={data.index} className='swiper-slide'>
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4" style={{color: 'white'}}>{data.title}</p>
                  </div>
                </div>
                <br />
              <div class="content">{data.text}</div>
            </SwiperSlide>
          )}
        </Swiper>}
    </div>
  </article>
</div>
</div>
</section>*/}



        {/*<div class="column notification" style={{marginLeft: '-30px', marginRight: '-30px'}}>
          <p class="bd-notification is-info sub-heading">services we offer</p>

          <div class="columns is-mobile service-card-links">
            {card}
          </div>
        </div>*/}

        {/*  <div class="columns is-mobile">
            <div class="column is-half is-offset-one-quarter" style={{margin: '3%', padding: '' }}>
              <p class='title is-3'> Why internode Services?</p>
            </div>
          </div>
          <hr class='hr-tag'/>*/}



     <FormContainer
      title='Tell us your requirements'
      midText='PHONE: &nbsp;	020 7828 1664'
      subText='info@quoinmanagement.com'
      imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd0Qmq2Upmkg0XGISm-yKNS5KO7Wyeh_MJvQ&usqp=CAU"
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
      sweetalert={this.sweetalert}
      {...this.state}
       />








      </div>


    );
  }
}

export default Home;


    // New section tag but a bit laggy

// <section class="section">
// <div class="columns is-multiline is-mobile" style={{padding: '100px'}}>
//   <div class="column is-half">
//     <h1 style={{fontSize: '25px', fontWeight: 'bold'}}>Why choose us?</h1>
//     <p style={{fontSize: '18px'}}>When appointing a property management company,
//     <br />you want one that stands out.
//     </p>
//     <br/>
//     <button class="button" style={{padding: '20px', backgroundColor: '#7B0100', color: 'white' }}>View out services</button>
//   </div>
//   <div class="column is-one-quarter">
//     <FontAwesomeIcon icon="gem" class='image-icon-home'/>
//     <p style={{fontWeight: 'bold'}}>Experience</p>
//     <br />
//     <br />
//
//     <p>We’ve been successfully managing clients’ properties for over 35 years and although trends come and go, our determination to provide exceptional service stays the same.</p>
//   </div>
//   <div class="column is-one-quarter">
//     <FontAwesomeIcon icon="hourglass-half" class='image-icon-home'/>
//     <p style={{fontWeight: 'bold'}}>High Standards</p>
//     <br />
//     <br />
//     <p>Our service is based on the core principles of high end property management: initiative, organisation, efficiency and professionalism at all times.</p>
//   </div>
//   </div>
//
//   <div class="column" style={{marginTop: '-90px'}}>
//       <div class="columns is-mobile">
//         <div class="column is-half">
//         </div>
//         <div class="column is-one-quarter">
//           <FontAwesomeIcon icon="hourglass-half" class='image-icon-home'/>
//           <p style={{fontWeight: 'bold'}}>High Standards</p>
//           <br />
//           <br />
//           <p>Our service is based on the core principles of high end property management: initiative, organisation, efficiency and professionalism at all times.</p>
//         </div>
//         <div class="column is-one-quarter two-square">
//           <FontAwesomeIcon icon="hourglass-half" class='image-icon-home'/>
//           <p style={{fontWeight: 'bold'}}>High Standards</p>
//           <br />
//           <br />
//           <p>Our service is based on the core principles of high end property management: initiative, organisation, efficiency and professionalism at all times.</p>
//         </div>
//       </div>
//       </div>
//
// </section>




// <p class="help is-danger">This email is invalid</p>
//

//
// class Home extends React.Component{
//   constructor() {
//     super()
//     this.state = {
//       action: '',
//       method: 'POST',
//       firstName: '',
//       lastName: ''
//     }
//
//     this.handleSubmit = this.handleSubmit.bind(this)
//     this.handleChange = this.handleChange.bind(this)
//
//   }
//
//
//   handleChange(event) {
//     const {name, value} = event.target
//     this.setState({ [name]: value })
//   }
//
//
//   handleSubmit(event) {
//       console.log('this')
//       this.setState({ action: 'https://formspree.io/chavezking93@gmail.com'})
//
//   }
//   render() {
//     return (
//       <div>
//
//
//   <section class="section-background">
//     <div class="container-forImage">
//       <img className='home-image' src="https://images.livemint.com/img/2020/05/27/600x338/6839f920-9ff9-11ea-83ce-4ebc6e9f027c_1590606420589_1590606520685.jpg" alt='' />
//       <div className="text-block">
//         <div class='container'>
//           <h1 className='img-text'>Can I Sell my House to a Housing Association</h1>
//           <h1 class='mid-text'>What a beautiful sunrise</h1>
//           <button class="button is-info home-button">Button</button>
//         </div>
//       </div>
//     </div>
//   </section>
//   <br/>
//
//
//
//     <section>
//       <div class='container' id='im-testing' style={{marginTop: '150px', marginLeft: '300px'}}>
//         <div class="columns is-vcentered foolish">
//           <div class="put-to-top column is-8">
//             <div id="text-249-1-0-0" class="module module-text text-249-1-0-0  repeat  " data-id="27d402a">
//
//           <h1><b>Sell Property for Cash</b></h1>
//           <p>Whether you need to sell to move to a new property or you want to avoid repossession you can sell a property for cash in as little as seven days. You won’t have the stress of worrying about buyers pulling out or the worry of the buyer’s funding falling through. NPT is a cash buyer which means that we don’t use a mortgage and we have no chain; we can work with your deadlines and can even complete the process so that you have money from the sale in your bank account in as little as 7 days.</p>
//           <br/>
//
//           <h4><b>Avoiding The Lengthy Stress</b></h4>
//           <p>Moving house is said to be one of the most stressful times in a family’s life, with the only divorce coming close to the level of worry. A lot of this worry comes from the stress of trying to tie everything together within a certain amount of time. For example, if you have found a house you want to move in to but do not yet have a buyer for your own property, it can cause major delays and may even lead to you losing the property you want.</p>
//           <br/>
//
//           <h4><b>Cash Buying</b></h4>
//           <p>The NPT cash buying service means that you don’t need to worry about timing or about chains. We buy houses for cash and we complete the process quickly and smoothly so you don’t have to worry about the sale of your property. If you have found somewhere that you want to purchase you can make an offer confident that you will have the money.</p>
//           <br/>
//
//           <h4><b>Reasons For Needing A Quick Sale</b></h4>
//           <p>If you have recently been through a divorce or you are looking to sell a property that was left to you after a loved one died you are undoubtedly suffering enough stress, worry, and pain without having to add the hassle of selling your home to the equation.</p>
//           <br/>
//
//           <h4><b>Apply &amp; Sell Your Property For Cash</b></h4>
//           <p>By completing our <a href="https://www.nationalpropertytrade.co.uk/get-your-instant-cash-offer/">quick cash offer form</a> at NPTQuickHouseSale.co.uk you will receive a cash offer for your property. What’s more, we can work to your deadline so if you need to complete in a week or two we can usually meet even these strict deadlines and provide you with the cash you need when you need it.</p>
//           </div>
//         </div>
//
//
//     <form class="column notification has-text-grey-light" method={this.state.method} onSubmit={this.handleSubmit} action={this.state.action}>
//             <div class="field">
//               <label class="label">First Name</label>
//                 <div class="control">
//                   <input value={this.state.firstName} name='firstName' onChange={this.handleChange} class="input" type="text" placeholder="First Name" />
//                 </div>
//             </div>
//
//             <div class="field">
//               <label class="label">Last Name</label>
//                 <div class="control">
//                   <input value={this.state.lastName} name='lastName' onChange={this.handleChange} class="input" type="text" placeholder=" Surname" />
//               </div>
//             </div>
//          <div class="field is-grouped">
//             <div class="control">
//               <button class="button is-link">Submit</button>
//             </div>
//              <div class="control">
//                 <button class="button is-link is-light">Cancel</button>
//              </div>
//         </div>
//
//
//
//
//           </form>
//         </div>
//         </div>
//         </section>
//       </div>





















// <div>
//
// <div class="container">
// <div class="notification ">
//   <img className='home-image' src="https://images.livemint.com/img/2020/05/27/600x338/6839f920-9ff9-11ea-83ce-4ebc6e9f027c_1590606420589_1590606520685.jpg" alt='' />
// </div>
// </div>
//
//   <div class="columns is-vcentered">
//     <div class="put-to-top column is-8">
//       <div id="text-249-1-0-0" class="module module-text text-249-1-0-0  repeat  " data-id="27d402a">
//
//     <h2>Sell Property for Cash</h2><p>Whether you need to sell to move to a new property or you want to avoid repossession you can sell a property for cash in as little as seven days. You won’t have the stress of worrying about buyers pulling out or the worry of the buyer’s funding falling through. NPT is a cash buyer which means that we don’t use a mortgage and we have no chain; we can work with your deadlines and can even complete the process so that you have money from the sale in your bank account in as little as 7 days.</p>
//
//     <h4>Avoiding The Lengthy Stress</h4><p>Moving house is said to be one of the most stressful times in a family’s life, with the only divorce coming close to the level of worry. A lot of this worry comes from the stress of trying to tie everything together within a certain amount of time. For example, if you have found a house you want to move in to but do not yet have a buyer for your own property, it can cause major delays and may even lead to you losing the property you want.</p>
//
//     <h4>Cash Buying</h4><p>The NPT cash buying service means that you don’t need to worry about timing or about chains. We buy houses for cash and we complete the process quickly and smoothly so you don’t have to worry about the sale of your property. If you have found somewhere that you want to purchase you can make an offer confident that you will have the money.</p>
//
//     <h4>Reasons For Needing A Quick Sale</h4><p>If you have recently been through a divorce or you are looking to sell a property that was left to you after a loved one died you are undoubtedly suffering enough stress, worry, and pain without having to add the hassle of selling your home to the equation.</p>
//
//     <h4>Apply &amp; Sell Your Property For Cash</h4><p>By completing our <a href="https://www.nationalpropertytrade.co.uk/get-your-instant-cash-offer/">quick cash offer form</a> at NPTQuickHouseSale.co.uk you will receive a cash offer for your property. What’s more, we can work to your deadline so if you need to complete in a week or two we can usually meet even these strict deadlines and provide you with the cash you need when you need it.</p>
//     </div>
//   </div>
//
//
// <div class="column">
//       <div class="field">
//         <label class="label">First Name</label>
//           <div class="control">
//             <input class="input" type="text" placeholder="First Name" />
//         </div>
//       </div>
//
//       <div class="field">
//         <label class="label">First Name</label>
//           <div class="control">
//             <input class="input" type="text" placeholder="First Name" />
//         </div>
//       </div>
// <div class="field">
// <label class="label">Adress of Property</label>
// <div class="control">
//   <input class="input" type="text" placeholder="Text input" />
// </div>
// </div>
// <div class="field">
// <label class="label">City/Town</label>
// <div class="control">
//   <input class="input" type="text" placeholder="Text input" />
// </div>
// </div>
// <div class="field">
// <label class="label">Post Code</label>
// <div class="control">
//   <input class="input" type="text" placeholder="Text input" />
// </div>
// </div>
//
//
// <div class="field">
// <label class="label">Email</label>
// <div class="control has-icons-left has-icons-right">
// <input class="input is-danger" type="email" placeholder="Email input" value="" />
// <span class="icon is-small is-left">
//   <i class="fas fa-envelope"></i>
// </span>
// <span class="icon is-small is-right">
//   <i class="fas fa-exclamation-triangle"></i>
// </span>
// </div>
// <p class="help is-danger">This email is invalid</p>
// </div>
//
//
// <div class="field">
// <label class="label">Subject</label>
// <div class="control">
// <div class="select">
//   <select>
//     <option>condition of property</option>
//     <option>With options</option>
//     <option>With options</option>
//     <option>With options</option>
//     <option>With options</option>
//
//   </select>
// </div>
// </div>
// </div>
//
// <div class="field">
// <label class="label">Reasons for selling property</label>
// <div class="control">
// <textarea class="textarea" placeholder="Textarea"></textarea>
// </div>
// </div>
//
// <div>
// </div>
//
// <div class="field is-grouped">
// <div class="control">
// <button class="button is-link">Submit</button>
// </div>
// <div class="control">
// <button class="button is-link is-light">Cancel</button>
// </div>
// </div>
//
//
//
//     </div>
//   </div>
// </div>


// <img className='image-sizing' src="https://images.livemint.com/img/2020/05/27/600x338/6839f920-9ff9-11ea-83ce-4ebc6e9f027c_1590606420589_1590606520685.jpg" alt='' />


// <form>
//   <div className="field">
//     <label className="email">Email</label>
//     <input className="input" name="email" placeholder="Email" />
//   </div>
//   <div className="field">
//     <label className="password">Password</label>
//     <input className="input" type="password" name="password" placeholder="Password" />
//   </div>
//
//   <button className="button">Submit</button>
// </form>
