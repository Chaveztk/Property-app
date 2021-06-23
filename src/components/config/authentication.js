// import React from 'react';
// // import fire from './component/config/fire';
//
//
// class Authentication extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       name: '',
//       action: '',
//       method: 'POST',
//       telephone: '',
//       email: '',
//       text: '',
//
//     }
//     this.handleChange = this.handleChange.bind(this)
//
//   }
//
//
//   handleChange(event) {
//     const {name, value} = event.target
//     this.setState({ [name]: value})
//   }
//
//   render() {
//     return(
//       <div>
//       <form>
//         <div className="field">
//           <div className="control">
//             <input
//              className="input is-medium"
//              type="email"
//              placeholder="Your Email"
//              value={this.state.email}
//              onChange={this.handleChange}/>
//              </div>
//           </div>
//
//           <div className="field">
//             <div className="control">
//               <input
//                className="input is-medium"
//                type="password"
//                placeholder="Your Password"
//                value={this.state.password}
//                onChange={this.handleChange}/>
//                </div>
//             </div>
//           <div className="field">
//             <label className="checkbox">
//             <input type="checkbox" />Remember me</label>
//           </div>
//           <button className="button is-block is-info is-medium is-fullwidth">Login <i className="fa fa-sign-in" aria-hidden="true" value={this.state.login}></i></button>
//           <br />
//           <button className="button is-block is-info is-medium is-fullwidth">Sign Up <i className="fa fa-sign-in" aria-hidden="true" value={this.state.signup}></i></button>
//         </form>
//       </div>
//     )
//   }
// }
//
//
// export default Authentication;
