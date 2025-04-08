function NickNameInput() {
  return (
    <div className="input-box">
      <label htmlFor="nickname">닉네임</label>
      <input
        name="nickname"
        id="nickname"
        type="text"
        placeholder="닉네임을 입력해주세요"
      />
      <div className="nickname-error"></div>
    </div>
  );
}

export default NickNameInput;
