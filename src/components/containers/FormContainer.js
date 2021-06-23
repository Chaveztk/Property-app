import React from 'react';



function FormContainer(props) {
  return(
    <div class="column" style={{paddingTop: '50px', paddingLeft: '66px', paddingRight: '110px'}}>
      <div class="columns is-mobile">
        <div class="column is-three-quarter">
          <div className="hero-body">
          <div className="container has-text-centered">
          <div className="columns is-8 is-variable ">
            <div className="column is-two-thirds has-text-left" style={{marginLeft: '60px'}}>
              <h1 className="title is-2" style={{color: '#7B0100'}}>{props.title}</h1>
              <p className="is-size-5">{props.midText}</p>
              <p className="is-size-5">{props.subText}</p>
              <p className="is-size-5">{props.underText}</p>

            </div>
          </div>
        </div>
      </div>

    </div>

        <form class="column is-half" onSubmit={props.handleSubmit} method={props.method} action={props.action} >
          <div className="column has-text-left">
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input className="input is-medium"
                  type="text"
                  placeholder='Full Name'
                  onChange={props.handleChange}
                  value={props.name}
                  name='name'
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input className="input is-medium"
                  name='email'
                  type="email"
                  placeholder='Email'
                  value={props.email}
                  onChange={props.handleChange}
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Telephone</label>
              <div className="control">
                <input className="input is-medium"
                  type="number"
                  placeholder='Telephone'
                  onChange={props.handleChange}
                  name='telephone'
                  value={props.telephone}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <textarea className="textarea is-medium"
                  type='text'
                  name='text'
                  placeholder='Enter Message'
                  onChange={props.handleChange}
                  value={props.text}
                  required
                />
              </div>
            </div>
            <div className="control">
              <button className="button is-link has-text-weight-medium is-medium" style={{ backgroundColor: '#7B0100' }}>Send Message</button>
            </div>
          </div>
        </form>

      </div>
    </div>
  )
}


export default FormContainer;
