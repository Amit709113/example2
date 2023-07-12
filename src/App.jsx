import { useState } from 'react'
import './App.css'

// import AlumniList from './components/AlumniList'
// import Test from './components/Test'
// import artical from './data/AlumniData.json'
import imgdata from './data/carouselData.json';
import Carousel from './components/Carousel'
//import Slide from './components/slideExample/Slide';
// import FlexBoxExample from './components/slideExample/FlexBoxExample';

import artical from './data/vlogData.json';
import VlogList from './components/slideExample/VlogList';
import {MdOutlinePsychology} from 'react-icons/md'
import { TbActivityHeartbeat } from "react-icons/tb";
// import {TbActivityHeartbeat  } from 'react-icons/tb';
function App() {

  return (
    <>

      {/* <p> hello react</p> */}
      <Carousel data={imgdata.slides}/>
      {/* <AlumniList alumni={artical.feedback}/> */}
      {/* <Test alumni={artical.feedback}/> */}
      {/* <Slide name={artical.feedback[2].name} deg={artical.feedback[2].degegnation} des={artical.feedback[2].notes}  imgSrc={artical.feedback[2].imgSrc}/> */}
      {/* <FlexBoxExample /> */}
      {/* <VlogList data={artical.articals} /> */}
    </>
  )
}

export default App
