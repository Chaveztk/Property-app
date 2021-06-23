import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Property extends Component{
  constructor() {
    super();
    this.state = {
      randUser: [],
      loading: false
    }
  }

  componentDidMount() {
    this.setState( {loading: true})
    fetch('https://randomuser.me/api/?results=10')
      .then(responce => responce.json())
      .then(responce => {
        const data = responce.results
        console.log(data);
        this.setState({
          loading: false,
          randUser: data
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }

// CHECKPOINT


  render() {
        // const text = this.state.loading ? 'Loading...' : this.state.randUser

      // const names = this.state.randUser.map((data, index) =>
      // <div key={index} className='images'> <img src={data.picture.large} alt='' /> <p>{data.name.first} {data.name.last}</p> </div>)

    return(
      <div>
        {this.state.loading ? <h1 className='loader'></h1> : this.state.randUser.map((data, index) =>
        <Link to={`/show/${data.id}`}>
          <div key={index} className='card'>
          <div className="card-image">
            <img src={data.picture.large} alt='' />
            </div>
            <div className='card-content'>
              <div className="media">
                <div className="media-left">
                  <div className='media-content'>
                    <p className='title is-5'>
                    {data.name.first} {data.name.last}
                    </p>
                    <p className="subtitle is-6">{data.email}</p>
                    <div className='content'></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          </Link>)}
      </div>
    )
  }
}
export default Property;






// <div>
// {this.state.randUser.map((data, index) =>
// <div key={index} className="column is-4 modal-button" data-target="modal-image">
//   <div className="card is-shady">
//     <div className="card-image">
//       <figure className="image is-4by3">
//       <img src={data.picture.large} alt='' />
//
//       </figure>
//     </div>
//     <div className="card-content">
//       <div className="content">
//       <p>
//       {data.name.first} {data.name.last}
//       </p>
//         <span className="button is-link modal-button" data-target="modal-image">Image modal</span>
//       </div>
//     </div>
//   </div>
// </div>)}
// </div>
