import Banner from "../components/Auth/Banner";
import Footer from "../components/Auth/Footer_Signup";
import SignupForm from "../components/Auth/SignupForm";

import "../styles/auth.css";

function Signup() {
  return (
    <div className="body-container">
      <div className="body-login">
        <header className="auth-banner">
          <Banner />
        </header>

        <main className="auth-main">
          <SignupForm />
        </main>

        <footer className="auth-footer">
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default Signup;
