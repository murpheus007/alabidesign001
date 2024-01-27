let hamburger = document.getElementById('hamburger');
let navigate = document.getElementById('nav_ul');

hamburger.addEventListener("click", () => {
    // Toggle a class to control visibility
    navigate.classList.toggle('show_nav');
    hamburger.style.zIndex = "1";
});

// let button = document.getElementsByClassName('add_field');

// button.addEventListener('click', ()=> {
//     button.innerText = `Add another field`;
//     button.parentElement.append()
// })