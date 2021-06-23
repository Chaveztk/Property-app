import React from 'react';
import ContactContainer from '../components/containers/ContactContainer.js'
import swal from 'sweetalert';
import FormContainer from '../components/containers/FormContainer.js';


class Contact extends React.Component {

  constructor() {
    super();
    this.state = {
      name: '',
      action: '',
      method: 'POST',
      telephone: '',
      email: '',
      text: ''


    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.sweetalert = this.sweetalert.bind(this)


  }

  sweetalert() {
    swal({
    title: "Application sent!",
    text: "You will receive a reply within 24hrs",
    icon: "success",
    button: "Continue",
});
  }

  handleSubmit() {
    this.setState({ action: 'https://formspree.io/f/xbjpavqp'})
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({ [name]: value})
  }

  render() {
  return(
    <div>
    <section class="section-background">
      <div class="container-forImage-other-pages">
        <img className='home-image-other-pages' src="https://appindianews.com/wp-content/uploads/2019/06/about-us.png" alt='' />
        <div className="text-block">
          <div class='container'>
            <h1 className='img-text'>Contact Us</h1>
          </div>
        </div>
      </div>
    </section>

    <ContactContainer />

    <FormContainer
    title='Were here to help'
    midText='Take your first step to better property management — Get in touch now.'
    handleChange={this.handleChange}
    handleSubmit={this.handleSubmit}
    sweetalert={this.sweetalert}
    {...this.state}
    />


    </div>
    )
  }
}




export default Contact;






// <section>
// <h1 class="sub-heading" style={{}}>What makes us different from other property buyers?</h1>
//   <div class='container' style={{marginTop: '150px', marginLeft: '300px'}}>
//     <div class="columns is-vcentered form-column">
//       <div class="put-to-top column is-8">
//         <div id="text-249-1-0-0" class="module module-text text-249-1-0-0  repeat  " data-id="27d402a">
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
//       </div>
//     </div>
//
//
//         <form class="column notification has-text-grey-light" method={this.state.method} onSubmit={this.handleSubmit} action={this.state.action} style={{marginTop: ''}}>
//                 <div class="field">
//                   <label class="label">First Name</label>
//                     <div class="control">
//                       <input value={this.state.firstName} name='firstName' onChange={this.handleChange} class="input" type="text" placeholder="First Name" required/>
//                     </div>
//                 </div>
//
//                 <div class="field">
//                   <label class="label">Last Name</label>
//                     <div class="control">
//                       <input value={this.state.lastName} name='lastName' onChange={this.handleChange} class="input" type="text" placeholder=" Surname" required/>
//                   </div>
//                 </div>
//
//       <div class="field">
//           <label class="label">Email</label>
//             <div class="has-icons-right">
//               <input name='email' value={this.state.email} onChange={this.handleChange} class="input" type="email" placeholder="Email input" required/>
//               <span class="icon is-small is-left">
//               <i class="fas fa-envelope"></i>
//               </span>
//               <span class="icon is-small is-right">
//               <i class="fas fa-exclamation-triangle"></i>
//               </span>
//           </div>
//       </div>
//
//       <div class="field">
//         <label class="label">Adress of Property</label>
//         <div class="control">
//           <input class="input" type="text" placeholder="Text input" required/>
//         </div>
//       </div>
//         <div class="field">
//           <label class="label">City/Town</label>
//           <div class="control">
//             <input class="input" type="text" placeholder="Text input" required/>
//           </div>
//         </div>
//         <div class="field">
//           <label class="label">Post Code</label>
//           <div class="control">
//             <input class="input" type="text" placeholder="Text input" required/>
//         </div>
//       </div>
//
//       <div class="field">
//         <label class="label">Subject</label>
//           <div class="control">
//             <div class="select">
//               <select required>
//                 <option>condition of property</option>
//                 <option>With options</option>
//                 <option>With options</option>
//                 <option>With options</option>
//                 <option>With options</option>
//
//               </select>
//             </div>
//           </div>
//       </div>
//
//
//
//       <div class="field">
//         <label class="label">Reasons for selling property</label>
//         <div class="control">
//           <textarea class="textarea" placeholder="Textarea" required></textarea>
//         </div>
//       </div>
//
//      <div class="field is-grouped">
//         <div class="control">
//           <button onClick='' class="button is-link">Submit</button>
//         </div>
//          <div class="control">
//             <button class="button is-link is-light">Cancel</button>
//          </div>
//     </div>
//
//
//
//       </form>
//     </div>
//     </div>
//     </section>
