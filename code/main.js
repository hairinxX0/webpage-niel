//observer para navbar activa por secciones

const navLinks = Array.from(
    document.querySelectorAll('.navbar a[href^="#"]')
).filter(link => link.hash && link.hash !== "#");

const sections = navLinks
    .map(link => document.querySelector(link.hash))
    .filter(Boolean);

if (sections.length) {
    const setActive = (id) => navLinks.forEach(link => {
        link.classList.toggle("active", link.hash === `#${id}`);
    });

    const observer = new IntersectionObserver((entries) => {
        const visible = entries.find(entry => entry.isIntersecting);

        if (visible) {
            setActive(visible.target.id);
        }
    }, { rootMargin: "-30% 0px -55% 0px", threshold: 0.1 });

    sections.forEach(section => observer.observe(section));
}

 document.getElementById('year').textContent = new Date().getFullYear();

// Cerrar el menu hamburguesa al hacer click en un enlace
// const offcanvasElement = document.getElementById("offcanvasNavbar");

// if (offcanvasElement) {
//     offcanvasElement.addEventListener("click", (event) => {
//         const link = event.target.closest("a");

//         if (!link || link.getAttribute("data-bs-toggle") === "dropdown") {
//             return;
//         }

//         bootstrap.Offcanvas.getOrCreateInstance(offcanvasElement).hide();
//     });
// }

//navbar activa 
// const links = document.querySelectorAll(".navbar a");

// links.forEach(link => {
//   link.addEventListener("click", () => {
//     links.forEach(l => l.classList.remove("active"));
//     link.classList.add("active");
//   });
// });