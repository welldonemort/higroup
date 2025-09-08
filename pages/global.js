const toggle = document.getElementById("toggle");
const logo = document.getElementById("logo");
const logoFooter = document.getElementById("logo-footer");
const callBtn = document.getElementById("call-btn");
const footerIconSite = document.getElementById("footer-icon-site");
const footerIconIg = document.getElementById("footer-icon-ig");
const footerIconWp = document.getElementById("footer-icon-wp");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("night");
  callBtn.classList.toggle("nightBtn");
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    logo.src = "../../assets/icons/logo_night.svg";
    logoFooter.src = "../../assets/icons/logo_night.svg";
    footerIconSite.src = "../../assets/icons/footer-site-white.svg";
    footerIconIg.src = "../../assets/icons/footer-ig-white.svg";
    footerIconWp.src = "../../assets/icons/footer-wp-white.svg";
  } else {
    logo.src = "../../assets/icons/logo.svg";
    logoFooter.src = "../../assets/icons/logo.svg";
    footerIconSite.src = "../../assets/icons/footer-site.svg";
    footerIconIg.src = "../../assets/icons/footer-ig.svg";
    footerIconWp.src = "../../assets/icons/footer-wp.svg";
  }
});
