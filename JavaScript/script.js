// Date actuelle affichée
var currentDate = new Date();

// tableau des jours
var jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
var moisNoms = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

// Sélection du container
var container = document.querySelector(".grid-container");

function genererCalendrier(date){

    container.innerHTML = "";

    var currentMonth = date.getMonth();
    var currentYear = date.getFullYear();
    var title = document.querySelector(".nomMois");

    var premierJour = new Date(currentYear, currentMonth, 1);

    var premierJourSemaine = premierJour.getDay(); 

    for (let i = 0; i < premierJourSemaine; i++) {
        var emptyDiv = document.createElement("div");
        emptyDiv.className = "grid-item empty";
        container.appendChild(emptyDiv);
    }

    title.textContent = `${moisNoms[currentMonth]} ${currentYear}`;

    while (premierJour.getMonth() === currentMonth) {

        let nomJour = jours[premierJour.getDay()];
        let day = String(premierJour.getDate()).padStart(2, '0');
        let month = String(premierJour.getMonth() + 1).padStart(2, '0');
        let year = premierJour.getFullYear();

        var div = document.createElement("div");
        div.className = "grid-item";

        if (nomJour === "Samedi" || nomJour === "Dimanche") {
            div.classList.add("weekend");
        }

        div.innerHTML = `
            <div class="jour">${nomJour}</div>
            <div class="date">${day}/${month}/${year}</div>
        `;

        container.appendChild(div);

        // IMPORTANT
        premierJour.setDate(premierJour.getDate() + 1);
    }
}


// Boutons
var btnprec = document.querySelector(".mois-prec");
var btnsuiv = document.querySelector(".mois-suiv");

btnprec.addEventListener("click", function(){
    currentDate.setMonth(currentDate.getMonth() - 1);
    genererCalendrier(currentDate);
});

btnsuiv.addEventListener("click", function(){
    currentDate.setMonth(currentDate.getMonth() + 1);
    genererCalendrier(currentDate);
});


// Génération initiale
genererCalendrier(currentDate);