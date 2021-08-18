baslangic=0;
son=0;
myArray = [
  { id: 1, name: "ADANA", lat: 37.0, lng: 35.3213333 },
  { id: 2, name: "ADIYAMAN", lat: 37.7641667, lng: 38.2761667 },
  { id: 3, name: "AFYONKARAHİSAR", lat: 38.76376, lng: 30.54034 },
  { id: 4, name: "AĞRI", lat: 39.7216667, lng: 43.0566667 },
  { id: 5, name: "AMASYA", lat: 40.65, lng: 35.8333333 },
  { id: 6, name: "ANKARA", lat: 39.92077, lng: 32.85411 },
  { id: 7, name: "ANTALYA", lat: 36.88414, lng: 30.70563 },
  { id: 8, name: "ARTVİN", lat: 41.1833333, lng: 41.8166667 },
  { id: 9, name: "AYDIN", lat: 37.8444, lng: 27.8458 },
  { id: 10, name: "BALIKESİR", lat: 39.648369, lng: 27.88261 },
  { id: 11, name: "BİLECİK", lat: 40.150131, lng: 29.983061 },
  { id: 12, name: "BİNGÖL", lat: 38.885349, lng: 40.498291 },
  { id: 13, name: "BİTLİS", lat: 38.4, lng: 42.1166667 },
  { id: 14, name: "BOLU", lat: 40.739479, lng: 31.611561 },
  { id: 15, name: "BURDUR", lat: 37.726909, lng: 30.288876 },
  { id: 16, name: "BURSA", lat: 40.18257, lng: 29.06687 },
  { id: 17, name: "ÇANAKKALE", lat: 40.155312, lng: 26.41416 },
  { id: 18, name: "ÇANKIRI", lat: 40.6, lng: 33.6166667 },
  { id: 19, name: "ÇORUM", lat: 40.5505556, lng: 34.9555556 },
  { id: 20, name: "DENİZLİ", lat: 37.77652, lng: 29.08639 },
  { id: 21, name: "DİYARBAKIR", lat: 37.91441, lng: 40.230629 },
  { id: 22, name: "EDİRNE", lat: 41.6666667, lng: 26.5666667 },
  { id: 23, name: "ELAZIĞ", lat: 38.680969, lng: 39.226398 },
  { id: 24, name: "ERZİNCAN", lat: 39.75, lng: 39.5 },
  { id: 25, name: "ERZURUM", lat: 39.9043189, lng: 41.2678853 },
  { id: 26, name: "ESKİŞEHİR", lat: 39.784302, lng: 30.51922 },
  { id: 27, name: "GAZİANTEP", lat: 37.06622, lng: 37.38332 },
  { id: 28, name: "GİRESUN", lat: 40.912811, lng: 38.38953 },
  { id: 29, name: "GÜMÜŞHANE", lat: 40.4602778, lng: 39.4813889 },
  { id: 30, name: "HAKKARİ", lat: 37.5833333, lng: 43.7333333 },
  { id: 31, name: "HATAY", lat: 36.4018488, lng: 36.3498097 },
  { id: 32, name: "ISPARTA", lat: 37.7666667, lng: 30.55 },
  { id: 33, name: "MERSİN(İÇEL)", lat: 36.8, lng: 34.6333333 },
  { id: 34, name: "İSTANBUL", lat: 41.00527, lng: 28.97696 },
  { id: 35, name: "İZMİR", lat: 38.41885, lng: 27.12872 },
  { id: 36, name: "KARS", lat: 40.59267, lng: 43.077831 },
  { id: 37, name: "KASTAMONU", lat: 41.38871, lng: 33.78273 },
  { id: 38, name: "KAYSERİ", lat: 38.7333333, lng: 35.4833333 },
  { id: 39, name: "KIRKLARELİ", lat: 41.7333333, lng: 27.2166667 },
  { id: 40, name: "KIRŞEHİR", lat: 39.15, lng: 34.1666667 },
  { id: 41, name: "KOCAELİ", lat: 40.8532704, lng: 29.8815203 },
  { id: 42, name: "KONYA", lat: 37.8666667, lng: 32.4833333 },
  { id: 43, name: "KÜTAHYA", lat: 39.4166667, lng: 29.9833333 },
  { id: 44, name: "MALATYA", lat: 38.35519, lng: 38.30946 },
  { id: 45, name: "MANİSA", lat: 38.619099, lng: 27.428921 },
  { id: 46, name: "KAHRAMANMARAŞ", lat: 37.5833333, lng: 36.9333333 },
  { id: 47, name: "MARDİN", lat: 37.3122361, lng: 40.735112 },
  { id: 48, name: "MUĞLA", lat: 37.2152778, lng: 28.3636111 },
  { id: 49, name: "MUŞ", lat: 38.7432926, lng: 41.5064823 },
  { id: 50, name: "NEVŞEHİR", lat: 38.62442, lng: 34.723969 },
  { id: 51, name: "NİĞDE", lat: 37.9666667, lng: 34.6833333 },
  { id: 52, name: "ORDU", lat: 40.9833333, lng: 37.8833333 },
  { id: 53, name: "RİZE", lat: 41.02005, lng: 40.523449 },
  { id: 54, name: "SAKARYA", lat: 40.7568793, lng: 30.378138 },
  { id: 55, name: "SAMSUN", lat: 41.292782, lng: 36.33128 },
  { id: 56, name: "SİİRT", lat: 37.94429, lng: 41.93288 },
  { id: 57, name: "SİNOP", lat: 42.0264222, lng: 35.1550745 },
  { id: 58, name: "SİVAS", lat: 39.747662, lng: 37.017879 },
  { id: 59, name: "TEKİRDAĞ", lat: 40.9833333, lng: 27.5166667 },
  { id: 60, name: "TOKAT", lat: 40.3166667, lng: 36.55 },
  { id: 61, name: "TRABZON", lat: 41.0, lng: 39.7333333 },
  { id: 62, name: "TUNCELİ", lat: 39.1079868, lng: 39.5401672 },
  { id: 63, name: "ŞANLIURFA", lat: 37.15, lng: 38.8 },
  { id: 64, name: "UŞAK", lat: 38.682301, lng: 29.40819 },
  { id: 65, name: "VAN", lat: 38.4941667, lng: 43.38 },
  { id: 66, name: "YOZGAT", lat: 39.82, lng: 34.8044444 },
  { id: 67, name: "ZONGULDAK", lat: 41.456409, lng: 31.798731 },
  { id: 68, name: "AKSARAY", lat: 38.36869, lng: 34.03698 },
  { id: 69, name: "BAYBURT", lat: 40.255169, lng: 40.22488 },
  { id: 70, name: "KARAMAN", lat: 37.17593, lng: 33.228748 },
  { id: 71, name: "KIRIKKALE", lat: 39.846821, lng: 33.515251 },
  { id: 72, name: "BATMAN", lat: 37.881168, lng: 41.13509 },
  { id: 73, name: "ŞIRNAK", lat: 37.5163889, lng: 42.4611111 },
  { id: 74, name: "BARTIN", lat: 41.6344444, lng: 32.3375 },
  { id: 75, name: "ARDAHAN", lat: 41.110481, lng: 42.702171 },
  { id: 76, name: "IĞDIR", lat: 39.9166667, lng: 44.0333333 },
  { id: 77, name: "YALOVA", lat: 40.65, lng: 29.2666667 },
  { id: 78, name: "KARABÜK", lat: 41.2, lng: 32.6333333 },
  { id: 79, name: "KİLİS", lat: 36.718399, lng: 37.12122 },
  { id: 80, name: "OSMANİYE", lat: 37.06805, lng: 36.261589 },
  { id: 81, name: "DÜZCE", lat: 40.843849, lng: 31.15654 },
];

myArray_2 = [
  { lat: 38.324311, lng: 26.303215 },
  { lat: 36.62167, lng: 29.11639 },
  { lat: 36.20176, lng: 29.63766 },
  { lat: 36.3812943, lng: 30.2027244 },
];

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
  calculateAndDisplayRoute(
    directionsService,
    directionsDisplay,
 
  );
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
  calculateAndDisplayRoute(
    directionsService,
    directionsDisplay,
 
  );
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
  calculateAndDisplayRoute(
    directionsService,
    directionsDisplay,
 
  );
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
  calculateAndDisplayRoute(
    directionsService,
    directionsDisplay,
 
  );
});

start=myArray[baslangic];
console.log("start",start);
end=myArray_2[son];
console.log("end",end);

function initMap() {
     myOptions = {
       zoom: 7,
       center: myArray[baslangic],
     },
     console.log("origin",myArray[baslangic]),
     console.log("destination",myArray_2[son]),
     map = new google.maps.Map(document.getElementById("map"), myOptions),
     // Instantiate a directions service.
     directionsService = new google.maps.DirectionsService(),
     directionsDisplay = new google.maps.DirectionsRenderer({
       map: map,
     }), 
   console.log(origin);
   // get route from A to B
   calculateAndDisplayRoute(
     directionsService,
     directionsDisplay,
  
   );
 }
 function calculateAndDisplayRoute(
   directionsService,
   directionsDisplay,
 ) {
   directionsService.route(
     {
       origin:myArray[baslangic],
       destination: myArray_2[son],
       avoidTolls: true,
       avoidHighways: false,
       travelMode: google.maps.TravelMode.DRIVING,
     },
     function (response, status) {
       if (status == google.maps.DirectionsStatus.OK) {
         directionsDisplay.setDirections(response);
       } else {
         window.alert("Directions request failed due to " + status);
       }
     }
   );
 }
document.getElementById("rota").addEventListener("click",function(){
 window.open(
           "https://www.google.com/maps/dir/'" +
             myArray[baslangic]["lat"] +
             "," +
             myArray[baslangic]["lng"] +
             "'/'" +
             myArray_2[son]["lat"] +
             "," +
            myArray_2[son]["lng"] +
             "'/",
           "_blank"
         );
         console.log(  myArray[baslangic]["lat"] )
})


