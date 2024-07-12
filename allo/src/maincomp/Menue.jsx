import React, { useContext } from "react";
import "./Menue.css";
import ItemBox from "./subcomp/ItemBox";

import { Ordersdatacontext } from "./Contexts/Ordersdatacontext";

function Menue() {
  const { menuedata, handleItemCountChange } = useContext(Ordersdatacontext);

  return (
    <div className="menue">
      {menuedata.map((item, index) => (
        <ItemBox
          key={index}
          ItemName={item.ItemName}
          Description={item.Description}
          Cal={item.Cal}
          Type={item.Type}
          image={item.image}
          price={item.price}
          handleItemCountChange={handleItemCountChange}
        />
      ))}
    </div>
  );
}

export default Menue;
