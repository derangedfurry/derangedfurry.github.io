const stranice = document.querySelectorAll("button[data-stranica]")
const glavno = document.getElementById("main");

function ucitajStranicu(stranica) {

  if(sessionStorage.getItem("stranica")!=null){
      stranica = sessionStorage.getItem("stranica");
  }

  if(stranica=="semanticki"){
    UcitajDugmad(stranica);
    ObrisiDugmad("tekst");
  } else if(stranica=="tekst") {
    UcitajDugmad(stranica);
    ObrisiDugmad("semanticki");
  } else {
    ObrisiDugmad(stranica);
  }

  fetch('javascript/' +stranica+ '.html')
    .then(odgovor=> {
      if (odgovor.ok) {
        return odgovor.text();
      } else {
        console.log(odgovor.ok);
        throw new Error('Greska pri ucitavanju stranice');
      }
    })
    .then(tekst=> {
      const sadrzaj = document.getElementById('main');
      sadrzaj.innerHTML=tekst;
      sessionStorage.setItem("stranica", stranica);
    })
    .catch(() => {
      sessionStorage.setItem("stranica", "uvod");
      ucitajStranicu();
      //alert('error Greska Pri Ucitavanju.');
    });
  
}

console.log(stranice);
stranice.forEach(dugme => {
  dugme.addEventListener('click', dogadjaj => {
    dogadjaj.preventDefault();
    const stranica = dogadjaj.target.dataset.stranica;
    sessionStorage.setItem("stranica", stranica);
    ucitajStranicu(stranica);
  });
});


const divDugmadSem = document.getElementById("semanticki-dugmad");
const divDugmadTekst = document.getElementById("tekst-dugmad");
function UcitajDugmad(stranica){
  if(stranica=="semanticki"){
    divDugmadSem.style.display = "flex";
  }
  if(stranica=="tekst"){
    divDugmadTekst.style.display = "flex";
  }
}

function ObrisiDugmad(stranica){
  
  /*if(stranica=="semanticki"){
    divDugmadSem.style.display = "none";
  }
  else if(stranica=="tekst"){
    divDugmadTekst.style.display = "none";
  } else {
    divDugmadTekst.style.display = "none";
    divDugmadSem.style.display = "none";
  }*/
}



function Funkcija() {

document.getElementById("paragraf").style.fontSize = "25px";

document.getElementById("paragraf").style.color = "red";

document.getElementById("paragraf").style.backgroundColor = "yellow";

}