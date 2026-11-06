// ======================================================
// MUNDISALUD - ARCHIVO PRINCIPAL
// Archivo: js/main.js
// ======================================================

// 1. IMPORTACIÓN DEL ROUTER

import { renderPage, getActiveNavPage } from "./router.js";
import { iniciarRegistro } from "./pages/registrarse.js";



// 2. CONTENEDORES PRINCIPALES

const root = document.getElementById("ms-web");
const main = root?.querySelector("#ms-content");

if (!root || !main) {
    throw new Error(
        "No se encontró el contenedor principal de Mundisalud (#ms-web / #ms-content)."
    );
}


// 3. NAVEGACIÓN ENTRE PÁGINAS

function navigateTo(page) {

    main.innerHTML = renderPage(page);

    main.setAttribute("aria-label", `Página ${page}`);

    const activePage = getActiveNavPage(page);

    root.querySelectorAll("nav button").forEach((button) => {

        if (button.dataset.page === activePage) {

            button.setAttribute("aria-current", "page");

        } else {

            button.removeAttribute("aria-current");

        }

    });


    // Actualizar iconos Lucide

    if (window.lucide) {

        window.lucide.createIcons({
            attrs: {
                width: 20,
                height: 20
            }
        });

    }

}


// 4. EVENTOS DE NAVEGACIÓN

root.addEventListener("click", (event) => {

    const button = event.target.closest("[data-page]");

    if (!button || !root.contains(button)) {
        return;
    }

    navigateTo(button.dataset.page);

    root.scrollIntoView({
        behavior: "instant",
        block: "start"
    });

});


// 5. FORMULARIOS DEMOSTRATIVOS

root.addEventListener("submit", (event) => {

    const submittedForm = event.target;

    if (!submittedForm.matches("[data-form]")) {
        return;
    }

    event.preventDefault();

    const feedback = submittedForm.querySelector(".ms-feedback");

    if (feedback) {

        feedback.innerHTML = `
            <div class="ms-status">
                Vista de confirmación: recibimos tu solicitud.
                En la web final, el equipo coordinará los detalles.
                Esta demostración no envió ningún dato.
            </div>
        `;

    }

});

// Cargar la página de inicio
navigateTo("inicio");

// Activar el formulario de registro
iniciarRegistro();