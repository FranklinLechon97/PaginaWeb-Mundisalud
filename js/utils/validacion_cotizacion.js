
import {
  validarCedulaEcuatoriana,
  validarRucEcuatoriano
} from "./validacioncedula.js";
export function inicializarValidacionCotizacion() {

  const formulario = document.querySelector(
    '#ms-web form.ms-quote-form[data-form="empresa"]'
  );

  if (!formulario) return;

  const campoRuc = formulario.querySelector(
    'input[name="ruc"]'
  );

  const mensajeError = formulario.querySelector(
    "#ms-ruc-error"
  );

  if (!campoRuc || !mensajeError) return;

  function validarCampoRuc() {

    const ruc = campoRuc.value.trim();

    if (!ruc) {
      mensajeError.textContent = "El RUC es obligatorio.";
      campoRuc.setCustomValidity("Ingresa el RUC.");
      return false;
    }

    if (!validarRucEcuatoriano(ruc)) {
      mensajeError.textContent =
        "El RUC ecuatoriano ingresado no es válido.";

      campoRuc.setCustomValidity("RUC inválido.");
      return false;
    }

    mensajeError.textContent = "";
    campoRuc.setCustomValidity("");

    return true;
  }

  campoRuc.addEventListener("input", () => {
    campoRuc.value = campoRuc.value.replace(/\D/g, "").slice(0, 13);
    campoRuc.setCustomValidity("");
    mensajeError.textContent = "";
  });

  campoRuc.addEventListener("blur", validarCampoRuc);

  formulario.addEventListener("submit", (event) => {
    if (!validarCampoRuc()) {
      event.preventDefault();
      event.stopImmediatePropagation();
      campoRuc.reportValidity();
      campoRuc.focus();
    }
  }, true);
}
