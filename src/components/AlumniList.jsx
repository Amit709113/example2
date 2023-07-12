
import React from 'react'
// import AlumniInfo from './AlumniInfo'
import './AlumniList.css';
import AlumniData from './AlumniData';
 import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from 'react-icons/bs';
import { useState } from 'react';


const AlumniList = ({alumni}) => {
  const [slide,setSlide]=useState(0);
  console.log(slide);

  const setLeft=()=>{
    setSlide((slide==0)?alumni.length-1:slide-1);
  }
  const setRight=()=>{
    setSlide((slide+1)%alumni.length);
  }

  return (
    <div>
      
    <section className='alumni-info'>
        <div className='container'>
            <div className='row1'>
               <div className='testimonial_heading'> What our alumni say </div>
            </div>
            <div className="row2">
            
            {alumni.map((data,idx)=>{
                return(<>
                <BsArrowLeftCircleFill className='arrow arrow-left' onClick={setLeft} />
                  <AlumniData na={data.name} no={data.notes} im={data.imgSrc} de={data.degegnation} key={idx} className={slide===idx?"show":"hidden"}/>
                  <BsArrowRightCircleFill className='arrow arrow-right' onClick={setRight} /></>
                ) 
            })}
            <BsArrowRightCircleFill className='arrow arrow-right' onClick={setRight} />
            </div>
        </div>
    </section>
      
    </div>
  )
}

export default AlumniList
