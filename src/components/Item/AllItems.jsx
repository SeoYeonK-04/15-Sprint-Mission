import { useState, useEffect } from "react";
import { getProducts } from "../../api/itemAPI";

import ItemList from "./ItemList";
import PageNation from "./PageNation";

const getPageSize = () => {
  const width = window.innerWidth;
  if (width < 768) {
    // 모바일
    return 4;
  } else if (width < 1280) {
    // 테블릿
    return 6;
  } else {
    // 데스크톱
    return 10;
  }
};

function AllItem() {
  const [items, setItems] = useState([]);
  const [sort, setSort] = useState("recent");
  const [totalPage, setTotalPage] = useState();
  const [pageSize, setPageSize] = useState(getPageSize());

  const handleChange = (e) => setSort(e.target.value);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getProducts({
          orderBy: sort,
          pageSize: pageSize,
        });
        setItems(data.list);
        setTotalPage(Math.ceil(data.totalCount / pageSize));
      } catch (error) {
        console.error("상품을 불러오는 중 에러 발생:", error);
      }
    };

    fetchItems();
  }, [sort, pageSize]);

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

      <ItemList items={items} className="all-item-list" />
      <PageNation totalPage={totalPage} />
    </div>
  );
}

export default AllItem;
