import React from "react";
import "./ItemBox.css";
import { Button } from "@mui/material";

function ItemBox({
  ItemName,
  Description,
  Cal,
  Type,
  image,
  price,
  handleItemCountChange,
}) {
  const handleButtonClick = () => {
    const inputCount = prompt("Enter the seat number");
    if (inputCount) {
      handleItemCountChange(inputCount, ItemName, price);
    }
  };

  return (
    <div className="itembox">
      <div>
        <img src={image} alt="" />
      </div>
      <div className="itembox_text">
        <div className="item_name">
          {ItemName}
          <br />
          {Description}
        </div>
        <div>
          Calories: {Cal} <br /> Type: {Type} <br /> Select drinks:
        </div>
        <div className="itembox_text_bottom">
          <div className="select_drink">
            <img src="/456.bmp" alt="" />
            <img src="/789.bmp" alt="" />
            <img src="/1011.bmp" alt="" />
          </div>
          <Button className="item_btn" onClick={handleButtonClick}>
            {price}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ItemBox;
