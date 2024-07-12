import React from "react";
import "./Tag.css";
import { Button } from "@mui/material";

function Tag({ setFilter }) {
  const handleFilterClick = (filter) => {
    setFilter(filter);
  };

  return (
    <div className="tag">
      <Button onClick={() => handleFilterClick("All")}>All</Button>

      <Button onClick={() => handleFilterClick("Salad")}>Salad</Button>
      <Button onClick={() => handleFilterClick("Beverage")}>Beverage</Button>
      <Button onClick={() => handleFilterClick("Dessert")}>Dessert</Button>
      <Button onClick={() => handleFilterClick("Breakfast")}>Breakfast</Button>
      <Button onClick={() => handleFilterClick("Cool Drinks")}>
        Cool Drinks
      </Button>
      <Button onClick={() => handleFilterClick("Pizza")}>Pizza</Button>
      <Button onClick={() => handleFilterClick("Non Veg")}>Non Veg</Button>
      <Button onClick={() => handleFilterClick("Veg")}>Veg</Button>
      <Button onClick={() => handleFilterClick("Snacks")}>Snacks</Button>
      <Button onClick={() => handleFilterClick("Chocolates")}>
        Chocolates
      </Button>
      <Button onClick={() => handleFilterClick("Wine")}>Wine</Button>
      <Button onClick={() => handleFilterClick("Main Course")}>
        Main Course
      </Button>
      <Button onClick={() => handleFilterClick("Healthy")}>Healthy</Button>
      <Button onClick={() => handleFilterClick("Italian")}>Italian</Button>
      <Button onClick={() => handleFilterClick("Asian")}>Asian</Button>
      <Button onClick={() => handleFilterClick("Continental")}>
        Continental
      </Button>
      <Button onClick={() => handleFilterClick("Indian")}>Indian</Button>
      <Button onClick={() => handleFilterClick("Lebanese")}>Lebanese</Button>
    </div>
  );
}

export default Tag;
