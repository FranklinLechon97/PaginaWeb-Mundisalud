// ======================================================
// MUNDISALUD - ARCHIVO PRINCIPAL
// Archivo: js/main.js
// ======================================================

// 1. IMPORTACIÓN DEL ROUTER

import { renderPage, getActiveNavPage } from "./router.js";
import { iniciarRegistro } from "./pages/registrarse.js";
import {
    validarCedulaEcuatoriana,
    validarRucEcuatoriano
} from "./utils/validacioncedula.js";


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
root.addEventListener("change", (event) => {
    const campo = event.target;

    if (!campo.matches(
        '.ms-quote-form[data-form="empresa"] input[name="ruc"]'
    )) return;

    const numero = campo.value.trim();

    const valido = numero.length === 10
        ? validarCedulaEcuatoriana(numero)
        : numero.length === 13
            ? validarRucEcuatoriano(numero)
            : false;

    campo.setCustomValidity(
        valido ? "" : "La cédula o RUC ecuatoriano es incorrecto."
    );

    campo.classList.toggle("ms-input-error", !valido);

    const error = campo.closest("form")
        ?.querySelector("#ms-ruc-error");

    if (error) {
        error.textContent = valido
            ? ""
            : "La identificación no supera la validación ecuatoriana.";
    }
});


/* ======================================================
   5. FORMULARIOS Y VALIDACIÓN DE IDENTIFICACIÓN
   ====================================================== */

root.addEventListener("submit", (event) => {

    const submittedForm = event.target;

    if (!submittedForm.matches("[data-form]")) {
        return;
    }

    event.preventDefault();

    const feedback = submittedForm.querySelector(".ms-feedback");

    // Limpiar confirmaciones anteriores
    if (feedback) {
        feedback.innerHTML = "";
    }

    // Validación exclusiva para cotización empresarial
    if (submittedForm.matches(".ms-quote-form[data-form='empresa']")) {

        const campoRuc = submittedForm.querySelector(
            'input[name="ruc"]'
        );

        const mensajeError = submittedForm.querySelector(
            "#ms-ruc-error"
        );

        if (!campoRuc) return;

        const numero = campoRuc.value.trim();

        // Se admiten 10 dígitos para cédula y 13 para RUC
        const esCedula = /^\d{10}$/.test(numero);
        const esRuc = /^\d{13}$/.test(numero);

        const esValido =
            (esCedula && validarCedulaEcuatoriana(numero)) ||
            (esRuc && validarRucEcuatoriano(numero));

        if (!esValido) {

            campoRuc.setCustomValidity(
                "La cédula o RUC ecuatoriano no es válido."
            );

            campoRuc.classList.add("ms-input-error");

            if (mensajeError) {
                mensajeError.textContent =
                    "Identificación incorrecta. Verifica los dígitos ingresados.";
            }

            campoRuc.reportValidity();
            campoRuc.focus();

            return;
        }

        // Identificación válida
        campoRuc.setCustomValidity("");
        campoRuc.classList.remove("ms-input-error");

        if (mensajeError) {
            mensajeError.textContent = "";
        }

        // Validar también los demás campos obligatorios
        if (!submittedForm.reportValidity()) {
            return;
        }
    }

    // Confirmación únicamente después de validar
    if (feedback) {

        feedback.innerHTML = `
            <div class="ms-status">
                Vista de confirmación: los datos del formulario
                superaron las validaciones.
                Esta demostración no envió ningún dato.
            </div>
        `;
    }

});
/* ======================================================
   6. LIMPIAR ERROR AL MODIFICAR IDENTIFICACIÓN
   ====================================================== */

root.addEventListener("input", (event) => {

    const campo = event.target;

    if (!campo.matches(
        '.ms-quote-form[data-form="empresa"] input[name="ruc"]'
    )) {
        return;
    }

    campo.value = campo.value.replace(/\D/g, "").slice(0, 13);

    campo.setCustomValidity("");
    campo.classList.remove("ms-input-error");

    const mensajeError = campo.closest("form")
        ?.querySelector("#ms-ruc-error");

    if (mensajeError) {
        mensajeError.textContent = "";
    }

});

// Cargar la página de inicio
navigateTo("inicio");

// Activar el formulario de registro
iniciarRegistro();