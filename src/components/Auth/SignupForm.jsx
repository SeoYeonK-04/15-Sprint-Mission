import EmailInput from "./Input/EmailInput";
import NickNameInput from "./Input/NickNameInput";
import PasswordConfirmInput from "./Input/PassowrdConfirmInput";
import PasswordInput from "./Input/PasswordInput";

function SignupForm() {
  return (
    <form className="auth-form">
      <EmailInput />
      <NickNameInput />
      <PasswordInput />
      <PasswordConfirmInput />
      <button
        id="button-login"
        type="button"
        className="button-submit"
        disabled
      >
        회원가입
      </button>
    </form>
  );
}

export default SignupForm;
