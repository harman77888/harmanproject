import React from 'react'
import Base from "../../src/assets/product/Base.png"
import Sofa from "../../src/assets/product/Img.png"
const ProductDetail = () => {
  return (
    <>
    <section className='produt_detail'>
    <div className="container">
    <div className="product_detail_1">
      
      <div className="product_detail_img">
        <img src={Base} alt=''/>
        <img src={Sofa} alt=''/>
      </div>
    </div>
    </div>
    </section>
    </>
  )
}

export default ProductDetail