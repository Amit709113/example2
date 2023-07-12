import React from 'react'
import Vlog from './Vlog'
import './VlogList.css'
const VlogList = ({data}) => {
  return (
    <div className='vlog-container'>
        {data.map((ele,idx)=>{
          return(
        
            <Vlog title={ele.title} description={ele.description} logoKey={idx} key={idx} />
            )
        })}
    </div>
  )

}

export default VlogList;
