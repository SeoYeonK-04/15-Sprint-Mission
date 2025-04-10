import AllItem from "../components/Item/AllItems";
import Banner from "../components/Item/Banner";
import BestItem from "../components/Item/BestItem";

import "../styles/banner.css";

function Item() {
  return (
    <>
      <Banner />
      <BestItem />
      <AllItem />
    </>
  );
}

export default Item;
