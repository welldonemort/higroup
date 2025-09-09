const phone = document.getElementById("phone");
const logoContent = document.getElementById("logo-content");
const blocks = document.querySelectorAll(".solution__card");

const functionsOne = document.getElementById("functions-1");
const functionsTwo = document.getElementById("functions-2");
const functionsThree = document.getElementById("functions-3");
const functionsFour = document.getElementById("functions-4");

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

toggle.addEventListener("click", () => {
  if (document.body.classList.contains("dark-theme")) {
    document.body.style.backgroundImage = 'url("img/development-bg-dark.png")';

    logoContent.src = "../../assets/icons/logo_night.svg";
    blocks.forEach((block) => block.classList.add("glass"));

    functionsOne.src = "img/functions-1-yellow.svg";
    functionsTwo.src = "img/functions-2-yellow.svg";
    functionsThree.src = "img/functions-3-yellow.svg";
    functionsFour.src = "img/functions-4-yellow.svg";
  } else {
    document.body.style.backgroundImage = 'url("img/development-bg.png")';

    logoContent.src = "../../assets/icons/logo.svg";
    blocks.forEach((block) => block.classList.remove("glass"));

    functionsOne.src = "img/functions-1.svg";
    functionsTwo.src = "img/functions-2.svg";
    functionsThree.src = "img/functions-3.svg";
    functionsFour.src = "img/functions-4.svg";
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
