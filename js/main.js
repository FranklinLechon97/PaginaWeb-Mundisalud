// Punto de entrada: conecta el HTML con el router y los eventos.
import { renderPage, getActiveNavPage } from "./router.js";

const root = document.getElementById("ms-web");
const main = root?.querySelector("#ms-content");

if (!root || !main) {
  throw new Error("No se encontró el contenedor principal de Mundisalud (#ms-web / #ms-content).");
}

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

  // Vuelve a dibujar los iconos después de insertar el contenido dinámico.
  if (window.lucide) {
    window.lucide.createIcons({ attrs: { width: 20, height: 20 } });
  }
}

// Un solo listener controla todos los botones con data-page, incluso los creados después.
root.addEventListener("click", (event) => {
  const button = event.target.closest("[data-page]");
  if (!button || !root.contains(button)) return;

  navigateTo(button.dataset.page);
  root.scrollIntoView({ behavior: "instant", block: "start" });
});

// Los formularios son demostrativos: no envían ni almacenan información.
root.addEventListener("submit", (event) => {
  const submittedForm = event.target;
  if (!submittedForm.matches("[data-form]")) return;

  event.preventDefault();
  const feedback = submittedForm.querySelector(".ms-feedback");
  if (feedback) {
    feedback.innerHTML =
      '<div class="ms-status">Vista de confirmación: recibimos tu solicitud. En la web final, el equipo coordinará los detalles. Esta demostración no envió ningún dato.</div>';
  }
});

// Primera pantalla al abrir la web.
navigateTo("inicio");
