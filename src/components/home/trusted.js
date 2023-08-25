import React, { useEffect } from 'react'

import logo from '../../json/logos.json';



const Trusted = () => {
  
  return (
    <>
    <section className='trusted_sec'>
      <div className='container'>
        <h1 className='sec_heading'>TRUSTED BY</h1>
        <div className='brand'>
          <ul>
          
            {
              logo.map((elm,ind)=>{
                return(
                  <li key={ind}>
                    <img src={require(`../../${elm.logo}`)} alt="error"/>
                  </li>
                )
              })
            }
          </ul>
        </div>
        
      </div>
    </section>

    </>
  )
}

export default Trusted
