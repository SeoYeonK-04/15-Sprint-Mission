import pw_toggle_icon from "/password_toggle_icon.svg";

function PasswordConfirmInput() {
  return (
    <div className="input-box">
      <label htmlFor="password">비밀번호 확인</label>
      <div className="pw-content">
        <input
          className="pw-visibility"
          name="password"
          id="password"
          type="password"
          placeholder="비밀번호를 다시 한 번 입력해주세요"
        />
        <button type="button" className="button-eye">
          <img
            className="eye_icon"
            src={pw_toggle_icon}
            alt="비밀번호를 보이지 않게 하는 눈 아이콘"
          />
        </button>
      </div>
      <div className="pw-error"></div>
    </div>
  );
}

export default PasswordConfirmInput;
