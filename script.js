const info = document.querySelector(".info");
const title = document.querySelector(".info h1");
const paragraflar = document.querySelectorAll(".info p");

const aslMatnlar = [];
const aslSarlavha = title.textContent;
paragraflar.forEach(function (p) {
  aslMatnlar.push(p.textContent);
});

const yangiSarlavha = "Six qochishga ulgurdimi?";
const yangiMatnlar = [
  "Qorong'i kemada hamma narsa ulkan va qo'rqinchli.",
  "Six faqat chiroq va sariq yomg'irpo'shi bilan yo'l topadi.",
  "Har bir xona yangi jumboq va yangi xavf."
];

let vaqtlar = [];

function toxtat() {
  vaqtlar.forEach(function (v) {
    clearInterval(v);
  });
  vaqtlar = [];
}

function yoz(element, matn, kechikish, tezlik) {
  element.textContent = "";
  const boshlash = setTimeout(function () {
    let i = 0;
    const v = setInterval(function () {
      element.textContent += matn[i];
      i++;
      if (i >= matn.length) {
        clearInterval(v);
      }
    }, tezlik);
    vaqtlar.push(v);
  }, kechikish);
  vaqtlar.push(boshlash);
}

info.addEventListener("mouseenter", function () {
  toxtat();
  info.classList.add("qorongi");
  yoz(title, yangiSarlavha, 0, 80);
  paragraflar.forEach(function (p, i) {
    yoz(p, yangiMatnlar[i], 1500 + i * 2500, 40);
  });
});

info.addEventListener("mouseleave", function () {
  toxtat();
  info.classList.remove("qorongi");
  title.textContent = aslSarlavha;
  paragraflar.forEach(function (p, i) {
    p.textContent = aslMatnlar[i];
  });
});