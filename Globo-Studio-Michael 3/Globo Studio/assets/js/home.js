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
            <li><a href="#contact">Quote Price
            </a></li>
            <li><button id="openLogin">Login</button></li>
        </ul>
    </div>
    <section class="section"> <!-- Welcome -->
        <div class="contenedor">
            <div class="desplegable">
                <img class="imgH" src="/View/img/Logo-removebg-preview.png">
                <h1 class="welcome">WELCOME</h1>
            </div>
            <div class="logoContenido">
                <img class="imglogo" src="/View/img/Globo-Studio-24-8-2024 (5).png" alt="">
                <p class="parrafoPrimero">Are a company dedicated to balloon decoration, specialized in large
                    family
                    events and
                    corporate services. Our focus is on offering innovative and creative designs that transform
                    any
                    occasion into a unique and memorable experience</p>
                <img class="imgWha" src="/View/img/pngegg.png" alt="">
            </div>
        </div>
    </section>

        <section class="section2"> <!--Pagina 1 About-->
        <div class="desplegable">
            <img class="imgH" src="/View/img/Logo-removebg-preview.png">
            <h1 class="welcome">ABOUT</h1>
        </div>
        <div class="cajas"> <!--Pagina 1 About -->
            <div class="info1">
                <h1 class="encabezado">About</h1>
                <p class="parrafo">ALSO, WE OFFER…
                    Creativity without limits: We understand the importance of originality and innovation.
                    Full Customization: We are committed to working closely with our clients to understand their
                </p>
            </div>
            <div class="info2">
                <h1 class="encabezado">Mision</h1>
                <p class="parrafo">ALSO, WE OFFER…
                    Creativity without limits: We understand the importance of originality and innovation.
                    Full Customization: We are committed to working closely with our clients to understand their
                </p>
            </div>
            <div class="info3">
                <h1 class="encabezado">Mision</h1>
                <p class="parrafo">ALSO, WE OFFER…
                    Creativity without limits: We understand the importance of originality and innovation.
                    Full Customization: We are committed to working closely with our clients to understand their
                </p>
            </div>
        </div>
    </section>

        <section class="section2"> <!--Pagina 2 Our Services-->
        <div class="desplegable">
            <img class="imgH" src="/View/img/Logo-removebg-preview.png">
            <h1 class="welcome">OUR SERVICES</h1>
        </div>
        <div class="cajas2">
            <div class="info">
                <p class="parrafo">ALSO, WE OFFER…
                    Creativity without limits: We understand the importance of originality and innovation.
                    Full Customization: We are committed to working closely with our clients to understand their
                    Lorem
                    ipsum, dolor sit amet consectetur
                </p>
            </div>
            <div class="info">
                <p class="parrafo">ALSO, WE OFFER…
                    Creativity without limits: We understand the importance of originality and innovation.
                    Full Customization: We are committed to working closely with our clients to understand their
                    Lorem
                    ipsum, dolor sit amet consectetur
                </p>
            </div>
            <div class="info">
                <p class="parrafo">ALSO, WE OFFER…
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde maxime cum consequatur velit!
                    Eligendi, aperiam, error voluptate laboriosam sint incidunt autem corrupti voluptates odio dicta
                    recusandae tenetur? Accusantium
                </p>
            </div>
        </div>
    </section>


        <section class="section2"> <!--Pagina 3 Gallery-->
        <div class="desplegable">
            <img class="imgH" src="/View/img/Logo-removebg-preview.png">
            <h1 class="welcome">GALLERY</h1>
        </div>
        <div class="cajas1">
            <h1 class="encabezado">Explore Our Designs</h1>
            <div class="contenedorCatalogo">
                <img class="imgDragon" src="/View/img/Dragon.jpg" alt="diseño dragon">
            </div>
            <div class="buttonSee">
                <h4 class="buttonContinue">See more...</h4>
            </div>
        </div>
    </section>

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
