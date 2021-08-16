var fethiye = 0;
var kaş = 0;
var çeşme = 0;
var çıralı = 0;
var isim = "";
var sehir = "";
var çıralı_text = `<span style="color:red">JHHHGHHJKLJK,</span>  senin kafa dinleyip kamp yapmaya, doğayla iç içe olmaya ihtiyacın var dostum!
`;
var çıralı_text_2 = ` O yüzden rotanı Çıralı’ya çevirmelisin. Sakin ve mitolojik <br>
dokusuyla doğayı yaşarken, milli parklarında biraz mitolojik öykülerini dinlersin. <br>
Olympos’ta Zeus’tan çalınan sönmeyen ateşi görür, saklı koylarında kafanı dinlersin.
 `;
var fethiye_text = `<span style="color:red">JHHHGHHJKLJK,</span> sen sıkılmışsın, hem de çok! Bir fırsat olsa 
kendimi nerelerden atsam diyorsun, biz 
de sana yerini söylüyoruz: Babadağ’dan
 paraşütle!
`;
var fethiye_text_2 = `Ah o turkuaz suların üstünde süzülmek gibisi var mı? Gizli koylarını <br> keşfetmek gibisi? Öyle bir yer ki hem havada hem denizde eğlenceli!</div>
`;

var kaş_text = `<span style="color:red">JHHHGHHJKLJK,</span> sen bu kış hayatı sorgulamışsın, biraz derinlere dalmaya ihtiyacın var. Tamam tamam o kadar da değil, denize dalsan yeter, hem de nasıl yeter bir bilsen! `;
var kaş_text_2 = `Tertemiz denizin altında, berrak suların içinde yatan tarihi keşif, sana eşlik <br>
eden caretta carettalar! Biz duramıyoruz, haydi sen de hazırlan, dalıyoruz!`;
var çeşme_text = `<span style="color:red">JHHHGHHJKLJK,</span> senin şu birikmiş enerjini atmaya ihtiyacın var dostum, bırak dalgalar seni alsın götürsün!`;
var çeşme_text_2 = `Alaçatı’da rüzgar sörfü yaparken üzerinde birikmiş tüm rehaveti atarsın,<br>
akşamları biraz takı toka bakarsın. E gitmişken de bir kumru patlatırsın!`;

document.getElementById("ilerle").addEventListener("click", function () {
  isim = document.getElementById("name-input").value;
  sehir = document.getElementById("city").value;
  if(isim!=""){
    if(sehir!=""){
 document.getElementById("container-1").style.display = "none";
  document.getElementById("container-2").style.display = "block";
    }
  }
  else{

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
  document.getElementById("text-1").innerHTML=isim+", Rotan:";
  if (çeşme >= 2) {
    document.getElementById("container-5").style.background =
      "url(/img/çeşme.png)";
      document.getElementById("text-4").innerHTML = çeşme_text;
      document.getElementById("text-5").innerHTML = çeşme_text_2;
      document.getElementById("text-2").innerHTML = "Çeşme";


  } else if (çıralı >= 2) {
   
    document.getElementById("container-5").style.background =
      "url(/img/çıralı.png)";
      document.getElementById("text-4").innerHTML = çıralı_text;
      document.getElementById("text-5").innerHTML = çıralı_text_2;
      document.getElementById("text-2").innerHTML = "Çıralı";

  } else if (fethiye >= 2) {
    
    document.getElementById("container-5").style.background =
      "url(/img/fethiye.png)";
      document.getElementById("text-4").innerHTML = fethiye_text;
      document.getElementById("text-5").innerHTML = fethiye_text_2;
      document.getElementById("text-2").innerHTML = "Fethiye";

  } else if (kaş >= 2) {
  
    document.getElementById("container-5").style.background =
      "url(/img/kaş.png)";
      document.getElementById("text-4").innerHTML=kaş_text;
      document.getElementById("text-5").innerHTML=kaş_text_2;
      document.getElementById("text-2").innerHTML = "Kaş";

  } else {
  
    document.getElementById("container-5").style.background =
      "url(/img/kaş.png)";
      document.getElementById("text-4").innerHTML=kaş_text;
      document.getElementById("text-5").innerHTML=kaş_text_2;
      document.getElementById("text-2").innerHTML = "Kaş";

  }
});
document.getElementById("next-10").addEventListener("click", function () {
  fethiye = fethiye + 1;
  document.getElementById("container-4").style.display = "none";
  document.getElementById("container-5").style.display = "block";
  document.getElementById("text-1").innerHTML=isim+", Rotan:";
  if (çeşme >= 2) {
    document.getElementById("container-5").style.background =
      "url(/img/çeşme.png)";
    document.getElementById("text-4").innerHTML = çeşme_text;
    document.getElementById("text-5").innerHTML = çeşme_text_2;
    document.getElementById("text-2").innerHTML = "Çeşme";

  } else if (çıralı >= 2) {
    document.getElementById("container-5").style.background =
      "url(/img/çıralı.png)";
    document.getElementById("text-4").innerHTML = çıralı_text;
    document.getElementById("text-5").innerHTML = çıralı_text_2;
    document.getElementById("text-2").innerHTML = "Çıralı";

  } else if (fethiye >= 2) {
    document.getElementById("container-5").style.background =
      "url(/img/fethiye.png)";
    document.getElementById("text-4").innerHTML = fethiye_text;
    document.getElementById("text-5").innerHTML = fethiye_text_2;
    document.getElementById("text-2").innerHTML = "Fethiye";

  } else if (kaş >= 2) {
    document.getElementById("container-5").style.background =
      "url(/img/kaş.png)";
    document.getElementById("text-4").innerHTML = kaş_text;
    document.getElementById("text-5").innerHTML = kaş_text_2;
    document.getElementById("text-2").innerHTML = "Kaş";

  } else {
    document.getElementById("container-5").style.background =
      "url(/img/fethiye.png)";
    document.getElementById("text-4").innerHTML = fethiye_text;
    document.getElementById("text-5").innerHTML = fethiye_text_2;
    document.getElementById("text-2").innerHTML = "Fethiye";

  }
});
document.getElementById("next-11").addEventListener("click", function () {
  çeşme = çeşme + 1;
  document.getElementById("container-4").style.display = "none";
  document.getElementById("container-5").style.display = "block";
  document.getElementById("text-1").innerHTML=isim+", Rotan:";
  if (çeşme >= 2) {
    document.getElementById("container-5").style.background =
      "url(/img/çeşme.png)";
    document.getElementById("text-4").innerHTML = çeşme_text;
    document.getElementById("text-5").innerHTML = çeşme_text_2;
    document.getElementById("text-2").innerHTML = "Çeşme";

  } else if (çıralı >= 2) {
    document.getElementById("container-5").style.background =
      "url(/img/çıralı.png)";
    document.getElementById("text-4").innerHTML = çıralı_text;
    document.getElementById("text-5").innerHTML = çıralı_text_2;
    document.getElementById("text-2").innerHTML = "Çıralı";

  } else if (fethiye >= 2) {
    document.getElementById("container-5").style.background =
      "url(/img/fethiye.png)";
    document.getElementById("text-4").innerHTML = fethiye_text;
    document.getElementById("text-5").innerHTML = fethiye_text_2;
    document.getElementById("text-2").innerHTML = "Fethiye";

  } else if (kaş >= 2) {
    document.getElementById("container-5").style.background =
      "url(/img/kaş.png)";
    document.getElementById("text-4").innerHTML = kaş_text;
    document.getElementById("text-5").innerHTML = kaş_text_2;
    document.getElementById("text-2").innerHTML = "Kaş";

  } else {
    document.getElementById("container-5").style.background =
      "url(/img/çeşme.png)";
    document.getElementById("text-4").innerHTML = çeşme_text;
    document.getElementById("text-5").innerHTML = çeşme_text_2;
    document.getElementById("text-2").innerHTML = "Çeşme";

  }
});
document.getElementById("next-12").addEventListener("click", function () {
  çıralı = çıralı + 1;
  document.getElementById("container-4").style.display = "none";
  document.getElementById("container-5").style.display = "block";
  document.getElementById("text-1").innerHTML=isim+", Rotan:";
  if (çeşme >= 2) {
    document.getElementById("container-5").style.background =
      "url(/img/çeşme.png)";
    document.getElementById("text-4").innerHTML = çeşme_text;
    document.getElementById("text-5").innerHTML = çeşme_text_2;
    document.getElementById("text-2").innerHTML = "Çeşme";
  } else if (çıralı >= 2) {
    document.getElementById("container-5").style.background =
      "url(/img/çıralı.png)";
    document.getElementById("text-4").innerHTML = çıralı_text;
    document.getElementById("text-5").innerHTML = çıralı_text_2;
    document.getElementById("text-2").innerHTML = "Çıralı";

  } else if (fethiye >= 2) {
    document.getElementById("container-5").style.background =
      "url(/img/fethiye.png)";
    document.getElementById("text-4").innerHTML = fethiye_text;
    document.getElementById("text-5").innerHTML = fethiye_text_2;
    document.getElementById("text-2").innerHTML = "Fethiye";

  } else if (kaş >= 2) {
    document.getElementById("container-5").style.background =
      "url(/img/kaş.png)";
    document.getElementById("text-4").innerHTML = kaş_text;
    document.getElementById("text-5").innerHTML = kaş_text_2;
    document.getElementById("text-2").innerHTML = "Kaş";

  } else {
    document.getElementById("container-5").style.background =
      "url(/img/çıralı.png)";
    document.getElementById("text-4").innerHTML = çıralı_text;
    document.getElementById("text-5").innerHTML = çıralı_text_2;
    document.getElementById("text-2").innerHTML = "Çıralı";

  }
});
