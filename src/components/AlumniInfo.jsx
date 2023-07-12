import React from 'react'
// import "./AlumniInfo.css"
import AlumniData from './AlumniData'
// import imgSrc from "../Images/seema.jpg"; 

const AlumniInfo = ({name,notes,degegnation,imgSrc}) => {
  return (
    // <section className='alumni-info'>
    //     <div className='container'>
    //         <div className='row1'>
    //           {/* What our alumni says */}
    //           <div className='testimonial_heading'> What our alumni say </div>
    //         </div>
            <div className="row2">
                {/* <div className="alumni-data">
                  <div className='alumni-notes'>{notes}</div>
                  <img className="alumni-img"src={imgSrc}alt="alumni"/>
                  <div className='alumni-name'>{name}</div>
                  <div className='alumni-deg'>{degegnation}</div>
                </div> */}

                <AlumniData na={name} no={notes} im={imgSrc} de={degegnation}/>
                {/* <AlumniData na={name} no={notes} im={imgSrc} de={degegnation}/> */}
            </div>
    //     </div>
      
    // </section>
  )
}

export default AlumniInfo
