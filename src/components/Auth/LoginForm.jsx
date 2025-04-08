import EmailInput from "./Input/EmailInput";
import PasswordInput from "./Input/PasswordInput";

function LoginForm() {
  return (
    <form className="auth-form">
      <EmailInput />
      <PasswordInput />
      <button
        id="button-login"
        type="button"
        className="button-submit"
        disabled
      >
        로그인
      </button>
    </form>
  );
}

export default LoginForm;
