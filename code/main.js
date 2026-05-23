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
const links = document.querySelectorAll(".navbar a");

links.forEach(link => {
  link.addEventListener("click", () => {
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});