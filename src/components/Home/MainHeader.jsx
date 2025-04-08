import { Link } from "react-router-dom";

import header_img from "/header.svg";

function MainHeader() {
  return (
    <section className="header-container">
      <div className="header-content">
        <div className="header-text">
          <h1 className="header-title">
            <span>일상의 모든 물건을</span>
            거래해 보세요
          </h1>
          <div className="explore-button-container">
            <Link className="explore-button" to="/item">
              구경하러 가기
            </Link>
          </div>
        </div>
        <img
          className="header-image"
          src={header_img}
          alt="판다가 장바구니를 들고 한 손으로 인사하는 이미지"
        />
      </div>
    </section>
  );
}

export default MainHeader;
