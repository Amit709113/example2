import React from "react";
import {BsPersonCircle,BsDisplayFill} from 'react-icons/bs';
import { IoIosSchool } from "react-icons/io"
import { TbActivityHeartbeat } from "react-icons/tb";
import './vlog.css'
const Vlog=({title,description,logoKey})=>{
    console.log(logoKey);
    return (
        <div className="vlog">
            <div className="icons">
                <BsPersonCircle className={logoKey===2?"show":"hidden"}/>
                <IoIosSchool  className={logoKey===1?"show":"hidden"}/>
                <BsDisplayFill className={logoKey===0?"show":"hidden"}/>
                <TbActivityHeartbeat className={logoKey===3?"show":"hidden"} />
            </div>
            <div className="heading">
            <h2>{title}</h2>
            </div>
            <div className="paragraph">
                <p>{description} </p>
                
                </div>
            <div className="buttons">
                <span style={{width:"90px"}}><a href="#home">Learn More</a></span>
            </div>
        </div>
    )
}
export default Vlog;