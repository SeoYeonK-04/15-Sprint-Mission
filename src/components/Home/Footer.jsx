import { Link } from "react-router-dom";

import facebook from "/facebook.png";
import twitter from "/twitter.png";
import youtube from "/youtube.png";
import insta from "/insta.png";

function Footer() {
  return (
    <div className="footer-content">
      <span className="copyright">©codeit - 2024</span>
      <div className="footer-privacy">
        <Link className="footer-menu" to="/privacy">
          Privacy Policy
        </Link>
        <Link id="FAQ" className="footer-menu" to="FAQ">
          FAQ
        </Link>
      </div>
      <ul className="sns-link">
        <li>
          <a href="https://www.facebook.com/" target="_blank">
            <img src={facebook} alt="페이스북" width="20" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitter} alt="트위터" width="20" />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/" target="_blank">
            <img src={youtube} alt="유튜브" width="20" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/" target="_blank">
            <img src={insta} alt="인스타그램" width="20" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
