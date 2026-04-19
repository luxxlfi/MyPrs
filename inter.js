const toggle = document.getElementById('toggle');
const menu = document.getElementById('menu');


if (toggle && menu) {
  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}

// aos

const homeLink = document.querySelector('a[href="#home"]');
if (homeLink) {
  homeLink.addEventListener('click', () => {
    const home = document.querySelector('#home');
    if (home) {
      home.classList.remove('aos-animate');
      setTimeout(() => {
        if (typeof AOS !== 'undefined') AOS.refresh();
      }, 300);
    }
  });
}

function mode() {
  const body = document.body;
  const icon = document.getElementById('icon');

  body.classList.toggle("light");

  if (icon) {
    if (body.classList.contains("light")) {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    } else {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    }
  }
}
