import React from 'react'
import {BsPersonCircle,BsDisplayFill} from 'react-icons/bs';
import { IoIosSchool } from "react-icons/io"
import { TbActivityHeartbeat } from "react-icons/tb";

const Vlog = ({title,des,logoKey}) => {
  return (
    <>
        <div className="vlog">
            <div className="logo-content">
                <div className="vlog-logo">
                    <IoIosSchool  className={logoKey==0?"vlog-icon show":"hidden"} />
                    <BsPersonCircle  className={logoKey==1?"vlog-icon show":"hidden"} />
                    <BsDisplayFill  className={logoKey==2?"vlog-icon show":"hidden"} />
                    <TbActivityHeartbeat  className={logoKey==3?"vlog-icon show":"hidden"} />
                </div>
                <div className="title">
                    <h2>{title}</h2>
                </div>
            </div>
            <div className="vlog-content">
                <p className='description'>
                    {des}    
                </p>
                <button className="button">View More</button>
            </div>
        </div> 
    </>
  )
}

export default Vlog;
