import { Link } from "react-router-dom";

import google from "/google.png";
import kakao from "/kakao.png";

function Footer() {
  return (
    <>
      <section className="social-login">
        <span>간편 로그인하기</span>

        <div className="social-media">
          <ul>
            <li>
              <a href="http://www.google.com/" target="_blank">
                <img src={google} alt="구글 로고" width="42" />
              </a>
            </li>
            <li>
              <a href="http://www.kakaocorp.com/page/" target="_blank">
                <img src={kakao} alt="카카오톡 로고" width="42" />
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="sign_up">
        <span>이미 회원이신가요?</span>
        <Link to="/login">로그인</Link>
      </section>
    </>
  );
}

export default Footer;
