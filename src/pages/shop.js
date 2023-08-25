import React, { useState, useEffect, Fragment } from "react";
import Banner from "../components/home/banner";
import Minus from "../../src/assets/shop/minus.svg";
import Plus from "../../src/assets/shop/plus.svg";
import Line from "../../src/assets/shop/Rectangle 2.png";
import Down from "../../src/assets/shop/chevron-down.png";
import Menu from "../../src/assets/shop/menu.png";
import Grid from "../../src/assets/shop/view-grid.png";

import Star from "../../src/star 2.png";
import Lights from "../../src/Img 8.png";
import Right from "../../src/chevron-right 2.png";
import Left from "../../src/chevron-left.png";
import Productcard from "../components/snippts/productcard";


const Shop = () => {
  let [counter, setCounter] = useState(0);
  const [active, setactive] = useState(0);
  const [Product, setProducts] = useState([]);

  useEffect( () =>{
    async function fetchData() {
      // You can await here
      await fetch("http://localhost:3000/product/getData").then(res=> res.json())
      .then((result)=>{
   
       setProducts(result)
  
      })
      // ...
    }
    

  

    document.title = "counter "+counter
    console.log("counter ",counter)

    return ()=>{
      fetchData();
    }
  },[counter])


  //  useEffect(()=>{

  //  let product =  fetch('https://dummyjson.com/products/')
  // .then(res => res.json())
  // .then(json => console.log(json))

  //  },[])

  let clickme = (index) => {
    // active.push(index)
    // console.log(active)
    setactive(index);
  };

  return (
    <>
      <section className="shop">
        <Banner />
        <div className="container">
          <div className="shop_byy">
            <div className="category">
              <h2 className="shop_headimg pad_shop">
                CATEGORY <img src={Line} className="line_img" />
              </h2>
              <h2
                className="shop_headimg-1 shop_plus"
                onClick={() => clickme(0)}
              >
                FUNITURE <img src={Minus} />
              </h2>
              <div className="desk">
                <ul
                  className={`dfghgdf ${active == 0 ? "shownav" : "hidenav"}`}
                >
                  <li className="couch">Chair</li>
                  <li className="lamp_2">Sofa</li>
                  <li className="lamp_2">Couch</li>
                  <li className="lamp_2">Desk</li>
                  <li className="lamp_2">Lamp</li>
                </ul>
                <h2
                  className="shop_headimg shop_pad shop_plus"
                  onClick={() => clickme(1)}
                >
                  SHIPPING <img src={Plus} className="plus_img" />
                </h2>
                <ul
                  className={`dfghgdf ${active == 1 ? "shownav" : "hidenav"}`}
                >
                  <li className="couch">Chair</li>
                  <li className="lamp_2">Sofa</li>
                  <li className="lamp_2">Couch</li>
                  <li className="lamp_2">Desk</li>
                  <li className="lamp_2">Lamp</li>
                </ul>

                <h2
                  className="shop_headimg shop_pad shop_plus"
                  onClick={() => clickme(2)}
                >
                  ALL PRODUCT <img src={Plus} className="plus_img" />
                </h2>
                <ul
                  className={`dfghgdf ${active == 2 ? "shownav" : "hidenav"}`}
                >
                  <li className="couch">Chair</li>
                  <li className="lamp_2">Sofa</li>
                  <li className="lamp_2">Couch</li>
                  <li className="lamp_2">Desk</li>
                  <li className="lamp_2">Lamp</li>
                </ul>
              </div>

              <div className="materials">
                <h2 className="shop_headimg pad_shop">
                  SHOP BY <img src={Line} className="line_img" />
                </h2>
                <h2 className="shop_headimg-1 shop_plus">
                  MATERIALS <img src={Minus} />
                </h2>
                <div className="desk">
                  <ul>
                    <li className="couch">
                      Bronze <span>(08)</span>
                    </li>
                    <li className="lamp_2">
                      Oak wood <span>(12)</span>
                    </li>
                    <li className="lamp_2">
                      Stainless metal <span>(36)</span>
                    </li>
                    <li className="lamp_2">
                      Titanium <span>(04)</span>
                    </li>
                    <li className="lamp_2">
                      Alloy <span>(08)</span>
                    </li>
                    <li className="lamp_2">
                      Ceramic <span>(17)</span>
                    </li>
                  </ul>
                  <h2 className="shop_headimg shop_pad shop_plus">
                    PRICE <img src={Minus} className="plus_img" />
                  </h2>
                  <div className="input_range">
                    <input type="range" />

                    <div className="cta">
                      <button className="dollar" type="button">
                        $0 - $2000
                      </button>
                      <button className="apply_now" type="button">
                        Apply
                      </button>
                    </div>
                  </div>
                  <div className="compare">
                    <h2 className="shop_headimg shop_pad shop_plus">
                      ALL PRODUCT <img src={Plus} className="plus_img" />
                    </h2>
                    <h2 className="shop_headimg shop_pad shop_plus">
                      SIZE <img src={Plus} className="plus_img" />
                    </h2>
                    <div className="size_ul">
                      <ul>
                        <li className="couch">
                          S <span>(08)</span>
                        </li>
                        <li className="lamp_2">
                          M <span>(12)</span>
                        </li>
                        <li className="lamp_2">
                          L <span>(36)</span>
                        </li>
                      </ul>
                    </div>
                    <h2 className="shop_headimg shop_pad shop_plus">
                      COMPARE <img src={Plus} className="plus_img" />
                    </h2>
                    <p className="compare_para">
                      Lorem ipsum dolor sit amet consectetur. Bibendum iaculis
                      velit dolor id.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="Sale">
              <h2 className="shop_headimg pad_shop">
                RESULT FOR “ FURNITURE ” <img src={Line} className="line_img" />
              </h2>
              <div className="cta2">
                <button type="button" className="sale_cta">
                  ON SALE{" "}
                </button>

                <button type="button" className="down_2">
                  Short by: <span>Default</span> <img src={Down} />
                </button>
                <div className="">
                  <button type="button" className="cta_5">
                    <img src={Menu} />
                  </button>

                  <button className="cta_5">
                    <img src={Grid} />
                  </button>
                </div>
                <div className="cta_text">
                  <p>SHOWED 1 - 9 OF 30 PRODUCTS</p>
                </div>
              </div>
              <div className="product_grid">
                {Product.map((item, index) => {
                  return (
                      <Fragment key={index}>
                        <Productcard item={item} />
                      </Fragment>
                  );
                })}
              </div>

              <div className="modern_sec modern_sec2">
                <div className="left_work">
                  <h1 className="light_heading">
                    MORDERN BRONZE HANGING LIGHT
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
                  <p>
                    <del>$3252.41</del>{" "}
                  </p>
                  <h1 className="light_heading">
                    $2352.41 <span>-30%</span>
                  </h1>
                </div>
                <div className="center_work">
                  <img src={Lights} />
                </div>
              </div>
              <div className="number2">
                <ul>
                  <li className="col_black">
                    <button>01</button>
                  </li>
                  <li>
                    <button>02</button>
                  </li>
                  <li>
                    <button>03</button>
                  </li>
                  <li>
                    <button>
                      {" "}
                      <img src={Left} />
                    </button>
                  </li>
                  <li className="col_black">
                    <button>
                      {" "}
                      <img src={Right} />
                    </button>
                  </li>
                </ul>
                <div className="number_para">
                  <p>SHOWED 1 - 9 OF 30 PRODUCTS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
