import { renderTemplate } from "./templateAuth.js";

export const showLoginModal = () => {
    const modalHTML = createLoginModalMarkup();
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const modal = document.getElementById('loginModal');
    modal.style.display = 'flex';

    initializeModalEvents(modal);
};

const createLoginModalMarkup = () => `
    <div id="loginModal" class="modal">
        <div class="modal-content">
            <span id="closeModal" class="close">&times;</span>
            <h2>Login</h2>
            <form id="loginForm">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" required>
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required>
                <button type="submit" id="goAuth">Login In</button>
            </form>
        </div>
    </div>
`;

const initializeModalEvents = (modal) => {
    const closeModal = document.getElementById('closeModal');
    closeModal.addEventListener('click', () => closeModalHandler(modal));

    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModalHandler(modal);
    });

    const form = document.getElementById('loginForm');
    form.addEventListener('submit', (e) => handleLoginSubmit(e, modal));
};

const closeModalHandler = (modal) => {
    modal.style.display = 'none';
    modal.remove();
};

const handleLoginSubmit = (e, modal) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log(`Username: ${username}, Password: ${password}`);
    closeModalHandler(modal);
    renderTemplate();
};

export default showLoginModal;
