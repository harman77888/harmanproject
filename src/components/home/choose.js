import React from 'react'
import Earth from "../../planet-earth 1.png"
import Packagebox from "../../package-box 1.png"
import Phone from "../../phone 1.png"
import Mail from "../../email 1.png"
import Credit from "../../credit-card 1.png"
import Badge from "../../badge (1) 1.png"
const Choose = () => {
  return (
    <>
      <section className="choose_us">
        <div className="container">
            <div className="us_sec">
                <h1 className='choose_heading'>WHY CHOOSE US?</h1>
                <div className='why_sec'>
                    <div className='img_text2'>
                        <img src={Earth} alt="error" />
                        <div className="text_22">
                            <h1>GLOBAL DELIVERY</h1>
                            <p className='experience'>Experience Hassle-Free Shipping and Seamless Global Connectivity with Our Trustworthy and Efficient Delivery Service, Bringing the World to Your Fingertips!</p>
                        </div>
                    </div>
                    <div className='img_text2'>
                        <img src={Packagebox} alt="error" />
                        <div className="text_22">
                            <h1>FREE SHIPPING</h1>
                            <p className='experience'>Shop to Your Heart's Content Without Worrying About Shipping Costs: Our Free Shipping Service Delivers Your Purchases with a Smile, Straight to Your Doorstep!</p>
                        </div>
                    </div>
                    <div className='img_text2'>
                        <img src={Phone} alt="error"/>
                        <div className="text_22">
                            <h1>24/7 SUPPORTING</h1>
                            <p className='experience'>Shop with Confidence Anytime, Anywhere: Our Free Shipping Service Comes with 24/7 Support to Ensure Your Packages Arrive Safely and On Time!</p>
                        </div>
                    </div>
                </div>
                <div className='why_sec'>
                    <div className='img_text2' >
                        <img src={Mail} alt="error"/>
                        <div className="text_22">
                            <h1>DAILY EMAIL</h1>
                            <p>Stay Up-to-Date with Your Deliveries: Enjoy the Convenience of Daily Email Updates with Our Free Shipping Service, Making Your Online Shopping Experience Even More Enjoyable!</p>
                        </div>
                    </div>
                    <div className='img_text2'>
                        <img src={Credit} alt="error"/>
                        <div className="text_22">
                            <h1>EASY PAYMENT</h1>
                            <p>Shop and Pay with Ease: Our Free Shipping Service Not Only Delivers Your Packages for Free, but Also Offers Easy Payment Options, Making Your Shopping Experience a Breeze!</p>
                        </div>
                    </div>
                    <div className='img_text2'>
                        <img src={Badge} alt="error"/>
                        <div className="text_22">
                            <h1>MONTHLY  VOUCHER</h1>
                            <p>More Than Just Free Shipping: Our Service Rewards Your Loyalty with Monthly Vouchers, Giving You More Reasons to Shop and Save on Your Favorite Products!</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </section>
    </>
  )
}

export default Choose
