import { useState, useEffect } from "react";
import { getProducts } from "../../api/itemAPI";

import ItemList from "./ItemList";

function AllItem() {
  const [items, setItems] = useState([]);
  const [sort, setSort] = useState("recent");
  const [totalPage, setTotalPage] = useState();

  const handleChange = (e) => setSort(e.target.value);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getProducts({
          orderBy: sort,
          pageSize: 10,
        });
        setItems(data.list);
      } catch (error) {
        console.error("상품을 불러오는 중 에러 발생:", error);
      }
    };

    fetchItems();
  }, [sort]);

  return (
    <div className="all-item">
      <div className="all-item-header">
        <h1>전체 상품</h1>
        <input placeholder="검색할 상품을 입력해주세요" />
        <button>상품 등록하기</button>
        <select value={sort} onChange={handleChange}>
          <option value="recent">최신순</option>
          <option value="favorite">좋아요순</option>
        </select>
      </div>

      <ItemList items={items} />
    </div>
  );
}

export default AllItem;
