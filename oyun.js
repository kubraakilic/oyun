// taş- kagıt-makas oyunu



function oyun(){

    let kelimeler=["taş", "kağıt","makas"];
    let rastgeleKelime= kelimeler[Math.floor(Math.random()*kelimeler.length)];
    console.log(rastgeleKelime);
   
    let oyunDevamEdiyor=true
    let tahminSayisi=0
   
    while(oyunDevamEdiyor){
   
       let kullaniciTahmini=prompt("Taş-Kağıt-Makas?")
   
   
    if(kullaniciTahmini==rastgeleKelime){
           
       alert("doğru tahmin")
       tahminSayisi++
       
   }else{
       tahminSayisi++
       alert("yanlış tahmin")
       oyunDevamEdiyor=false
       
   }
   
   if(tahminSayisi==1){
       alert("tahmin hakkınız kalmadı")
       oyunDevamEdiyor=false
   }
   }
   }
   oyun()