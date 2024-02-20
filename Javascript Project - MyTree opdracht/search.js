let projecten = [];
projecten.push({
  "Project": "Duurzaam Landbouw",
  "Land": "Indonesie"
});
projecten.push({
  "Project": "Red de regenwouden",
  "Land": "Brazilie"
});
projecten.push({
  "Project": "Minder watergebruik",
  "Land": "Italie"
});
projecten.push({
  "Project": "Red de regenwouden",
  "Land": "Benin Republiek"
});

function zoekProjecten(zoekTekst) {
    zoekTekst = zoekTekst.toUpperCase();

    let myGrid = 
    "<div class='cell'><b>Project</b></div><div class='cell'><b>Land</b></div>";

    for (x = 0; x < projecten.length; x++) {
        if (projecten[x]["Land"].toUpperCase().includes(zoekTekst)) {
            myGrid += '<div class="cell">' + projecten[x].Project + '</div>';
            myGrid += '<div class="cell">' + projecten[x].Land + '</div>';
        }
    }

    document.getElementById('grid').innerHTML = myGrid;
}