// Create a Date

var d = new Date();

let day = String(d.getDate()).padStart(2, '0');
let month = String(d.getMonth() + 1).padStart(2, '0');
let year = d.getFullYear();

console.log(`${day}/${month}/${year}`);

// tableau des jours de la semainde
var jours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

// Mois en cours
var days = [];

var currentMonth = d.getMonth();
var currentYear = d.getFullYear();

var date = new Date(currentYear, currentMonth, 1);

while (date.getMonth() === currentMonth) {

    let nomJour = jours[date.getDay()];
    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let year = date.getFullYear();

    days.push({
        "jour": nomJour, 
        "date": `${day}/${month}/${year}`
    });

    date.setDate(date.getDate() + 1);
}


// Sélection du container
var container = document.querySelector(".grid-container");

// Créer les éléments grid-item
days.forEach(d => {
    var div = document.createElement("div");
    div.className = "grid-item";

    // Ajouter la classe weekend si samedi ou dimanche
    if (d.jour === "Samedi" || d.jour === "Dimanche") {
        div.classList.add("weekend");
    }
    
    div.innerHTML = `<div class="jour">${d.jour}</div><div class="date">${d.date}</div>`;
    container.appendChild(div);
});