// home.js
export const home = () => {
    initializeHome();
};

const initializeHome = () => {
    const root = document.getElementById('root');
    if (root) {
        renderHomeMarkup(root);
    } else {
        console.error('Root element not found');
    }
};

const renderHomeMarkup = (root) => {
    root.innerHTML = getHomeMarkup();
    initializeEvents();
};

const getHomeMarkup = () => `
    <nav>
        <div class="nav-wrapper">
            <div class="nav-logo">
                <img src="./assets/img/logoPNG.png" alt="menu" class="menu-icon" />
            </div>
            <div class="content-menu-login">
                <div class="g_id_signin" data-type="standard"></div>
                <div class="barras" id="barras">
                    <div class="barra barra1"></div>
                    <div class="barra barra2"></div>
                    <div class="barra barra3"></div>
                </div>
            </div>
        </div>
    </nav>
    <div class="nav-menu">
        <ul class="hamburguesa">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><button id="openLogin">Login</button></li>
        </ul>
    </div>
    <button id="btnTop" class="btnTop">
        <i class="fas fa-arrow-up"></i>
    </button>
`;

const initializeEvents = () => {
    initializeBtnTop();
    initializeMenuToggle();
};

const initializeBtnTop = () => {
    const btnTop = document.getElementById('btnTop');
    btnTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
};

const initializeMenuToggle = () => {
    const barras = document.getElementById('barras');
    const navMenu = document.querySelector('.nav-menu');
    const [barra1, barra2, barra3] = document.querySelectorAll('.barra');
    let isMenuOpen = false;

    barras.addEventListener('click', () => {
        toggleMenu(isMenuOpen, navMenu);
        animateBars([barra1, barra2, barra3]);
        isMenuOpen = !isMenuOpen;
    });
};

const toggleMenu = (isMenuOpen, navMenu) => {
    if (isMenuOpen) {
        navMenu.classList.remove('show');
        navMenu.classList.add('hide');
        navMenu.addEventListener('animationend', () => {
            navMenu.style.display = 'none';
        }, { once: true });
    } else {
        navMenu.style.display = 'grid';
        navMenu.classList.remove('hide');
        navMenu.classList.add('show');
    }
};

const animateBars = (bars) => {
    bars.forEach((bar, index) => {
        bar.classList.toggle(`animar${index + 1}`);
    });
};

export default home;
