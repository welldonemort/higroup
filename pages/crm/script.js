const phone = document.getElementById("phone");
const phoneTwo = document.getElementById("phone-two");

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

phoneTwo.addEventListener("input", (e) => {
  let value = e.target.value.replace(/\D/g, "");
  if (value.startsWith("7")) value = value.slice(1);

  let result = "+7 ";
  if (value.length > 0) result += value.substring(0, 3);
  if (value.length >= 4) result += " " + value.substring(3, 6);
  if (value.length >= 7) result += " " + value.substring(6, 8);
  if (value.length >= 9) result += " " + value.substring(8, 10);

  e.target.value = result;
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
