/* Changing name */
var typed = new Typed("#changingtext",{
	strings: ["Learner","Programmer","Designer","Developer"],
	typeSpeed:100,
	backSpeed:60,
	loop:true
})


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
