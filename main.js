
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



function sendEmail() {
    const form = document.querySelector('.contact-form')
    const formfeedback = document.querySelector('.form-feedback')
    form.addEventListener('submit', async (e) => {
        e.preventDefault()
        const name = form[0].value
        const email = form[1].value
        const message = form[2].value
        const time = 5000


        if (!name) {
            formfeedback.innerHTML = "Digite seu nome"
            formfeedback.classList.toggle('warning')
            setTimeout(() => {
                formfeedback.innerHTML = "";
                formfeedback.classList.toggle('warning')

            }, time);
            return
        }

        if (!email) {
            formfeedback.innerHTML = "Digite seu email"
            formfeedback.classList.toggle('warning')
            setTimeout(() => {
                formfeedback.innerHTML = "";
                formfeedback.classList.toggle('warning')

            }, time);
            return
        }

        if (!message) {
            formfeedback.innerHTML = "Digite uma mensagem"
            formfeedback.classList.toggle('warning')

            setTimeout(() => {
                formfeedback.innerHTML = "";
                formfeedback.classList.toggle('warning')

            }, time);
            return
        }


        // Initialize emailjs with your user ID
        emailjs.init("iFIDh_f1DSJHjsKT5"); // Replace with your actual user ID

        // Set up the email parameters
        const emailParams = {
            from_name: name,
            from_email: email,
            message: message,
        };

        // Use the 'emailjs' library to send the email



        await emailjs.send("service_7zkf6qs", "template_6h4rjm5", emailParams)
            .then(function () {
                console.log("Email sent successfully!");
                form.reset()
                formfeedback.innerHTML = "Sua mensagem foi enviada com sucesso"
                formfeedback.classList.toggle('success')

                setTimeout(() => {
                    formfeedback.innerHTML = "";
                    formfeedback.classList.toggle('success')

                }, time);
            }, function () {
                console.error("Email could not be sent");
                formfeedback.innerHTML = "Houve um erro, tente novamente mais tarde"
                formfeedback.classList.toggle('error')

                setTimeout(() => {
                    formfeedback.innerHTML = "";
                    formfeedback.classList.toggle('error')

                }, time);
            });


    });


}


function init() {
    rotateHeroIcons()

    scrollAnimation()
    window.addEventListener('scroll', scrollAnimation)

    toggleEducationSection()
    sendEmail()
}

init()