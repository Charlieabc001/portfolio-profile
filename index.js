 // Toggle Mobile Menu
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');
        
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });

        // Close mobile menu when clicking on a nav link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });

        // // Simple typing effect
// const texts = ["I am a Front-end Web Developer.", "I am a Graphic Designer.", "I am a Facilitator."];
//     let count = 0;
//     let index = 0;
//     let currentText = '';
//     let letter = '';

//     function type() {
//       if (count === texts.length) {
//         count = 0;
//       }
//       currentText = texts[count];
//       letter = currentText.slice(0, ++index);

//       document.getElementById('text').textContent = letter;

//       if (letter.length === currentText.length) {
//         count++;
//         index = 0;
//         setTimeout(type, 1000); // wait before typing next
//       } else {
//         setTimeout(type, 100);
//       }
//     }

//     type();


       


        // Header scroll effect
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Form submission (prevent default for demo)
        const contactForm = document.querySelector('.contact-form');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Sent. Thanks for your message!');
            contactForm.reset();

        });
