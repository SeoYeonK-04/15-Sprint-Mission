import { Link } from "react-router-dom";

import logo from "/logo.svg";
import logo_title from "/logo_title.svg";

function Banner() {
  return (
    <Link to="/" className="auth-banner-link">
      <img className="auth-logo" src={logo} alt="판다마켓 로고" />
      <img className="auth-logo-title" src={logo_title} alt="판다마켓" />
    </Link>
  );
}

export default Banner;
