import { useState, useEffect, useMemo } from "react";

import ItemList from "./ItemList";
import { getProducts } from "../../api/itemAPI";

function BestItem() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getProducts({
          orderBy: "favorite",
          pageSize: 4,
        });
        setItems(data.list);
      } catch (error) {
        console.error("상품을 불러오는 중 에러 발생:", error);
      }
    };

    fetchItems();
  }, []);

  // const bestItems = useMemo(() => {
  //   return [...items]
  //     .sort((a, b) => b.favoriteCount - a.favoriteCount)
  //     .slice(0, 4);
  // }, [items]);

  // console.log(bestItems);

  return (
    <div className="best-item-container">
      <h1 className="best-item-title">베스트 상품</h1>
      <ItemList items={items} />
    </div>
  );
}
export default BestItem;
