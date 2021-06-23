import React from 'react';



function LoginContainer(props) {
  return(
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
               type="email"
               placeholder="Your Email"
               autoFocus=""
               value={props.email}
               onChange={props.handleChange}/>
               </div>
            </div>

            <div className="field">
              <div className="control">
                <input
                 className="input is-medium"
                 type="password"
                 placeholder="Your Password"
                 value={props.password}
                 onChange={props.handleChange}/>
                 </div>
              </div>
            <div className="field">
              <label className="checkbox">
              <input type="checkbox" />Remember me</label>
            </div>
            <button className="button is-block is-info is-medium is-fullwidth">Login <i className="fa fa-sign-in" aria-hidden="true" value={props.login}></i></button>
            <br />
            <button className="button is-block is-info is-medium is-fullwidth">Sign Up <i className="fa fa-sign-in" aria-hidden="true" value={props.signup}></i></button>
          </form>
              </div>
              <p className="has-text-grey">
                  <a href="../" value={props.signUp}>Sign Up</a> &nbsp;·&nbsp;
                  <a href="../">Forgot Password</a> &nbsp;·&nbsp;
                  <a href="../">Need Help?</a>
              </p>
          </div>
      </div>
  </div>
</section>
  )
}

export default LoginContainer;
