// ==========================================
// Sarah's Journey
// Version 0.10.0
// ==========================================

console.log("💜 Sarah's Journey gestartet");

// Standarddaten
const appData = {
  currentWeight: 62.0,
  goalWeight: 59.0,
  calories: 0,
  calorieGoal: 1500,
  protein: 0,
  proteinGoal: 125,
  water: 0,
  waterGoal: 3,
  steps: 0,
  stepGoal: 10000
};

// Daten speichern
function saveData() {
  localStorage.setItem(
    "sarahJourney",
    JSON.stringify(appData)
  );
}

// Daten laden
function loadData() {

  const saved =
    localStorage.getItem("sarahJourney");

  if (saved) {
    Object.assign(appData, JSON.parse(saved));
  }
}

// App starten
loadData();

console.log(appData);

// Service Worker registrieren
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js");
  });
}