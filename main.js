
function rotateHeroIcons() {
    // this function was create to main the icons "fixed" without rotate with the parent div
    var block = document.querySelectorAll(".hero-icon"),
        increase = Math.PI * 2 / block.length,
        x = 0, y = 0, angle = 0;

    for (var i = 0; i < block.length; i++) {
        var elem = block[i];
        x = 120 * Math.cos(angle) + 110;
        y = 120 * Math.sin(angle) + 110;
        elem.style.position = 'absolute';
        elem.style.left = x + 'px';
        elem.style.top = y + 'px';
        var rot = 90 + (i * (360 / block.length));
        angle += increase;
    }
}

function scrollAnimation() {
    const sections = document.querySelectorAll('section')
    const triggerBottom = window.innerHeight / 5 * 4

    const sectionInitialY = []

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top

        if (sectionTop < triggerBottom) {
            section.classList.add("visible")
        }
        else if (sectionTop > triggerBottom) {
            section.classList.remove("visible")
        }


        const sectionRect = section.getBoundingClientRect();
        const offsetTop = sectionRect.top + window.pageYOffset;
        sectionInitialY.push(offsetTop)
    })

    window.sectionInitialY = sectionInitialY

}

// function toggleEducationSection() {
//     const educationSection = document.querySelector('.education');

//     educationSection.addEventListener('click', (event) => {
//         if (event.target.classList.contains('education-title')) {
//             const educationTitles = educationSection.querySelectorAll('.education-title');

//             educationTitles.forEach((educationTitle) => {
//                 educationTitle.classList.remove('selected');
//             });

//             event.target.classList.toggle('selected');
//         }
//     });
// }

function toggleEducationSection() {
    const certificationsButton = document.querySelector('#education-title-certification')
    const educationButton = document.querySelector('#education-title-education')

    const educationContainer = document.querySelector('.education-container')

    certificationsButton.addEventListener('click', () => {
        educationContainer.classList.add('toggle')


        certificationsButton.classList.toggle('selected');
        educationButton.classList.toggle('selected')
    })
    educationButton.addEventListener('click', () => {
        educationContainer.classList.remove('toggle')

        educationButton.classList.toggle('selected')
        certificationsButton.classList.toggle('selected');

    })
}

function init() {
    rotateHeroIcons()

    scrollAnimation()
    window.addEventListener('scroll', scrollAnimation)

    toggleEducationSection()
}

init()