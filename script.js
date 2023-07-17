// Function to handle theme-related actions
function themeActions() {
    const toggleThemeCheckbox = document.querySelector('#toggle-checkbox');

    // Event listener for theme toggle checkbox
    toggleThemeCheckbox.addEventListener('click', () => {
        const lightTheme = toggleThemeCheckbox.checked; // Retrieve the current checkbox state
        const body = document.querySelector('body');

        // Check if dark theme is enabled
        if (lightTheme) {
            body.classList.add('dark'); // Add 'dark' class to body element
        } else {
            body.classList.remove('dark'); // Remove 'dark' class from body element
        }

        // Store the state of the theme toggle checkbox in local storage
        localStorage.setItem('toggleThemeState', toggleThemeCheckbox.checked);
    });

    // Check if the theme toggle checkbox state is stored in local storage
    if (localStorage.getItem('toggleThemeState')) {
        const isChecked = JSON.parse(localStorage.getItem('toggleThemeState'));
        toggleThemeCheckbox.checked = isChecked;
        const body = document.querySelector('body');

        // Apply the stored theme state to the body element
        if (!isChecked) {
            body.classList.add('dark'); // Add 'dark' class to body element
        } else {
            body.classList.remove('dark'); // Remove 'dark' class from body element
        }
    }
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
        menuItem.addEventListener('click', () => {
            // Hide menu
            menu.classList.toggle('visible');

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
