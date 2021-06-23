import React from 'react';
import { Link } from 'react-router-dom';






function GetInTouch(props) {
  return (
    <section class="section is-small notification box" style={{textAlign: 'center', marginLeft: '-2%', marginRight: '-2%', opacity: '1' }} >
    <h1 class="title is-3 ">{props.title}</h1>
    <div class="container is-max-widescreen" >
    <p class="">{props.text}</p>
    <p class="">{props.sub}</p>
    <p class="">{props.number}</p>
    <br />

    <Link to='/contact'>
      <button class="button ">{props.button}</button>
    </Link>
    </div>



    </section>


  )
}


export default GetInTouch;
