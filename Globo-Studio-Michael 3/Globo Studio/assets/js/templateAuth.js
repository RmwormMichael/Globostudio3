import home from './home.js';

export const renderTemplate = () => {
    const root = document.getElementById('root');
    root.innerHTML = getTemplateMarkup();

    const menuItems = document.querySelectorAll('.sidebar ul li a');
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            loadContent(item.getAttribute('data-content'));
        });
    });
};

const getTemplateMarkup = () => `
    <div class="container">
        <aside class="sidebar">
            <ul>
                <li><a href="#" data-content="home">Home</a></li>
                <li><a href="#" data-content="profile">Profile</a></li>
                <li><a href="#" data-content="settings">Settings</a></li>
                <li><a href="#" data-content="productos">Productos</a></li>
                <li><a href="#" data-content="logout">Logout</a></li>
            </ul>
        </aside>
        <main class="content" id="content">
            <h2>Welcome! Please select an option from the menu.</h2>
        </main>
    </div>
`;

const loadContent = (contentId) => {
    const content = document.getElementById('content');
    const contentMap = {
        home: '<h2>Home</h2><p>This is the home page content.</p>',
        productos: '<h2>Productos</h2><p>Estos son los productos disponibles.</p>',
        profile: '<h2>Profile</h2><p>Here is your profile information.</p>',
        settings: '<h2>Settings</h2><p>Adjust your preferences here.</p>',
        logout: () => window.location.href = '/'
    };
    
    content.innerHTML = typeof contentMap[contentId] === 'function' ? contentMap[contentId]() : contentMap[contentId] || '<h2>Welcome!</h2><p>Please select an option from the menu.</p>';
};

export default renderTemplate;
