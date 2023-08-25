import React from 'react'

import Lamp from "../../json/featured.json" 
const Featured = () => {
  return (
    <>
    <section className='featured_sec'>
        <div className="container">
            <div className="all">
                <h1 className='feature_heading'>FEATURED PRODUCTS</h1>
                <ul>
                    <li><span>ALL</span></li>
                    <li>ON SALE</li>
                    <li>SOFA</li>
                    <li>HANGING LIGHT</li>
                </ul>
            </div>
            <div className="sale">
              {
                Lamp.map((item,index)=>{

                    return(
                        
                        <div className='products_sec' key={index}>
                            <div className='product_info'>
                                <img src={require(`../../${item["lamp_img"]}`)} className='table' alt="error"/>
                                <div className="img_text1">
                                    <p>{item["lamp_para"]} </p>
                                    <img src={require(`../../${item["star_img"]}`)} alt="error"/>
                                    <h1>{item ["lamp_heading"]}</h1>
                                </div>
                            </div>                
                        

                        </div>
                    )
                })
              }
               </div>
          
            
        </div>
    </section>
      
    </>
  )
}

export default Featured
