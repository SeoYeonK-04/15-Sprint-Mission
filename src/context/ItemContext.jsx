import { createContext, useContext, useEffect, useState } from "react";
import { getProducts } from "../api/products";

const ItemContext = createContext();

export function ItemProvider({ children }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      try {
        const data = await getProducts(); // 기본 params 없이 호출
        setItems(data.list);
      } catch (error) {
        console.error("상품 데이터를 불러오는 중 오류:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  return (
    <ItemContext.Provider value={{ items, loading }}>
      {children}
    </ItemContext.Provider>
  );
}

export function useItemContext() {
  return useContext(ItemContext);
}
