function menuSettings() {
    // Code related to menu settings
}

function themeSettings(toggleThemeCheckbox) {
    const darkTheme = toggleThemeCheckbox.checked;

    if (darkTheme) {
        const body = document.querySelector('body');
        body.classList.toggle('dark');
    }
}

function init() {
    //Toggle menu
    const hamburguerIconCheckbox = document.querySelector('#hamburguer-icon-checkbox');
    const menu = document.querySelector('.menu');

    hamburguerIconCheckbox.addEventListener('click', () => {
        menu.classList.toggle('visible');
    });


    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach((menuItem) => {
        menuItem.addEventListener('click', () => {
            menu.classList.toggle('visible');

            // Remove 'current' class from all menu items
            menuItems.forEach((item) => {
                item.classList.remove('current');
            });

            // Add 'current' class to the selected menu item
            menuItem.classList.add('current');
        });
    });

    // Toggle theme
    const toggleThemeCheckbox = document.querySelector('#toggle-checkbox');
    toggleThemeCheckbox.addEventListener('click', () => themeSettings(toggleThemeCheckbox));
}

init();
