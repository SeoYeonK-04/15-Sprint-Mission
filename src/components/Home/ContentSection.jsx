import hot_image from "/hot.svg";
import search_image from "/search.svg";
import register_image from "/register.svg";

function ContentSection() {
  return (
    <section className="body-container">
      <section className="content-section">
        <div className="content-card">
          <img
            src={hot_image}
            alt="두 마리의 판다 뒤통수가 티셔츠를 바라보고 있는 이미지"
          />
          <div className="content-text">
            <span className="content-label">Hot item</span>
            <h2 className="content-title">
              <span>인기 상품을</span>
              확인해보세요
            </h2>
            <p className="content-description">
              가장 HOT한 중고거래 물품을
              <br />
              판다 마켓에서 확인해 보세요
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="content-card">
          <img src={search_image} alt="돋보기 그림이 있는 이미지" />
          <div className="content-text">
            <span className="content-label">Search</span>
            <h2 className="content-title">
              <span>구매를 원하는</span>
              상품을 검색하세요
            </h2>
            <p className="content-description">
              구매하고 싶은 물품은 검색해서
              <br />
              쉽게 찾아보세요
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="content-card">
          <img
            src={register_image}
            alt="파란색 폴더와 필기구, 책, 하트 모양 안경 아이콘이 포함된 일러스트 이미지"
          />
          <div className="content-text">
            <span className="content-label">Register</span>
            <h2 className="content-title">
              <span>판매를 원하는</span>
              상품을 등록하세요
            </h2>
            <p className="content-description">
              어떤 물건이든 판매하고 싶은 상품을
              <br />
              쉽게 등록하세요
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default ContentSection;
