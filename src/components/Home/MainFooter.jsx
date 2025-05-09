import footer_image from "/footer.svg";

function MainFooter() {
  return (
    <section className="content-footer">
      <div className="content-footer-content">
        <h3 className="content-footer-text">
          믿을 수 있는
          <br />
          판다마켓 중고 거래
        </h3>
        <img
          className="content-footer-img"
          src={footer_image}
          alt="두 마리의 판다가 장보러 가면서 이야기를 나누는 이미지"
        />
      </div>
    </section>
  );
}

export default MainFooter;
