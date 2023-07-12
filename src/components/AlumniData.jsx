import React from 'react';
 const AlumniData = ({na,no,de,im}) =>{
    return (
        <>
        <div className="alumni-data">
            <div className='alumni-notes'>{no}</div>
            <div className='alumni-pdata'>
                <img className="alumni-img"src={im}alt="alumni"/>
                <div className='alumni-name'>{na}</div>
                <div className='alumni-deg'>{de}</div>
            </div>
        </div>
        </>
    )
  }

export default AlumniData
