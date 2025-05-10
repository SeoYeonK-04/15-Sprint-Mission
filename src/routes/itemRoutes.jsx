import { Route } from "react-router-dom";
import Item from "../pages/Item.jsx";
import AddItem from "../pages/AddItem.jsx";

const itemRoutes = (
  <Route path="/item" element={<Item />} key="item">
    <Route path="additem" element={<AddItem />} />
  </Route>
);

export default itemRoutes;
