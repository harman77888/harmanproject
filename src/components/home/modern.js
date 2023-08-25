import React from 'react'
import Stars from "../../star 2.png"
import Lights from "../../Img 8.png"
const Modern = () => {
  return (
    <>
      <section className="modern">
        <div className="container">
            <div className='modern_sec'>
                <div className='left_work'>
                    <h1 className='light_heading'>MORDERN BRONZE HANGING LIGHT</h1>
                    <div className='star'>
                         <ul>
                            <li><img src={Stars} alt="error"/></li>
                            <li><img src={Stars} alt="error"/></li>
                            <li><img src={Stars} alt="error"/></li>
                            <li><img src={Stars} alt="error"/></li>
                            <li><img src={Stars} alt="error"/></li>
                         </ul>
                    </div>
                    <p><del>$3252.41</del> </p>
                    <h1 className='light_heading'>$2352.41 <span>-30%</span></h1>
                </div>
                <div className='center_work'>
                    <img src={Lights} alt="error" />
                </div>
                <div className="left_work right_work">
                    <p>Stunning lighting fixture that combines contemporary style with timeless elegance. Featuring a sleek and minimalist design, this hanging light is crafted from high-quality bronze and finished with a smooth and lustrous surface.</p>
                    <button type='button'>BUY NOW</button>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Modern
