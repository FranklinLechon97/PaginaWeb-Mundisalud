// Selecciona qué módulo de página debe mostrarse según la ruta interna.
import { home } from "./pages/home.js";
import { servicePage, servicesPage } from "./pages/services.js";
import { planPage, plansPage } from "./pages/plans.js";
import { enterprise } from "./pages/enterprise.js";
import { about } from "./pages/about.js";
import { contact } from "./pages/contact.js";
import { conditions } from "./pages/conditions.js";
import { privacy } from "./pages/privacy.js";
import { bread, heading, sec, form } from "./components/ui.js";

export function renderPage(page) {
  if (page.startsWith("servicio-")) return servicePage(page.slice("servicio-".length));
  if (page.startsWith("plan-")) return planPage(page.slice("plan-".length));

  const pages = {
    inicio: home,
    servicios: servicesPage,
    planes: plansPage,
    empresas: enterprise,
    nosotros: about,
    contacto: contact,
    condiciones: conditions,
    privacidad: privacy,
    cotizacion: () =>
      bread("Empresas / Cotización") +
      heading("Hablemos de tu empresa", "Solicita una propuesta empresarial.", "Cuéntanos qué necesita tu equipo para coordinar una propuesta de atención.") +
      sec("Cotización", "Datos de contacto y alcance", "", form("empresa")),
  };

  return (pages[page] || home)();
}

export function getActiveNavPage(page) {
  if (page.startsWith("servicio-")) return "servicios";
  if (page.startsWith("plan-")) return "planes";
  if (page === "cotizacion") return "empresas";
  return page;
}