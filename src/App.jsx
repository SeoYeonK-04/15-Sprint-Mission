import { BrowserRouter as Router, Routes } from "react-router-dom";
import routes from "./routes"; // 라우트들을 배열로 관리

import "./styles/common.css";

function App() {
  return (
    <Router>
      <Routes>{routes}</Routes>
    </Router>
  );
}

export default App;
