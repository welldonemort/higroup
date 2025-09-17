const logoContent = document.getElementById("logo-content");

toggle.addEventListener("click", () => {
  if (document.body.classList.contains("dark-theme")) {
    logoContent.src = "../../assets/icons/logo_night.svg";
  } else {
    logoContent.src = "../../assets/icons/logo.svg";
  }
});

// слайдер иконок
const track = document.getElementById("iconTrack");

let offset = 0;
const speed = 3;

function animate() {
  offset -= speed;
  track.style.transform = `translateX(${offset}px)`;

  const first = track.firstElementChild;
  const firstWidth = first.offsetWidth + 40;

  if (Math.abs(offset) >= firstWidth) {
    track.appendChild(first);
    offset += firstWidth;
    track.style.transform = `translateX(${offset}px)`;
  }

  requestAnimationFrame(animate);
}

animate();
