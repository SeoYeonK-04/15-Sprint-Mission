function EmailInput() {
  return (
    <div className="input-box">
      <label htmlFor="email">이메일</label>
      <input
        name="email"
        id="email"
        type="email"
        placeholder="이메일을 입력해주세요"
      />
      <div className="email-error"></div>
    </div>
  );
}

export default EmailInput;
