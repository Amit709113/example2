import React from 'react'
import './Slide.css'

const Slide = ({name,deg,des,imgSrc}) => {
  
  return (
  <div className='main-body'>
    <div className='slide-container'>
      <div className="slide-content">
        <div className="card-wrapper">
          <div className="card">
            <div className="image-content">
              <span className="overlay"></span>
              <div className="card-image">
                <img src={imgSrc} alt="default"  className='card-img'/>
              </div>
            </div>
            <div className="card-content">
              <h2 className="name">{name}</h2>
              <p className="description">{des}</p>
              <button className="button">View More</button>
            </div>
          </div>

          <div className="card">
            <div className="image-content">
              <span className="overlay"></span>
              <div className="card-image">
                <img src={imgSrc} alt="default"  className='card-img'/>
              </div>
            </div>
            <div className="card-content">
              <h2 className="name">{name}</h2>
              <p className="description">{des}</p>
              <button className="button">View More</button>
            </div>
          </div>

          <div className="card">
            <div className="image-content">
              <span className="overlay"></span>
              <div className="card-image">
                <img src={imgSrc} alt="default"  className='card-img'/>
              </div>
            </div>
            <div className="card-content">
              <h2 className="name">{name}</h2>
              <p className="description">{des}</p>
              <button className="button">View More</button>
            </div>
          </div>

          <div className="card">
            <div className="image-content">
              <span className="overlay"></span>
              <div className="card-image">
                <img src={imgSrc} alt="default"  className='card-img'/>
              </div>
            </div>
            <div className="card-content">
              <h2 className="name">{name}</h2>
              <p className="description">{des}</p>
              <button className="button">View More</button>
            </div>
          </div>


        </div>
      </div>  
    </div>
  </div>
  )
}

export default Slide
