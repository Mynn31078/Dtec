const { response } = require("express");

//Criando uma constante com o endereço da API
const API_URL = 'http://localhost:3001/usuarios';

//Seleção de elementos do usuario na pagina html
const userCardsContainer = document.getElementById('user-cards-container');
const addUserform = document.getElementById('addUserForm');
const BtnListUsers = document.getElementById('BtnListUsers');

//Seleção de elementos do MODAL
const editModal = document.getElementById('editModal');
const editUserForm = document.getElementById('editUserForm');
const BtnCancelEdit = document.getElementById('BtnCancelEdit');
const editIdInput = document.getElementById('editId');
const editNameInput = document.getElementById('editName');
const editAgeInput = document.getElementById('editAge');

//Criação de função 
function fetchAndRenderUsers() {
    //Faz uma requisição para a API para buscar os usuarios
    fetch(API_URL)
        //Transforma a resposta em JSON
        //then = então || response = resposta || response.json() = transforma a resposta em JSON
        .then(response => response.json())
        //Pega os dados (usuarios) e renderiza na pagina
        .then(users => fetchAndRenderUsers(users))
        .catch(error => {
            console.error("Erro ao buscar usuários", error);
            userCardsContainer.innerHTML = `<p>Erro ao carregar usuários</p>`
        })
}

//Função para adicionar um novo usuário
function addUser(userData) {
    fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'aplication/json'
        },
        body: JSON.stringify(userData)
    })
        .then(response => response.json())
        .then(() => {
            addUserForm.rest();
            fetchAndRenderUsers();
        })
        .catch(error => console.error("Erro ao adicionar usuário", error));
}
//FUNÇÃO PARA EDITAR USUÁRIO EXISTENTE
function editUser(userId, userData) {
    fetch(`${API_URL}/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(response => response.json())
        .then(() => {
            editModal.style.display = 'none';
            fetchAndRenderUsers();
        })
        .catch(error => console.error("Erro ao editar o usuário", error));
}

function deleteUser(userId) {
    fetch(`${API_URL}/${userId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(() => {
            fetchAndRenderUsers()
        })
        .catch(error => console.error('Erro ao excluir usuário', error))
}
function renderUsers(users) {
    userCardsContainer.innerHTML = "";

    if (users.length === 0) {
        userCardsContainer.innerHTML = `<p>Nenhum usuário cadastrado</p>`
        return;
    }

    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card';

        userCard.innerHTML = `
            <div class="user-info">
                <p><strong>ID:</strong>${user.id}</p>
                <p><strong>ID:</strong>${user.nome}</p>
                <p><strong>ID:</strong>${user.idade}</p>
            </div>
            <div class="card-buttons">
                <button class="btn-edit">Editar</button>
                <button class="btn-dlete">Excluir</button>
            </div>
        `;

        const editBtn = userCard.querySelector('.btn-edit');
        const deletBtn = userCard.querySelector('.btn-delete');

        editBtn.addEventListener('click', () => {
            editIdInput.value = user.id;
            editNameInput.value = user.nome;
            editAgeInput.value = user.idade;
            editModal.style.display = 'flex';
        })
    })
}