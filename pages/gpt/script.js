const logoContent = document.getElementById("logo-content");
const logoContentMobile = document.getElementById("logo-content-mobile");

toggle.addEventListener("click", () => {
  if (document.body.classList.contains("dark-theme")) {
    logoContent.src = "../../assets/icons/logo_night.svg";
    logoContent.src = "../../assets/icons/logo-mobile_night.svg";
  } else {
    logoContent.src = "../../assets/icons/logo.svg";
    logoContent.src = "../../assets/icons/logo-mobile.svg";
  }
});
