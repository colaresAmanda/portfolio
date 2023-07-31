// Function to handle theme-related actions
function themeActions() {
    const toggleThemeCheckbox = document.querySelector('#toggle-checkbox');
    const body = document.querySelector('body');

    // Event listener for theme toggle checkbox
    toggleThemeCheckbox.addEventListener('click', () => {
        body.classList.toggle('dark');
    });
}

// Function to handle menu-related actions
function menuActions() {
    // Toggle menu
    const hamburgerIconCheckbox = document.querySelector('#hamburger-icon-checkbox');
    const menu = document.querySelector('.menu');

    // Event listener for menu toggle checkbox
    hamburgerIconCheckbox.addEventListener('change', (e) => {
        menu.classList.toggle('visible'); // Toggle 'visible' class on menu element
    });

    // Highlight current menu section
    const menuItems = document.querySelectorAll('.menu-item:not(:last-child)');

    // Event listener for each menu item
    menuItems.forEach((menuItem) => {
        menuItem.addEventListener('click', (e) => {
            // Hide menu
            e.preventDefault(); // Prevent default anchor tag behavior

            menu.classList.toggle('visible');

            // console.log(menuItem, window.innerHeight)


            switch (menuItem.textContent) {
                case "Início":
                    window.scrollTo(0, window.sectionInitialY[0])


                    break;
                case "O que faço":
                    window.scrollTo(0, window.sectionInitialY[1])

                    break;
                case "Sobre mim":
                    window.scrollTo(0, window.sectionInitialY[2])
                    break;
                case "Educação":
                    window.scrollTo(0, window.sectionInitialY[3])
                    break;
                case "Projetos":
                    window.scrollTo(0, window.sectionInitialY[4])
                    break;
                    case "Contato":
                    window.scrollTo(0, window.sectionInitialY[5])
                    break;
                default:
                    window.scrollTo(0, 0)
                    break;
            }
            // Remove 'current' class from all menu items
            menuItems.forEach((item) => {
                item.classList.remove('current');
            });

            // Add 'current' class to the selected menu item
            menuItem.classList.add('current');
        });
    });
}

function uncheckCheckboxes() {
    // Get the checkbox elements
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');

    // Uncheck the checkboxes explicitly
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
}

function init() {
    menuActions(); // Call menuActions function to handle menu-related actions
    themeActions(); // Call themeActions function to handle theme-related actions
    uncheckCheckboxes(); // Call uncheckCheckboxes function to reset checkbox state
}

init(); // Call init function to initialize the menu, theme actions, and reset checkboxes
