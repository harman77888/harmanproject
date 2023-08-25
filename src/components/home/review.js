import React from "react";
import Reviewstar from "../../star 2.png";
import Person from "../../Img 9.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Review = () => {
  return (
    <>
      <section className="review_sec">
        <h1 className="customer_review">REVIEWD BY CUSTOMERS</h1>
        <p className="review_text">WHAT OUR CUSTOMERS THINK ABOUT US?</p>
        <div className="reviewd">
          <div className="container">
            {
              <Swiper
                spaceBetween={50}
                loop={true}
                autoplay={true}
                pagination={true}
                modules={[Autoplay, Pagination, Navigation]}
                navigation={true}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="us_sec">
                    <div className="review_img">
                      <div className="review_star">
                        <img src={Person} className="review_person" alt="error"/>
                        <ul>
                          <li>
                            <img src={Reviewstar}  alt="error"/>
                          </li>
                          <li>
                            <img src={Reviewstar}  alt="error"/>
                          </li>
                          <li>
                            <img src={Reviewstar} alt="error" />
                          </li>
                          <li>
                            <img src={Reviewstar}  alt="error"/>
                          </li>
                          <li>
                            <img src={Reviewstar} alt="error" />
                          </li>
                        </ul>
                      </div>
                      <p className="us_text">
                        The sofa is not only incredibly stylish, but also very
                        comfortable to lounge on. The clean lines and minimalist
                        design make it a perfect fit for my modern living room,
                        and the neutral color scheme allows me to easily
                        incorporate other accent pieces. The sofa is also very
                        sturdy and well-constructed, so I know it will last me
                        for years to come."
                      </p>
                      <h1>- Larry Jonhson -</h1>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="us_sec">
                    <div className="review_img">
                      <div className="review_star">
                        <img src={Person} className="review_person" alt="error"/>
                        <ul>
                          <li>
                            <img src={Reviewstar} alt="error" />
                          </li>
                          <li>
                            <img src={Reviewstar}  alt="error"/>
                          </li>
                          <li>
                            <img src={Reviewstar} alt="error" />
                          </li>
                          <li>
                            <img src={Reviewstar}  alt="error"/>
                          </li>
                          <li>
                            <img src={Reviewstar}  alt="error"/>
                          </li>
                        </ul>
                      </div>
                      <p className="us_text">
                        The sofa is not only incredibly stylish, but also very
                        comfortable to lounge on. The clean lines and minimalist
                        design make it a perfect fit for my modern living room,
                        and the neutral color scheme allows me to easily
                        incorporate other accent pieces. The sofa is also very
                        sturdy and well-constructed, so I know it will last me
                        for years to come."
                      </p>
                      <h1>- Larry Jonhson -</h1>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="us_sec">
                    <div className="review_img">
                      <div className="review_star">
                        <img src={Person} className="review_person" alt="error"/>
                        <ul>
                          <li>
                            <img src={Reviewstar} alt="error"/>
                          </li>
                          <li>
                            <img src={Reviewstar} alt="error"/>
                          </li>
                          <li>
                            <img src={Reviewstar} alt="error"/>
                          </li>
                          <li>
                            <img src={Reviewstar} alt="error"/>
                          </li>
                          <li>
                            <img src={Reviewstar} alt="error"/>
                          </li>
                        </ul>
                      </div>
                      <p className="us_text">
                        The sofa is not only incredibly stylish, but also very
                        comfortable to lounge on. The clean lines and minimalist
                        design make it a perfect fit for my modern living room,
                        and the neutral color scheme allows me to easily
                        incorporate other accent pieces. The sofa is also very
                        sturdy and well-constructed, so I know it will last me
                        for years to come."
                      </p>
                      <h1>- Larry Jonhson -</h1>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="us_sec">
                    <div className="review_img">
                      <div className="review_star">
                        <img src={Person} className="review_person" alt="error"/>
                        <ul>
                          <li>
                            <img src={Reviewstar} alt="error"/>
                          </li>
                          <li>
                            <img src={Reviewstar} alt="error"/>
                          </li>
                          <li>
                            <img src={Reviewstar} alt="error"/>
                          </li>
                          <li>
                            <img src={Reviewstar} alt="error"/>
                          </li>
                          <li>
                            <img src={Reviewstar} alt="error"/>
                          </li>
                        </ul>
                      </div>
                      <p className="us_text">
                        The sofa is not only incredibly stylish, but also very
                        comfortable to lounge on. The clean lines and minimalist
                        design make it a perfect fit for my modern living room,
                        and the neutral color scheme allows me to easily
                        incorporate other accent pieces. The sofa is also very
                        sturdy and well-constructed, so I know it will last me
                        for years to come."
                      </p>
                      <h1>- Larry Jonhson -</h1>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="us_sec">
                    <div className="review_img">
                      <div className="review_star">
                        <img src={Person} className="review_person" alt="error" />
                        <ul>
                          <li>
                            <img src={Reviewstar}  alt="error"/>
                          </li>
                          <li>
                            <img src={Reviewstar}  alt="error"/>
                          </li>
                          <li>
                            <img src={Reviewstar}  alt="error"/>
                          </li>
                          <li>
                            <img src={Reviewstar} alt="error" />
                          </li>
                          <li>
                            <img src={Reviewstar}  alt="error"/>
                          </li>
                        </ul>
                      </div>
                      <p className="us_text">
                        The sofa is not only incredibly stylish, but also very
                        comfortable to lounge on. The clean lines and minimalist
                        design make it a perfect fit for my modern living room,
                        and the neutral color scheme allows me to easily
                        incorporate other accent pieces. The sofa is also very
                        sturdy and well-constructed, so I know it will last me
                        for years to come."
                      </p>
                      <h1>- Larry Jonhson -</h1>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="us_sec">
                    <div className="review_img">
                      <div className="review_star">
                        <img src={Person} className="review_person" alt="error"/>
                        <ul>
                          <li>
                            <img src={Reviewstar} />
                          </li>
                          <li>
                            <img src={Reviewstar} />
                          </li>
                          <li>
                            <img src={Reviewstar} />
                          </li>
                          <li>
                            <img src={Reviewstar} />
                          </li>
                          <li>
                            <img src={Reviewstar} />
                          </li>
                        </ul>
                      </div>
                      <p className="us_text">
                        The sofa is not only incredibly stylish, but also very
                        comfortable to lounge on. The clean lines and minimalist
                        design make it a perfect fit for my modern living room,
                        and the neutral color scheme allows me to easily
                        incorporate other accent pieces. The sofa is also very
                        sturdy and well-constructed, so I know it will last me
                        for years to come."
                      </p>
                      <h1>- Larry Jonhson -</h1>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default Review;
