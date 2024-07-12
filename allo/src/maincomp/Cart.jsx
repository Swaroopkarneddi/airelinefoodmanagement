import React from "react";
import "./Cart.css";
import DeleteIcon from "@mui/icons-material/Delete";

function Cart({ oredrdetails, totalamount, handleDelete }) {
  return (
    <>
      <h2 className="Cart_h2">+ Select Meal</h2>
      <div className="cart">
        <div className="passdet">
          {oredrdetails.map((item, index) => (
            <div key={index}>
              <div className="passdet_dat">
                <div>{item.PassingerName}</div>
                <div>{item.itname}</div>
              </div>
              <div className="passdet_del">
                <button onClick={() => handleDelete(index, item.price)}>
                  <DeleteIcon />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="cart_price">
          <div>total amount :</div>
          <div>{totalamount}</div>
        </div>
      </div>
    </>
  );
}

export default Cart;
