const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".slider__btn--prev");
const nextBtn = document.querySelector(".slider__btn--next");
const dots = document.querySelectorAll(".dot");
const slider = document.querySelector(".slider__track");

let current = 0;
let autoSlide;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });

  current = index;
}

prevBtn.addEventListener("click", () => {
  let newIndex = (current - 1 + slides.length) % slides.length;
  showSlide(newIndex);
});

nextBtn.addEventListener("click", () => {
  let newIndex = (current + 1) % slides.length;
  showSlide(newIndex);
});

showSlide(current);

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

//

const phone = document.getElementById("phone");

phone.addEventListener("input", (e) => {
  let value = e.target.value.replace(/\D/g, "");
  if (value.startsWith("7")) value = value.slice(1);

  let result = "+7 ";
  if (value.length > 0) result += value.substring(0, 3);
  if (value.length >= 4) result += " " + value.substring(3, 6);
  if (value.length >= 7) result += " " + value.substring(6, 8);
  if (value.length >= 9) result += " " + value.substring(8, 10);

  e.target.value = result;
});

const logoContent = document.getElementById("logo-content");
const toggleIntegrations = document.getElementById("toggle");

toggleIntegrations.addEventListener("click", () => {
  if (document.body.classList.contains("dark-theme")) {
    logoContent.src = "../../assets/icons/logo_night.svg";
  } else {
    logoContent.src = "../../assets/icons/logo.svg";
  }
});
