import React from "react";
import CategoryList from "../components/CategoryList";
import BannerProduct from "../components/BannerProduct";
import HorizontalCardProduct from "../components/HorizontalCardProduct";
import VerticalCardProduct from "../components/VerticalCardProduct";

const Home = () => {
  return (
    <div>
      <CategoryList />
      <BannerProduct />
      <HorizontalCardProduct category={"airpodes"} heading={"Top's Airpodes"} />
      <HorizontalCardProduct
        category={"watches"}
        heading={"Popular's watches"}
      />
      <VerticalCardProduct category={"mobiles"} heading={"Mobile"} />
      <VerticalCardProduct category={"Mouse"} heading={"Mouse"} />
      <VerticalCardProduct category={"televisions"} heading={"Television"} />
      <VerticalCardProduct
        category={"camera"}
        heading={"Camera & Photography"}
      />
      <VerticalCardProduct category={"earphone"} heading={"Wired Earphone"} />
      <VerticalCardProduct
        category={"speakers"}
        heading={"Bluetooth Speaker"}
      />
      <VerticalCardProduct category={"refrigerator"} heading={"Refrigerator"} />
      <VerticalCardProduct category={"trimers"} heading={"Trimmer"} />
    </div>
  );
};

export default Home;
