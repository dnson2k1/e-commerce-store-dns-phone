import React, { useEffect, useRef, useState } from "react";
import Grid from "./Grid";
import ProductCard from "./ProductCard";

const IfinityList = (props) => {
  const listRef = useRef(null);
  const [data, setData] = useState(props.product);
  useEffect(() => {
    setData(props.product);
  }, [props.product]);

  return (
    <div ref={listRef}>
      <Grid col={4} mdCol={2} smCol={1} gap={20}>
        {data
          .filter((val) => {
            if (props.searchTerm === "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(props.searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((item) => (
            <ProductCard key={item.id} data={item} />
          ))}
      </Grid>
    </div>
  );
};

export default IfinityList;
