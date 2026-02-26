// Create a Date

var d = new Date();

let day = String(d.getDate()).padStart(2, '0');
let month = String(d.getMonth() + 1).padStart(2, '0');
let year = d.getFullYear();

console.log(`${day}/${month}/${year}`);

// tableau des jours de la semainde
var jours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

// 100 jours

var today = new Date();
var days = [];

for (let i = 0; i <= 100; i++) {
    let nextDate = new Date(today);
    nextDate.setDate(today.getDate() + i);

    let nomJour = jours[nextDate.getDay()];
    let day = String(nextDate.getDate()).padStart(2, '0');
    let month = String(nextDate.getMonth() + 1).padStart(2, '0');
    let year = nextDate.getFullYear();

    days.push({
        "jour": nomJour, 
        "date": `${day}/${month}/${year}`
    });
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