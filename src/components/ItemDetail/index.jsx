import { useItemContext } from "../../../contexts/ItemContext";

function DetailContent() {
  const { item, loading } = useItemContext();

  if (loading) {
    return <div>로딩중 ...</div>;
  }
}

export default DetailContent;
