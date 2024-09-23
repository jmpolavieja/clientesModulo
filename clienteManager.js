// clientManager.js
let clients = [];

export function addClient(client) {
  clients.push(client);
}

export function getClients() {
  return clients;
}

export function deleteClient(index) {
  clients.splice(index, 1);
}

export function updateClient(index, updatedClient) {
  clients[index] = updatedClient;
}
