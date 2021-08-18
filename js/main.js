document.getElementById("ilerle").addEventListener("click", function () {
  isim = document.getElementById("name-input").value;
  sehir = document.getElementById("city").value;

  if (isim != "") {
    if (sehir != "") {
      document.getElementById("container-1").style.display = "none";
      document.getElementById("container-2").style.display = "block";
      baslangic = parseInt(sehir);
      start=myArray[baslangic];
    }
  } else {
  }
});
document.getElementById("next-1").addEventListener("click", function () {
  çıralı = çıralı + 1;
  document.getElementById("container-2").style.display = "none";
  document.getElementById("container-3").style.display = "block";
});
document.getElementById("next-2").addEventListener("click", function () {
  çeşme = çeşme + 1;
  document.getElementById("container-2").style.display = "none";
  document.getElementById("container-3").style.display = "block";
});
document.getElementById("next-3").addEventListener("click", function () {
  fethiye = fethiye + 1;
  document.getElementById("container-2").style.display = "none";
  document.getElementById("container-3").style.display = "block";
});
document.getElementById("next-4").addEventListener("click", function () {
  kaş = kaş + 1;
  document.getElementById("container-2").style.display = "none";
  document.getElementById("container-3").style.display = "block";
});
document.getElementById("next-5").addEventListener("click", function () {
  çıralı = çıralı + 1;
  document.getElementById("container-3").style.display = "none";
  document.getElementById("container-4").style.display = "block";
});
document.getElementById("next-6").addEventListener("click", function () {
  çeşme = çeşme + 1;
  document.getElementById("container-3").style.display = "none";
  document.getElementById("container-4").style.display = "block";
});
document.getElementById("next-7").addEventListener("click", function () {
  fethiye = fethiye + 1;
  document.getElementById("container-3").style.display = "none";
  document.getElementById("container-4").style.display = "block";
});
document.getElementById("next-8").addEventListener("click", function () {
  kaş = kaş + 1;
  document.getElementById("container-3").style.display = "none";
  document.getElementById("container-4").style.display = "block";
});
document.getElementById("next-9").addEventListener("click", function () {
  kaş = kaş + 1;
  document.getElementById("container-4").style.display = "none";
  document.getElementById("container-5").style.display = "block";
  document.getElementById("text-1").innerHTML = isim + ", Rotan:";

  if (çeşme >= 2) {
    document.getElementById("container-5").style.background =
      "url(/img/çeşme.png)";
    document.getElementById("text-4").innerHTML = çeşme_text;
    document.getElementById("text-5").innerHTML = çeşme_text_2;
    document.getElementById("text-2").innerHTML = "Çeşme";
    son=0;
  } else if (çıralı >= 2) {
    document.getElementById("container-5").style.background =
      "url(/img/çıralı.png)";
    document.getElementById("text-4").innerHTML = çıralı_text;
    document.getElementById("text-5").innerHTML = çıralı_text_2;
    document.getElementById("text-2").innerHTML = "Çıralı";
    son=3 ;
  } else if (fethiye >= 2) {
    document.getElementById("container-5").style.background =
      "url(/img/fethiye.png)";
    document.getElementById("text-4").innerHTML = fethiye_text;
    document.getElementById("text-5").innerHTML = fethiye_text_2;
    document.getElementById("text-2").innerHTML = "Fethiye";
    son=1;
  } else if (kaş >= 2) {
    document.getElementById("container-5").style.background =
      "url(/img/kaş.png)";
    document.getElementById("text-4").innerHTML = kaş_text;
    document.getElementById("text-5").innerHTML = kaş_text_2;
    document.getElementById("text-2").innerHTML = "Kaş";
  son=2;
  } else {
    document.getElementById("container-5").style.background =
      "url(/img/kaş.png)";
    document.getElementById("text-4").innerHTML = kaş_text;
    document.getElementById("text-5").innerHTML = kaş_text_2;
    document.getElementById("text-2").innerHTML = "Kaş";
    son=2;
  }
});
document.getElementById("next-10").addEventListener("click", function () {
  fethiye = fethiye + 1;
  document.getElementById("container-4").style.display = "none";
  document.getElementById("container-5").style.display = "block";
  document.getElementById("text-1").innerHTML = isim + ", Rotan:";
  if (çeşme >= 2) {
    document.getElementById("container-5").style.background =
      "url(/img/çeşme.png)";
    document.getElementById("text-4").innerHTML = çeşme_text;
    document.getElementById("text-5").innerHTML = çeşme_text_2;
    document.getElementById("text-2").innerHTML = "Çeşme";
    son=0;
  } else if (çıralı >= 2) {
    document.getElementById("container-5").style.background =
      "url(/img/çıralı.png)";
    document.getElementById("text-4").innerHTML = çıralı_text;
    document.getElementById("text-5").innerHTML = çıralı_text_2;
    document.getElementById("text-2").innerHTML = "Çıralı";
  son=3;
  } else if (fethiye >= 2) {
    document.getElementById("container-5").style.background =
      "url(/img/fethiye.png)";
    document.getElementById("text-4").innerHTML = fethiye_text;
    document.getElementById("text-5").innerHTML = fethiye_text_2;
    document.getElementById("text-2").innerHTML = "Fethiye";
  son=1;
  } else if (kaş >= 2) {
    document.getElementById("container-5").style.background =
      "url(/img/kaş.png)";
    document.getElementById("text-4").innerHTML = kaş_text;
    document.getElementById("text-5").innerHTML = kaş_text_2;
    document.getElementById("text-2").innerHTML = "Kaş";
son=2;
  } else {
    document.getElementById("container-5").style.background =
      "url(/img/fethiye.png)";
    document.getElementById("text-4").innerHTML = fethiye_text;
    document.getElementById("text-5").innerHTML = fethiye_text_2;
    document.getElementById("text-2").innerHTML = "Fethiye";
son=1;
  }
});
document.getElementById("next-11").addEventListener("click", function () {
  çeşme = çeşme + 1;
  document.getElementById("container-4").style.display = "none";
  document.getElementById("container-5").style.display = "block";
  document.getElementById("text-1").innerHTML = isim + ", Rotan:";
  if (çeşme >= 2) {
    document.getElementById("container-5").style.background =
      "url(/img/çeşme.png)";
    document.getElementById("text-4").innerHTML = çeşme_text;
    document.getElementById("text-5").innerHTML = çeşme_text_2;
    document.getElementById("text-2").innerHTML = "Çeşme";
   son=0;
  } else if (çıralı >= 2) {
    document.getElementById("container-5").style.background =
      "url(/img/çıralı.png)";
    document.getElementById("text-4").innerHTML = çıralı_text;
    document.getElementById("text-5").innerHTML = çıralı_text_2;
    document.getElementById("text-2").innerHTML = "Çıralı";
   son=3;
  } else if (fethiye >= 2) {
    document.getElementById("container-5").style.background =
      "url(/img/fethiye.png)";
    document.getElementById("text-4").innerHTML = fethiye_text;
    document.getElementById("text-5").innerHTML = fethiye_text_2;
    document.getElementById("text-2").innerHTML = "Fethiye";
     son=1;
  } else if (kaş >= 2) {
    document.getElementById("container-5").style.background =
      "url(/img/kaş.png)";
    document.getElementById("text-4").innerHTML = kaş_text;
    document.getElementById("text-5").innerHTML = kaş_text_2;
    document.getElementById("text-2").innerHTML = "Kaş";
   son=2;
  } else {
    document.getElementById("container-5").style.background =
      "url(/img/çeşme.png)";
    document.getElementById("text-4").innerHTML = çeşme_text;
    document.getElementById("text-5").innerHTML = çeşme_text_2;
    document.getElementById("text-2").innerHTML = "Çeşme";
     son=0;
  }
});
document.getElementById("next-12").addEventListener("click", function () {
  çıralı = çıralı + 1;
  document.getElementById("container-4").style.display = "none";
  document.getElementById("container-5").style.display = "block";
  document.getElementById("text-1").innerHTML = isim + ", Rotan:";
  if (çeşme >= 2) {
    document.getElementById("container-5").style.background =
      "url(/img/çeşme.png)";
    document.getElementById("text-4").innerHTML = çeşme_text;
    document.getElementById("text-5").innerHTML = çeşme_text_2;
    document.getElementById("text-2").innerHTML = "Çeşme";
    son=0;
  } else if (çıralı >= 2) {
    document.getElementById("container-5").style.background =
      "url(/img/çıralı.png)";
    document.getElementById("text-4").innerHTML = çıralı_text;
    document.getElementById("text-5").innerHTML = çıralı_text_2;
    document.getElementById("text-2").innerHTML = "Çıralı";
    son=3;
  } else if (fethiye >= 2) {
    document.getElementById("container-5").style.background =
      "url(/img/fethiye.png)";
    document.getElementById("text-4").innerHTML = fethiye_text;
    document.getElementById("text-5").innerHTML = fethiye_text_2;
    document.getElementById("text-2").innerHTML = "Fethiye";
    son=1;
  } else if (kaş >= 2) {
    document.getElementById("container-5").style.background =
      "url(/img/kaş.png)";
    document.getElementById("text-4").innerHTML = kaş_text;
    document.getElementById("text-5").innerHTML = kaş_text_2;
    document.getElementById("text-2").innerHTML = "Kaş";
    son=2;
  } else {
    document.getElementById("container-5").style.background =
      "url(/img/çıralı.png)";
    document.getElementById("text-4").innerHTML = çıralı_text;
    document.getElementById("text-5").innerHTML = çıralı_text_2;
    document.getElementById("text-2").innerHTML = "Çıralı";
     son=3;
  }
});

