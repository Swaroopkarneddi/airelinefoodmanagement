import React, { useState, useEffect } from "react";
import "./Order.css";
import Menue from "./Menue.jsx";
import Cart from "./Cart.jsx";
import Tag from "./Tag.jsx";
import axios from "axios";
import { Ordersdatacontext } from "./Contexts/Ordersdatacontext.jsx";

function Order({ musername }) {
  const [menuedata, setmenuedata] = useState([]);
  const [orderdet, setorderdet] = useState([]);
  const [totalamount, settotalamount] = useState(0);
  const [filter, setFilter] = useState("All");

  const fetchmenuedata = async () => {
    try {
      const response = await axios.get("/getitems");
      if (response.data.error) {
        console.log(response.data.error);
      } else {
        setmenuedata(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchmenuedata();
  }, []);

  const fetchdata = async (seatNumber, ItemName, price) => {
    try {
      const response = await axios.get(`/getpassingerbyseat/${seatNumber}`);
      if (response.data.error) {
        console.log(response.data.error);
      } else {
        settotalamount((totalamount) => totalamount + price);
        const temp = {
          PassingerName: response.data.PassingerName,
          itname: ItemName,
          price: price,
        };
        setorderdet((prevorderdet) => [...prevorderdet, temp]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleButtonClick = (seatNumber, ItemName, price) => {
    fetchdata(seatNumber, ItemName, price);
  };

  const handleItemCountChange = (count, ItemName, price) => {
    handleButtonClick(count, ItemName, price);
  };

  const handleDelete = (index, price) => {
    setorderdet((prevorderdet) => prevorderdet.filter((_, i) => i !== index));
    settotalamount((prevTotal) => prevTotal - price);
  };

  const filteredMenuData =
    filter === "All"
      ? menuedata
      : menuedata.filter((item) => item.Type.includes(filter));

  return (
    <>
      <Ordersdatacontext.Provider
        value={{
          menuedata: filteredMenuData,
          setmenuedata,
          handleItemCountChange,
        }}
      >
        <div>Welcome {musername}</div>
        <div className="order">
          <div className="order_list">
            <Tag setFilter={setFilter} />
            <Menue />
          </div>
          <div className="order_summary">
            <Cart
              oredrdetails={orderdet}
              totalamount={totalamount}
              handleDelete={handleDelete}
            />
          </div>
        </div>
      </Ordersdatacontext.Provider>
    </>
  );
}

export default Order;
