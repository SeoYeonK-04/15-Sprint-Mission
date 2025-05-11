import getProductById from "../../api/getItemById";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import styles from "./styles/DetailContent.module.css";
import ItemDescription from "./ItemDescription";

function DetailContent() {
  const { productId } = useParams();
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const data = await getProductById(productId);
        setItems(data);
      } catch (error) {
        console.error("상품 정보를 불러오는 중 에러:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [productId]);

  if (loading || !items) {
    return <p>상품 정보를 불러오는 중입니다...</p>;
  }

  return (
    <main className={styles.main}>
      <ItemDescription items={items} />
    </main>
  );
}

export default DetailContent;
