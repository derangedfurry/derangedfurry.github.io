

async function getdata() {
    var tabela = document.getElementById("tabela");
    fetch('studenti.json')
.then(async odgovor => {
    if(odgovor.ok) {
        console.log('ok');
        const json = await odgovor.json();
        tabela.innerHTML = tabelaJSON(json);
    } else {
        console.log('not ok');
    }
})
}

function tabelaJSON(json){
    
    let cols = Object.keys(json[0]);
    let headerRow = cols.map(col => `<th>${col}</th>`).join("");

    let rows = json.map(row => {
    let tds = cols.map(col => `<td>${row[col]}</td>`).join("");
      return `<tr>${tds}</tr>`;
    }).join("");

  const table = `
	<table>
		<thead>
			<tr>${headerRow}</tr>
		<thead>
		<tbody>
			${rows}
		<tbody>
	<table>`;

  return table;
}
