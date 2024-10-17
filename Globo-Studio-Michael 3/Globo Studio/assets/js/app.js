import { home } from './home.js';
import { showLoginModal } from './login.js';

home();

document.addEventListener('DOMContentLoaded', () => {
    const openLogin = document.getElementById('openLogin');
    if (openLogin) {
        openLogin.addEventListener('click', showLoginModal);
    }
});