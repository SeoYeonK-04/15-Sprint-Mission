const pwVisibility  = document.querySelector(".pw-visibility");
const eyeImage = document.querySelector(".eye_icon");

const isPwVisibility = () => {
  if (pwVisibility.type === "password") { // password면 text로
    eyeImage.src = "/image/password_show_icon.svg";
    pwVisibility.type = "text";
  } else { // text면 password로
    eyeImage.src = "/image/password_toggle_icon.svg";
    pwVisibility.type = "password";
  }
}


eyeImage.addEventListener("click", isPwVisibility);