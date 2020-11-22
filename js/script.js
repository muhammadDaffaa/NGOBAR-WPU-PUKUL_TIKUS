const tanah = document.querySelectorAll(".tanah");
const tikus = document.querySelectorAll(".tikus");
const papanSkor = document.querySelector("#papan-skor");
const audio = document.querySelector("#pop");

let tanahSebelum;
let selesai;
let skor;

function randomTanah(tanah) {
  // Membuat tanah secara acak dan Membulatkan kebawah bilangan pada tanah
  const t = Math.floor(Math.random() * tanah.length);
  const tRandom = tanah[t];
  if (tRandom == tanahSebelum) {
    randomTanah(tanah);
  } else {
    tanahSebelum = tRandom;
  }
  return tRandom;
}

function waktuRandom(min, max) {
  return Math.round(Math.random() * (max - min + min));
}

function munculkanTikus() {
  const tRandom = randomTanah(tanah);
  const wRandom = waktuRandom(450, 1200);
  tRandom.classList.add("muncul");

  setTimeout(() => {
    tRandom.classList.remove("muncul");
    // Rekursift / berulangulang gahenti
    if (!selesai) {
      munculkanTikus();
    }
  }, wRandom);
}

function mulai() {
  selesai = false;
  skor = 0;
  papanSkor.textContent = 0;
  munculkanTikus();
  setTimeout(() => {
    selesai = true;
  }, 15000);
}

function pukul() {
  skor++;
  papanSkor.textContent = skor;
  audio.currentTime = 0;
  audio.play();
  this.parentNode.classList.remove("muncul");
  this.style.transition = "TOP 0s";
}

tikus.forEach((t) => {
  t.addEventListener("click", pukul);
});
