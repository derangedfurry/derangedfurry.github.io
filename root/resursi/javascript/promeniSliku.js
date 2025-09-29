window.setInterval(PromeniSliku,4000);


var slika = 0;
const slika1 = document.getElementById("slika1");
const slika2 = document.getElementById("slika2");
const slika3 = document.getElementById("slika3");

function PromeniSliku() {

    if(slika==3){
        slika=0;
    }

    console.log(slika);

    switch(slika){
        case 0:
            slika1.classList.toggle("aktivna");
            slika2.classList.toggle("aktivna");
            break;
        case 1:
            slika2.classList.toggle("aktivna");
            slika3.classList.toggle("aktivna");
            break;
        case 2:
            slika3.classList.toggle("aktivna");
            slika1.classList.toggle("aktivna");
            break;
        default:
            break;
    }

    slika++;
    
}