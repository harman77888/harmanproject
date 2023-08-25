import React from "react";
import Card5 from "../../src/json/shoping_cart.json";
import light from "../../src/assets/cart/Img.png";
import clock from "../../src/assets/cart/Img 4.png";
import hanging from "../../src/assets/cart/Img 2.png";
import Star from "../../src/star 2.png";
import Arrow from "../../src/assets/cart/chevron-down.png";
import white from "../../src/assets/cart/Color.png";
import brown from "../../src/assets/cart/Color (1).png";
import silver from "../../src/assets/cart/Color (2).png";
const Cart = () => {
  return (
    <>
      <section className="cart0">
        <div className="container">
          <div className="shoping_cart">
            <div className="shoping_cart_text">
              <h1>SHOPING CART</h1>
              <p>THIS IS YOUR CART BASED ON WHAT YOU WANTED TO BY</p>
            </div>
            <div className="shoping_cart_input">
              <input type="range" className="input_range_shop" />
              <div className="range_text_img">
                {Card5.map((item, index) => {
                  return (
                    <div className="cart_sec3" key={index}>
                      <div className="cart_sec_info">
                        <img
                          src={require(`../../${item["card"]}`)}
                          className="lock"
                        />
                        <div className="img_text5">
                          <h1 className="shiping_text">{item["cardtitle"]}</h1>
                          <p className="shiping_para">{item["cardpara"]} </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="summary_sec">
        <div className="container">
          <div className="cart_summary">
            <div className="summar_sec">
              <div className="order_summary">
                <div className="standing_metal">
                  <div className="standing_metal_img">
                    <img src={clock} alt="error" className="metal_img" />
                  </div>
                  <div className="metal_text">
                    <h1 className="metal_heading">
                      MORDERN BLACK STANDING METAL LIGHT
                    </h1>
                    <div className="star">
                      <ul>
                        <li>
                          <img src={Star} />
                        </li>
                        <li>
                          <img src={Star} />
                        </li>
                        <li>
                          <img src={Star} />
                        </li>
                        <li>
                          <img src={Star} />
                        </li>
                        <li>
                          <img src={Star} />
                        </li>
                      </ul>
                    </div>
                    <button type="submit" className="metal_button">
                      Type: <span>Long</span> <img src={Arrow} alt="error" />
                    </button>
                    <div className="metal_color">
                      <img src={white} alt="error" className="white_color" />
                    </div>
                  </div>
                </div>
                <div className="order_quantity">
                  <button className="metal_button">
                    + Number : <span>1</span> -
                  </button>
                  <h1 className="price_cart">$235.41</h1>
                </div>

                <div className="standing_metal">
                  <div className="standing_metal_img">
                    <img src={hanging} alt="error" className="metal_img" />
                  </div>
                  <div className="metal_text">
                    <h1 className="metal_heading">
                      MORDERN BLACK HANGING LIGHT
                    </h1>
                    <div className="star">
                      <ul>
                        <li>
                          <img src={Star} />
                        </li>
                        <li>
                          <img src={Star} />
                        </li>
                        <li>
                          <img src={Star} />
                        </li>
                        <li>
                          <img src={Star} />
                        </li>
                        <li>
                          <img src={Star} />
                        </li>
                      </ul>
                    </div>
                    <button type="submit" className="metal_button">
                      Type: <span>Long</span> <img src={Arrow} alt="error" />
                    </button>
                    <div className="metal_color">
                      <img src={brown} alt="error" className="white_color" />
                    </div>
                  </div>
                </div>
                <div className="order_quantity">
                  <button className="metal_button">
                    + Number : <span>3</span> -
                  </button>
                  <h1 className="price_cart">$35.73</h1>
                </div>

                <div className="standing_metal">
                  <div className="standing_metal_img">
                    <img src={light} alt="error" className="metal_img" />
                  </div>
                  <div className="metal_text">
                    <h1 className="metal_heading">
                      MORDERN BLACK HANGING LIGHT
                    </h1>
                    <div className="star">
                      <ul>
                        <li>
                          <img src={Star} />
                        </li>
                        <li>
                          <img src={Star} />
                        </li>
                        <li>
                          <img src={Star} />
                        </li>
                        <li>
                          <img src={Star} />
                        </li>
                        <li>
                          <img src={Star} />
                        </li>
                      </ul>
                    </div>
                    <button type="submit" className="metal_button">
                      Type: <span>Circle</span> <img src={Arrow} alt="error" />
                    </button>
                    <div className="metal_color">
                      <img src={silver} alt="error" className="white_color" />
                    </div>
                  </div>
                </div>
                <div className="order_quantity">
                  <button className="metal_button">
                    + Number : <span>1</span> -
                  </button>
                  <h1 className="price_cart">$352.41</h1>
                </div>
              </div>
            </div>
            <div className="summary_text">
              <h1 className="order_head">ORDER SUMMARY</h1>
              <p className="order_para">
                Apply your monthly voucher to get more discount!
              </p>
              <div className="email_vouchar">
                <input
                  type="text"
                  placeholder="Your voucher code"
                  className="vouchar_input"
                />
              </div>
              <div className="vouchar_table">
                <ul className="discount_table">
                  <li className="price_detail">Price</li>
                  <li className="price_detail">Discount 10%</li>
                  <li className="price_detail">Total Price</li>
                </ul>
                <ul className="table_data">
                  <li className="total_amount">$1,725.00</li>
                  <li className="total_amount">-$125.00</li>
                  <li className="total_amount">
                    <span>$1,600.00</span>
                  </li>
                </ul>
              </div>
              <div className="detail_input">
                <input type="text"  className="review_input" placeholder="Write your notes here..."/>
              </div>
              <div className="amount_btn">
                <button className="amt_btn">PROCEED TO CHECKOUT</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Cart;
