/* Changing name */
var typed = new Typed("#changingtext",{
	strings: ["Learner","Programmer","Designer","Developer"],
	typeSpeed:100,
	backSpeed:60,
	loop:true
})
/* toggle button */
document.addEventListener('DOMContentLoaded', () => {
            const icon = document.getElementById('toggle_btn');
            const dropdownMenu = document.getElementById('dropdownmenu');
            const menuItems = document.querySelectorAll('.menu-item');

            icon.addEventListener('click', () => {
                if (dropdownMenu.classList.contains('show')) {
                    dropdownMenu.classList.remove('show');
                    setTimeout(() => { dropdownMenu.style.display = 'none'; }, 300); // Delay to match the transition
                    icon.innerHTML = '<i class="fa-solid fa-bars"></i>'; // Bar icon
                } else {
                    dropdownMenu.style.display = 'block';
                    setTimeout(() => { dropdownMenu.classList.add('show'); }, 5); // Allow time for display to apply
                    icon.innerHTML = '<i class="fa-solid fa-xmark"></i>'; // X icon
                }
            });

            // Close the dropdown menu when clicking on a menu item
            menuItems.forEach(item => {
                item.addEventListener('click', () => {
                    dropdownMenu.classList.remove('show');
                    setTimeout(() => { dropdownMenu.style.display = 'none'; }, 300); // Delay to match the transition
                    icon.innerHTML = '<i class="fa-solid fa-bars"></i>'; // Bar icon
                });
            });
        });
/* Nav smooth scroll */
document.querySelectorAll('a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

/* smoothly scroll*/
document.addEventListener('DOMContentLoaded', () => {
            const sections = document.querySelectorAll('div');
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    } else {
                        entry.target.classList.remove('visible');
                    }
                });
            }, observerOptions);

            sections.forEach(section => {
                observer.observe(section);
            });
        });

/* timeline scroll */

document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.educationboxcontainer ul li');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, observerOptions);

    items.forEach(item => {
        observer.observe(item);
    });
});
