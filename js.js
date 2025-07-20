const linkovi = document.querySelectorAll('nav a[data-page]');

function ucitajStranicu(stranica) {
  fetch('stranice/' +stranica+ '.html')
    .then(odgovor=> {
      if (odgovor.ok) {
        return odgovor.text();
      } else {
        throw new Error('Greska pri ucitavanju stranice');
      }
    })
    .then(tekst=> {
      const sadrzaj = document.getElementById('dataInput');
      sadrzaj.innerHTML=tekst;
    })
    .catch(() => {
      alert('error Greska Pri Ucitavanju.');
    });
}

linkovi.forEach(link => {
  link.addEventListener('click', dogadjaj=> {
    dogadjaj.preventDefault();
    const stranica = dogadjaj.target.dataset.page;
    ucitajStranicu(stranica);
  });
});
