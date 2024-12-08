// Масив транспорту
let vehicles = [
  { id: 1, name: "Автобус 101", coords: [50.4501, 30.5234] },
  { id: 2, name: "Тролейбус 202", coords: [50.4547, 30.5238] }
];

// Оновлення списку транспорту
function updateVehicleList() {
  const vehiclesList = document.getElementById("vehiclesList");
  vehiclesList.innerHTML = ""; // Очищення списку

  vehicles.forEach(vehicle => {
    const li = document.createElement("li");
    li.textContent = `${vehicle.name} (Широта: ${vehicle.coords[0].toFixed(4)}, Довгота: ${vehicle.coords[1].toFixed(4)})`;
    vehiclesList.appendChild(li);
  });
}

// Додавання нового транспорту
const settingsForm = document.getElementById("settingsForm");
settingsForm.addEventListener("submit", event => {
  event.preventDefault();

  const name = document.getElementById("newTransportName").value.trim();
  const lat = parseFloat(document.getElementById("newTransportLat").value);
  const lng = parseFloat(document.getElementById("newTransportLng").value);

  if (name && !isNaN(lat) && !isNaN(lng)) {
    vehicles.push({
      id: vehicles.length + 1,
      name: name,
      coords: [lat, lng]
    });

    updateVehicleList(); // Оновлення списку
    alert(`Транспорт "${name}" успішно додано!`);
    settingsForm.reset();
  } else {
    alert("Будь ласка, заповніть усі поля коректно.");
  }
});

// Початкове відображення транспорту
updateVehicleList();
