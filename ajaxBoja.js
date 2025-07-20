
function promeniBoju(IDboja) {

    var r = document.querySelector(':root');
    var rs = getComputedStyle(r);

    switch(IDboja){
        case 0:

        r.style.setProperty('--primarna', ' rgb(255, 212, 133)');
        r.style.setProperty('--sekundarna', ' rgb(107, 60, 7)');
        r.style.setProperty('--ternarna', ' rgb(197, 140, 74)');
        break;

        case 1:
        r.style.setProperty('--primarna', ' rgba(159, 169, 255, 1)');
        r.style.setProperty('--sekundarna', ' rgba(0, 76, 255, 1)');
        r.style.setProperty('--ternarna', ' rgba(26, 27, 136, 1)');
        break;

        case 2:
        r.style.setProperty('--primarna', ' rgba(133, 255, 160, 1)');
        r.style.setProperty('--sekundarna', ' rgba(11, 141, 40, 1)');
        r.style.setProperty('--ternarna', ' rgba(7, 82, 23, 1)');
        break;

        case 3:
        r.style.setProperty('--primarna', ' rgba(19, 19, 19, 1)');
        r.style.setProperty('--sekundarna', ' rgba(255, 255, 255, 1)');
        r.style.setProperty('--ternarna', ' rgba(48, 48, 48, 1)');
        break;

        default:
        break;
    }
}
