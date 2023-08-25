import React from "react";

const Productcard = (item) => {
    
  return (
    <>
      <div className="sale_56" >
        <div className="product_info">
          <img src={`http://localhost:3000/static/${item.item.image}`}  className="table"  />
          <div className="img_text1">
            
            <p>{item.description} </p>
            <img src={require(`../../Star.png`)} />
            <h1>{item.item.title}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productcard;
