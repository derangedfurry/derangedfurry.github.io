document.addEventListener("DOMContentLoaded", Ucitano());
function Ucitano(){
    UcitajFont();
    ProveriFont();
}

let Animacija=true;
function MegaMeniKurs() {
  const KursDugme = document.getElementById("MegaMeniKurs");

  let x = window.matchMedia("screen and (min-width: 700px)");


  if(x.matches){
    
    KursDugme.style.display = "flex";

    if(Animacija){
        KursDugme.style.animation="napred 1s forwards";
        document.getElementById("MegaMeniKurs").style.userSelect = "auto";
        Animacija=false;

    } else {

        KursDugme.style.animation="nazad 1s forwards";
        document.getElementById("MegaMeniKurs").style.userSelect = "none";
        Animacija=true;
        
    }
    
  } else
  {
    KursDugme.style.display = "none";
  }

}



function PostaviStranicu(stranica){
    sessionStorage.setItem("stranica",stranica);
}









function PovecajFont() {

    UcitajFont();


    let brojPutaPromenjenFont = parseFloat(uzmiKolacic("font"));
    
    if((brojPutaPromenjenFont+1)>10){
        return;

    } else {
        varijable.style.setProperty('--velicina-fonta-glavni-h1',Math.round((velicinaFontaGlavnih1+0.1)*100)/100+"em");
        varijable.style.setProperty('--velicina-fonta-glavni-h2',Math.round((velicinaFontaGlavnih2+0.1)*100)/100+"em");
        varijable.style.setProperty('--velicina-fonta-glavni-a',Math.round((velicinaFontaGlavnia+0.1)*100)/100+"em");
        varijable.style.setProperty('--velicina-fonta-glavni-dugme',Math.round((velicinaFontaGlavniDugme+0.1)*100)/100+"em");
        varijable.style.setProperty('--velicina-fonta-kursevi-h1',Math.round((velicinaFontaKursevih1+0.1)*100)/100+"em");
        varijable.style.setProperty('--velicina-fonta-kursevi-h2',Math.round((velicinaFontaKursevih2+0.1)*100)/100+"em");
        varijable.style.setProperty('--velicina-fonta-kursevi-p',Math.round((velicinaFontaKursevip+0.1)*100)/100+"em");
        varijable.style.setProperty('--velicina-fonta-kursevi-a',Math.round((velicinaFontaKursevia+0.1)*100)/100+"em");
        varijable.style.setProperty('--velicina-fonta-kursevi-dugme',Math.round((velicinaFontaKurseviDugme+0.1)*100)/100+"em");
        varijable.style.setProperty('--velicina-fonta-o-nama-kontakt-h1',Math.round((velicinaFontaONamaKursevih1+0.1)*100)/100+"em");
        varijable.style.setProperty('--velicina-fonta-o-nama-kontakt-p',Math.round((velicinaFontaONamaKursevip+0.1)*100)/100+"em");
        varijable.style.setProperty('--velicina-fonta-forma-labela',Math.round((velicinaFontaFormaLabela+0.1)*100)/100+"em");
        varijable.style.setProperty('--velicina-fonta-forma-unos',Math.round((velicinaFontaFormaUnos+0.1)*100)/100+"em");
        varijable.style.setProperty('--velicina-fonta-forma-tekst',Math.round((velicinaFontaFormaTekst+0.1)*100)/100+"em");

        varijable.style.setProperty('--velicina-fonta-zaglavlja-gornji-deo',Math.round((velicinaFontaZaglavljaGornjiDeo+0.1)*100)/100+"em");
        varijable.style.setProperty('--velicina-fonta-zaglavlja-donji-deo',Math.round((velicinaFontaZaglavljaDonjiDeo+0.1)*100)/100+"em");
        varijable.style.setProperty('--velicina-fonta-zaglavlja-dugmad',Math.round((velicinaFontaZaglavljaDugmad+0.1)*100)/100+"em");
        
        varijable.style.setProperty('--velicina-font-odeljak-dugme',Math.round((velicinaFontaOdeljakDugmad+0.1)*100)/100+"em");
        varijable.style.setProperty('--velicina-font-odeljak-h1',Math.round((velicinaFontaOdeljakh1+0.1)*100)/100+"em");
        varijable.style.setProperty('--velicina-font-odeljak-a',Math.round((velicinaFontaOdeljaka+0.1)*100)/100+"em");


        varijable.style.setProperty('--velicina-font-podnozje-dugme',Math.round((velicinaFontaPodnozjeDugme+0.1)*100)/100+"em");
        varijable.style.setProperty('--velicina-font-podnozje-h1',Math.round((velicinaFontaPodnozjeh1+0.1)*100)/100+"em");
        varijable.style.setProperty('--velicina-font-podnozje-a',Math.round((velicinaFontaPodnozjea+0.1)*100)/100+"em");
        varijable.style.setProperty('--velicina-font-podnozje-sadrzaj-h1',Math.round((velicinaFontaPodnozjeSadrzajh1+0.1)*100)/100+"em");
        varijable.style.setProperty('--velicina-font-podnozje-sadrzaj-h2',Math.round((velicinaFontaPodnozjeSadrzajh2+0.1)*100)/100+"em");
        varijable.style.setProperty('--velicina-font-podnozje-sadrzaj-a',Math.round((velicinaFontaPodnozjeSadrzaja+0.1)*100)/100+"em");




        brojPutaPromenjenFont++;
    }
    
    postaviKolacic("font", brojPutaPromenjenFont, 30);
    console.log("font je "+ uzmiKolacic("font"));
    UcitajFont();
    console.log(velicinaFontaGlavnih1);
    
}

function SmanjiFont() {

    
    UcitajFont();

    let brojPutaPromenjenFont = parseFloat(uzmiKolacic("font"));
    
    if((brojPutaPromenjenFont-1)<-10){
        return;


    } else {
        varijable.style.setProperty('--velicina-fonta-glavni-h1',Math.round((velicinaFontaGlavnih1-0.1)*100)/100+"em");
        varijable.style.setProperty('--velicina-fonta-glavni-h2',Math.round((velicinaFontaGlavnih2-0.1)*100)/100+"em");
        varijable.style.setProperty('--velicina-fonta-glavni-a',Math.round((velicinaFontaGlavnia-0.1)*100)/100+"em");
        varijable.style.setProperty('--velicina-fonta-glavni-dugme',Math.round((velicinaFontaGlavniDugme-0.1)*100)/100+"em");
        varijable.style.setProperty('--velicina-fonta-kursevi-h1',Math.round((velicinaFontaKursevih1-0.1)*100)/100+"em");
        varijable.style.setProperty('--velicina-fonta-kursevi-h2',Math.round((velicinaFontaKursevih2-0.1)*100)/100+"em");
        varijable.style.setProperty('--velicina-fonta-kursevi-p',Math.round((velicinaFontaKursevip-0.1)*100)/100+"em");
        varijable.style.setProperty('--velicina-fonta-kursevi-a',Math.round((velicinaFontaKursevia-0.1)*100)/100+"em");
        varijable.style.setProperty('--velicina-fonta-kursevi-dugme',Math.round((velicinaFontaKurseviDugme-0.1)*100)/100+"em");
        varijable.style.setProperty('--velicina-fonta-o-nama-kontakt-h1',Math.round((velicinaFontaONamaKursevih1-0.1)*100)/100+"em");
        varijable.style.setProperty('--velicina-fonta-o-nama-kontakt-p',Math.round((velicinaFontaONamaKursevip-0.1)*100)/100+"em");
        varijable.style.setProperty('--velicina-fonta-forma-labela',Math.round((velicinaFontaFormaLabela-0.1)*100)/100+"em");
        varijable.style.setProperty('--velicina-fonta-forma-unos',Math.round((velicinaFontaFormaUnos-0.1)*100)/100+"em");
        varijable.style.setProperty('--velicina-fonta-forma-tekst',Math.round((velicinaFontaFormaTekst-0.1)*100)/100+"em");

        varijable.style.setProperty('--velicina-fonta-zaglavlja-gornji-deo',Math.round((velicinaFontaZaglavljaGornjiDeo-0.1)*100)/100+"em");
        varijable.style.setProperty('--velicina-fonta-zaglavlja-donji-deo',Math.round((velicinaFontaZaglavljaDonjiDeo-0.1)*100)/100+"em");
        varijable.style.setProperty('--velicina-fonta-zaglavlja-dugmad',Math.round((velicinaFontaZaglavljaDugmad-0.1)*100)/100+"em");

        varijable.style.setProperty('--velicina-font-odeljak-dugme',Math.round((velicinaFontaOdeljakDugmad-0.1)*100)/100+"em");
        varijable.style.setProperty('--velicina-font-odeljak-h1',Math.round((velicinaFontaOdeljakh1-0.1)*100)/100+"em");
        varijable.style.setProperty('--velicina-font-odeljak-a',Math.round((velicinaFontaOdeljaka-0.1)*100)/100+"em");

        varijable.style.setProperty('--velicina-font-podnozje-dugme',Math.round((velicinaFontaPodnozjeDugme-0.1)*100)/100+"em");
        varijable.style.setProperty('--velicina-font-podnozje-h1',Math.round((velicinaFontaPodnozjeh1-0.1)*100)/100+"em");
        varijable.style.setProperty('--velicina-font-podnozje-a',Math.round((velicinaFontaPodnozjea-0.1)*100)/100+"em");
        varijable.style.setProperty('--velicina-font-podnozje-sadrzaj-h1',Math.round((velicinaFontaPodnozjeSadrzajh1-0.1)*100)/100+"em");
        varijable.style.setProperty('--velicina-font-podnozje-sadrzaj-h2',Math.round((velicinaFontaPodnozjeSadrzajh2-0.1)*100)/100+"em");
        varijable.style.setProperty('--velicina-font-podnozje-sadrzaj-a',Math.round((velicinaFontaPodnozjeSadrzaja-0.1)*100)/100+"em");




        brojPutaPromenjenFont--;
    }
    
    postaviKolacic("font", brojPutaPromenjenFont, 30);
    console.log("font je "+ uzmiKolacic("font"));
    UcitajFont();
    console.log(velicinaFontaGlavnih1);
}








function ProveriFont(){
    let font = uzmiKolacic("font");
    console.log("font = " + font);
    if(uzmiKolacic("font")!=null && uzmiKolacic("font")!=0){
        console.log("proverava font");
        UcitajFont();
        varijable.style.setProperty('--velicina-fonta-glavni-h1',Math.round((velicinaFontaGlavnih1+0.1*font)*100)/100+"em");
        varijable.style.setProperty('--velicina-fonta-glavni-h1',Math.round((velicinaFontaGlavnih1+0.1*font)*100)/100+"em");
        varijable.style.setProperty('--velicina-fonta-glavni-h2',Math.round((velicinaFontaGlavnih2+0.1*font)*100)/100+"em");
        varijable.style.setProperty('--velicina-fonta-glavni-a',Math.round((velicinaFontaGlavnia+0.1*font)*100)/100+"em");
        varijable.style.setProperty('--velicina-fonta-glavni-dugme',Math.round((velicinaFontaGlavniDugme+0.1*font)*100)/100+"em");
        varijable.style.setProperty('--velicina-fonta-kursevi-h1',Math.round((velicinaFontaKursevih1+0.1*font)*100)/100+"em");
        varijable.style.setProperty('--velicina-fonta-kursevi-h2',Math.round((velicinaFontaKursevih2+0.1*font)*100)/100+"em");
        varijable.style.setProperty('--velicina-fonta-kursevi-p',Math.round((velicinaFontaKursevip+0.1*font)*100)/100+"em");
        varijable.style.setProperty('--velicina-fonta-kursevi-a',Math.round((velicinaFontaKursevia+0.1*font)*100)/100+"em");
        varijable.style.setProperty('--velicina-fonta-kursevi-dugme',Math.round((velicinaFontaKurseviDugme+0.1*font)*100)/100+"em");
        varijable.style.setProperty('--velicina-fonta-o-nama-kontakt-h1',Math.round((velicinaFontaONamaKursevih1+0.1*font)*100)/100+"em");
        varijable.style.setProperty('--velicina-fonta-o-nama-kontakt-p',Math.round((velicinaFontaONamaKursevip+0.1*font)*100)/100+"em");
        varijable.style.setProperty('--velicina-fonta-forma-labela',Math.round((velicinaFontaFormaLabela+0.1*font)*100)/100+"em");
        varijable.style.setProperty('--velicina-fonta-forma-unos',Math.round((velicinaFontaFormaUnos+0.1*font)*100)/100+"em");
        varijable.style.setProperty('--velicina-fonta-forma-tekst',Math.round((velicinaFontaFormaTekst+0.1*font)*100)/100+"em");

        varijable.style.setProperty('--velicina-fonta-zaglavlja-gornji-deo',Math.round((velicinaFontaZaglavljaGornjiDeo+0.1*font)*100)/100+"em");
        varijable.style.setProperty('--velicina-fonta-zaglavlja-donji-deo',Math.round((velicinaFontaZaglavljaDonjiDeo+0.1*font)*100)/100+"em");
        varijable.style.setProperty('--velicina-fonta-zaglavlja-dugmad',Math.round((velicinaFontaZaglavljaDugmad+0.1*font)*100)/100+"em");

        varijable.style.setProperty('--velicina-font-odeljak-dugme',Math.round((velicinaFontaOdeljakDugmad+0.1*font)*100)/100+"em");
        varijable.style.setProperty('--velicina-font-odeljak-h1',Math.round((velicinaFontaOdeljakh1+0.1*font)*100)/100+"em");
        varijable.style.setProperty('--velicina-font-odeljak-a',Math.round((velicinaFontaOdeljaka+0.1*font)*100)/100+"em");

        varijable.style.setProperty('--velicina-font-podnozje-dugme',Math.round((velicinaFontaPodnozjeDugme+0.1*font)*100)/100+"em");
        varijable.style.setProperty('--velicina-font-podnozje-h1',Math.round((velicinaFontaPodnozjeh1+0.1*font)*100)/100+"em");
        varijable.style.setProperty('--velicina-font-podnozje-a',Math.round((velicinaFontaPodnozjea+0.1*font)*100)/100+"em");
        varijable.style.setProperty('--velicina-font-podnozje-sadrzaj-h1',Math.round((velicinaFontaPodnozjeSadrzajh1+0.1*font)*100)/100+"em");
        varijable.style.setProperty('--velicina-font-podnozje-sadrzaj-h2',Math.round((velicinaFontaPodnozjeSadrzajh2+0.1*font)*100)/100+"em");
        varijable.style.setProperty('--velicina-font-podnozje-sadrzaj-a',Math.round((velicinaFontaPodnozjeSadrzaja+0.1*font)*100)/100+"em");
    

    
    }
    UcitajFont();
    console.log(velicinaFontaGlavnih1);
}

function UcitajFont(){
    varijable = document.querySelector(':root');
    varijableStil = getComputedStyle(varijable);
    velicinaFontaGlavnih1 = parseFloat(varijableStil.getPropertyValue('--velicina-fonta-glavni-h1').replaceAll("em",""));
    velicinaFontaGlavnih2 = parseFloat(varijableStil.getPropertyValue('--velicina-fonta-glavni-h2').replaceAll("em",""));
    velicinaFontaGlavnia = parseFloat(varijableStil.getPropertyValue('--velicina-fonta-glavni-a').replaceAll("em",""));
    velicinaFontaGlavniDugme = parseFloat(varijableStil.getPropertyValue('--velicina-fonta-glavni-dugme').replaceAll("em",""));
    velicinaFontaKursevih1 = parseFloat(varijableStil.getPropertyValue('--velicina-fonta-kursevi-h1').replaceAll("em",""));
    velicinaFontaKursevih2 = parseFloat(varijableStil.getPropertyValue('--velicina-fonta-kursevi-h2').replaceAll("em",""));
    velicinaFontaKursevip = parseFloat(varijableStil.getPropertyValue('--velicina-fonta-kursevi-p').replaceAll("em",""));
    velicinaFontaKursevia = parseFloat(varijableStil.getPropertyValue('--velicina-fonta-kursevi-a').replaceAll("em",""));
    velicinaFontaKurseviDugme = parseFloat(varijableStil.getPropertyValue('--velicina-fonta-kursevi-dugme').replaceAll("em",""));
    velicinaFontaONamaKursevih1 = parseFloat(varijableStil.getPropertyValue('--velicina-fonta-o-nama-kontakt-h1').replaceAll("em",""));
    velicinaFontaONamaKursevip = parseFloat(varijableStil.getPropertyValue('--velicina-fonta-o-nama-kontakt-p').replaceAll("em",""));
    velicinaFontaFormaLabela = parseFloat(varijableStil.getPropertyValue('--velicina-fonta-forma-labela').replaceAll("em",""));
    velicinaFontaFormaUnos = parseFloat(varijableStil.getPropertyValue('--velicina-fonta-forma-unos').replaceAll("em",""));
    velicinaFontaFormaTekst = parseFloat(varijableStil.getPropertyValue('--velicina-fonta-forma-tekst').replaceAll("em",""));

    velicinaFontaZaglavljaGornjiDeo = parseFloat(varijableStil.getPropertyValue('--velicina-fonta-zaglavlja-gornji-deo').replaceAll("em",""));
    velicinaFontaZaglavljaDonjiDeo = parseFloat(varijableStil.getPropertyValue('--velicina-fonta-zaglavlja-donji-deo').replaceAll("em",""));
    velicinaFontaZaglavljaDugmad = parseFloat(varijableStil.getPropertyValue('--velicina-fonta-zaglavlja-dugmad').replaceAll("em",""));

    velicinaFontaOdeljakDugmad = parseFloat(varijableStil.getPropertyValue('--velicina-font-odeljak-dugme').replaceAll("em",""));
    velicinaFontaOdeljakh1 = parseFloat(varijableStil.getPropertyValue('--velicina-font-odeljak-h1').replaceAll("em",""));
    velicinaFontaOdeljaka = parseFloat(varijableStil.getPropertyValue('--velicina-font-odeljak-a').replaceAll("em",""));
     
    velicinaFontaPodnozjeDugme = parseFloat(varijableStil.getPropertyValue('--velicina-font-podnozje-dugme').replaceAll("em",""));
    velicinaFontaPodnozjeh1 = parseFloat(varijableStil.getPropertyValue('--velicina-font-podnozje-h1').replaceAll("em",""));
    velicinaFontaPodnozjea = parseFloat(varijableStil.getPropertyValue('--velicina-font-podnozje-a').replaceAll("em",""));
    velicinaFontaPodnozjeSadrzajh1 = parseFloat(varijableStil.getPropertyValue('--velicina-font-podnozje-sadrzaj-h1').replaceAll("em",""));
    velicinaFontaPodnozjeSadrzajh2 = parseFloat(varijableStil.getPropertyValue('--velicina-font-podnozje-sadrzaj-h2').replaceAll("em",""));
    velicinaFontaPodnozjeSadrzaja = parseFloat(varijableStil.getPropertyValue('--velicina-font-podnozje-sadrzaj-a').replaceAll("em",""));

}





const link = document.getElementById("tema");

window.onload = function () {
    var tema = uzmiKolacic("tema");
    var fontVelicina = uzmiKolacic("font");
    console.log(tema);

    if(tema == null){
        link.setAttribute("href", "../resursi/css/stil/svetli/stil-svetli.css");
    }
    if(tema === "../resursi/css/stil/svetli/stil-svetli.css"){
        link.setAttribute("href", "../resursi/css/stil/svetli/stil-svetli.css");
    }

    if(tema === "../resursi/css/stil/tamni/stil-tamni.css"){
        link.setAttribute("href", "../resursi/css/stil/tamni/stil-tamni.css");
    }

}

function PromeniTemu(tema) {

    const novaTema = link.getAttribute("href") === "../resursi/css/stil/tamni/stil-tamni.css" ? "../resursi/css/stil/svetli/stil-svetli.css" : "../resursi/css/stil/tamni/stil-tamni.css";
    
    console.log("nova tema "+ novaTema);
    link.setAttribute("href", novaTema);
    postaviKolacic("tema", novaTema, 30);

}


function postaviKolacic(ime, vrednost, dani) {
    const datum = new Date();
    datum.setTime(datum.getTime() + (dani * 24 * 60 * 60 * 1000));
    document.cookie = `${ime}=${vrednost}; expires=${datum.toUTCString()}; path=/`;
}

function uzmiKolacic(ime) {
    const kolacici = document.cookie.split(';');
    for (let i = 0; i < kolacici.length; i++) {
        let k = kolacici[i].trim();
        if (k.indexOf(ime + "=") === 0) {
            return k.substring((ime + "=").length);
        }
    }
    return null;
}


let OtvorenMeni = false;
function PrikaziMeni(){

    if(!OtvorenMeni){
        let e = document.getElementById("burgermeni");
        e.style.animation = "meni-levo 1.5s forwards";
        e.style.display = "block";
        OtvorenMeni = true;
    } else {
        let e = document.getElementById("burgermeni");
        e.style.animation = "meni-desno 1.5s forwards";    
        OtvorenMeni = false;
    }


}


let OtvorenKursevi = false;
function PrikaziKurseve() {

    if(!OtvorenKursevi){
        let e = document.getElementById("kursevi");
        e.style.animation = "deo-levo 1s forwards";
        e.style.display = "flex";
        OtvorenKursevi = true;
    } else {
        let e = document.getElementById("kursevi");
        e.style.animation = "deo-desno 1s forwards";    
        OtvorenKursevi = false;
    }

}

let OtvorenHTML = false;
function PrikaziHTML() {

    if(!OtvorenHTML){
        let e = document.getElementById("html-deo");
        e.style.animation = "deo-levo 1s forwards";
        e.style.display = "flex";
        OtvorenHTML = true;
    } else {
        let e = document.getElementById("html-deo");
        e.style.animation = "deo-desno 1s forwards";    
        OtvorenHTML = false;
    }

}

let OtvorenCSS = false;
function PrikaziCSS() {

    if(!OtvorenCSS){
        let e = document.getElementById("css-deo");
        e.style.animation = "deo-levo 1s forwards";
        e.style.display = "flex";
        OtvorenCSS = true;
    } else {
        let e = document.getElementById("css-deo");
        e.style.animation = "deo-desno 1s forwards";    
        OtvorenCSS = false;
    }

}

let OtvorenJS = false;
function PrikaziJS() {

    if(!OtvorenJS){
        let e = document.getElementById("js-deo");
        e.style.animation = "meni-levo 1s forwards";
        e.style.display = "flex";
        OtvorenJS = true;
    } else {
        let e = document.getElementById("js-deo");
        e.style.animation = "meni-desno 1s forwards";    
        OtvorenJS = false;
    }

}