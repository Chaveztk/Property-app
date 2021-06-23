import React from 'react';
import fire from '../../components/config/fire';


class Login extends React.Component{
  constructor(){
    super();
    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this)
    this.signup = this.signUp.bind(this)
  }

    login(e){
      e.preventDefault();
      fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=> {
        console.log(u)
      }).catch((err)=> {
        console.log(err)
      })
    }


    handleChange(event) {
      const {name, value} = event.target
      this.setState({ [name]: value})
    }

    signUp(e){
      e.preventDefault()
      fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=> {
        console.log(u)
      }).catch((err)=> {
        console.log(err)
      })
    }


  render() {
    return(
      <div>
        <section className="hero ">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-black">Login</h3>
              <hr className="login-hr" />
              <p className="subtitle has-text-black">Please login to proceed.</p>
            <div className="box">
            <figure className="avatar">
              <img src="" alt=''/>
            </figure>
            <form>
              <div className="field">
                <div className="control">
                  <input
                   className="input is-medium"
                   name='email'
                   type="email"
                   placeholder="Your Email"
                   autoFocus=""
                   value={this.state.email}
                   onChange={this.handleChange}/>
                   </div>
                </div>

                <div className="field">
                  <div className="control">
                    <input
                     className="input is-medium"
                     name='password'
                     type="password"
                     placeholder="Your Password"
                     value={this.state.password}
                     onChange={this.handleChange}/>
                     </div>
                  </div>
                <div className="field">
                  <label className="checkbox">
                  <input type="checkbox" />Remember me</label>
                </div>
                <button onClick={this.state.login} className="button is-block is-info is-medium is-fullwidth">Login <i className="fa fa-sign-in" aria-hidden="true"></i></button>
                <br />
                <button onClick={this.state.signUp} className="button is-block is-info is-medium is-fullwidth">Sign Up <i className="fa fa-sign-in" aria-hidden="true" ></i></button>
              </form>
                  </div>
                  <p className="has-text-grey">
                      <a href="../" value={this.state.signUp}>Sign Up</a> &nbsp;·&nbsp;
                      <a href="../">Forgot Password</a> &nbsp;·&nbsp;
                      <a href="../">Need Help?</a>
                  </p>
              </div>
          </div>
      </div>
  </section>

      </div>
    )
  }
}





export default Login;
