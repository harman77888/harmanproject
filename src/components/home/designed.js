import React from 'react'
import Left from "../../chevron-right 2.png"
import Sofa from "../../Img 10.png"
import Chair from "../../Img 11.png"
import Light from "../../Group 1.png"
const Designed = () => {
  return (
    <>
      <section className='designed'>
        <div className="container">
            <div className='designed_sec'>
             
                <div className='light'>
                    <div className="light_img">
                       <img src={Light} alt="error"/>
                
                    </div>
                    <h1 className='hanging_heading main_des'>HANGING LIGHT</h1>
                    <p className='designed_text'>Upgrade your space with our modern hanging light, featuring sleek lines, energy-efficient LED lighting, and adjustable height.</p>
                    <a href="#" className='right_arrow '>View more <img src={Left} alt="error"/></a>
                    
                </div>
                <div className='sofa'>
                    <h1 className='hanging_heading sofa_11'>DESIGNED SOFA</h1>
                    <p className='designed_text designed_text1'>Introducing our newest sofa, the perfect combination of style and comfort, designed to elevate your living space and provide ultimate relaxation.</p>
                    <a href="#" className='right_arrow right_66'> View more <img src={Left} alt="error"/></a>
                    <div className="img_sofa">
                      <img src={Sofa} alt="error"/>
                    </div>
                </div>
                <div className='chair'>
                    <h1 className='hanging_heading'>NOVA CHAIR</h1>
                    <p className='designed_text'>a stylish and comfortable addition to any room, with its sleek design and plush cushions creating the ultimate seating experience.</p>
                    <a href="#" className='right_arrow'>View more  <img src={Left} alt="error"/></a>
                    <div className="img_chair">
                      <img src={Chair} alt="error" />
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Designed
