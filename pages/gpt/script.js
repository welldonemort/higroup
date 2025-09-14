const logoContent = document.getElementById("logo-content");

toggle.addEventListener("click", () => {
  if (document.body.classList.contains("dark-theme")) {
    logoContent.src = "../../assets/icons/logo_night.svg";
  } else {
    logoContent.src = "../../assets/icons/logo.svg";
  }
});
