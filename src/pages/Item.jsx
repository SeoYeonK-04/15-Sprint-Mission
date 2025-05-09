import AllItem from "../components/Item/AllItems";
import Header from "../components/Item/Header";
import BestItem from "../components/Item/BestItem";

import "../styles/item.css";

function Item() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main className="item-main">
        <BestItem />
        <AllItem />
      </main>
    </>
  );
}

export default Item;
