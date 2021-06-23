import React from 'react';

function CardContainer(props) {

  return(

  <div className="columns">
    <div className="column">
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img src={props.imgUrl} alt='' />
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            <h2 className="title"></h2>
            <h5 className="subtitle"></h5>
            <h5 className="subtitle">{props.title}</h5>
            <hr />
            <p>{props.text}...</p>
            <br />
            <p>More</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)
}


export default CardContainer;
