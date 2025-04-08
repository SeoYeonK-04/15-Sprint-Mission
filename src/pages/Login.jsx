import Banner from "../components/Auth/Banner";
import Footer from "../components/Auth/Footer_Login";
import LoginForm from "../components/Auth/LoginForm";

import "../styles/auth.css";

function Login() {
  return (
    <div className="body-container">
      <div className="body-login">
        <header className="auth-banner">
          <Banner />
        </header>

        <main className="auth-main">
          <LoginForm />
        </main>

        <footer className="auth-footer">
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default Login;
