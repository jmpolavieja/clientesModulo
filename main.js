// main.js
import { addClient, getClients, deleteClient, updateClient } from './clienteManager.js';

function renderClients() {
  const clientList = document.getElementById("client-list");
  clientList.innerHTML = ''; // Limpiar la lista antes de renderizar

  getClients().forEach((client, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${client.name}</td>
      <td>${client.email}</td>
      <td>
        <button class="btn btn-warning btn-sm" onclick="editClient(${index})">Editar</button>
        <button class="btn btn-danger btn-sm" onclick="deleteClientEntry(${index})">Eliminar</button>
      </td>
    `;
    clientList.appendChild(row);
  });
}

function addNewClient() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  addClient({ name, email });
  renderClients();

  // Limpiar el formulario
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
}

function deleteClientEntry(index) {
  deleteClient(index);
  renderClients();
}

function editClient(index) {
  const client = getClients()[index];
  document.getElementById('name').value = client.name;
  document.getElementById('email').value = client.email;

  document.getElementById('saveBtn').onclick = () => {
    const updatedName = document.getElementById('name').value;
    const updatedEmail = document.getElementById('email').value;
    updateClient(index, { name: updatedName, email: updatedEmail });
    renderClients();

    // Cambiar de vuelta el botón
    document.getElementById('saveBtn').onclick = addNewClient;
    document.getElementById('saveBtn').textContent = 'Añadir Cliente';
  };

  document.getElementById('saveBtn').textContent = 'Guardar Cambios';
}

// Hacer accesibles las funciones globalmente
window.addNewClient = addNewClient;
window.deleteClientEntry = deleteClientEntry;
window.editClient = editClient;

// Renderizar clientes al cargar la página
renderClients();
