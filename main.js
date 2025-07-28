var typed = new Typed(".text", {
    strings: ["Student", "Full Stack Web Developer", "Tech Enthusiast"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});



const menuIcon = document.getElementById('menu-icon');
  const navbar = document.querySelector('.navbar');

  menuIcon.onclick = () => {
    navbar.classList.toggle('active');
  };