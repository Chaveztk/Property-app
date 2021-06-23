 import React from 'react';


function HomeSection(props) {

    return (


      <section class="section-background">
        <div class="container-forImage-other-pages">
          <img className='home-image-other-pages' src={props.imgUrl} alt='' />
          <div className="text-block">
            <div class='container'>
              <h1 className='img-text'>{props.text}</h1>
              <h1 class='mid-text' style={{paddingTop: '50px'}}>{props.midText}</h1>
            </div>
          </div>
        </div>
      </section>
    )
}



export default HomeSection;

// <section class="section is-medium">
//   <div class="container-forImage-other-pages">
//     <img className='home-image-other-pages' src={props.imgUrl} alt='' />
//     <div className="text-block">
//       <div class='container'>
//         <h1 className='img-text'>{props.text}</h1>
//         <h1 class='mid-text' style={{paddingTop: '50px'}}>{props.midText}</h1>
//       </div>
//     </div>
//   </div>
// </section>
