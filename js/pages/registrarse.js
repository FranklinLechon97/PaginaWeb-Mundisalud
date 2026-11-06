
// ======================================================
// MUNDISALUD - REGISTRO VISUAL DE USUARIOS
// Archivo: js/pages/registrarse.js
// Cédula / RUC, validaciones y limpieza al cerrar
// ======================================================


// ======================================================
// 1. VALIDAR CÉDULA ECUATORIANA
// ======================================================

function validarCedulaEcuatoriana(cedula) {

    if (!/^\d{10}$/.test(cedula)) return false;

    const provincia = Number(cedula.slice(0, 2));
    const tercerDigito = Number(cedula[2]);

    if (provincia < 1 || provincia > 24) return false;
    if (tercerDigito > 5) return false;

    const coeficientes = [2, 1, 2, 1, 2, 1, 2, 1, 2];

    let suma = 0;

    for (let i = 0; i < 9; i++) {

        let resultado = Number(cedula[i]) * coeficientes[i];

        if (resultado >= 10) resultado -= 9;

        suma += resultado;
    }

    const verificador = (10 - (suma % 10)) % 10;

    return verificador === Number(cedula[9]);
}


// ======================================================
// 2. VALIDAR RUC ECUATORIANO
// ======================================================

function validarRucEcuatoriano(ruc) {

    if (!/^\d{13}$/.test(ruc)) return false;

    const provincia = Number(ruc.slice(0, 2));
    const tercerDigito = Number(ruc[2]);
    const establecimiento = Number(ruc.slice(10, 13));

    if (provincia < 1 || provincia > 24) return false;
    if (establecimiento < 1) return false;

    // RUC de persona natural
    if (tercerDigito <= 5) {
        return validarCedulaEcuatoriana(ruc.slice(0, 10));
    }

    // RUC de entidad pública
    if (tercerDigito === 6) {

        const coeficientes = [3, 2, 7, 6, 5, 4, 3, 2];
        let suma = 0;

        for (let i = 0; i < 8; i++) {
            suma += Number(ruc[i]) * coeficientes[i];
        }

        const verificador = (11 - (suma % 11)) % 11;

        return verificador === Number(ruc[8]);
    }

    // RUC de sociedad privada
    if (tercerDigito === 9) {

        const coeficientes = [4, 3, 2, 7, 6, 5, 4, 3, 2];
        let suma = 0;

        for (let i = 0; i < 9; i++) {
            suma += Number(ruc[i]) * coeficientes[i];
        }

        const verificador = (11 - (suma % 11)) % 11;

        return verificador === Number(ruc[9]);
    }

    return false;
}


// ======================================================
// 3. INICIAR REGISTRO
// ======================================================

export function iniciarRegistro() {

    const modal = document.getElementById("ms-register-modal");
    const formulario = document.getElementById("ms-register-form");

    const feedback = document.getElementById("ms-register-feedback");
    const alerta = document.getElementById("ms-register-alert");

    const tipoDocumento = document.getElementById(
        "ms-register-document-type"
    );

    const documentoInput = document.getElementById("ms-register-id");

    const labelDocumento = document.getElementById(
        "ms-register-id-label"
    );

    const campoDocumento = document.getElementById(
        "ms-register-cedula-field"
    );

    const passwordInput = document.getElementById(
        "ms-register-password"
    );

    const confirmarInput = document.getElementById(
        "ms-register-confirm"
    );

    if (!modal || !formulario || !tipoDocumento || !documentoInput) {
        console.error(
            "Mundisalud: faltan elementos del formulario de registro."
        );
        return;
    }

    let focoAnterior = null;
    let overflowAnterior = "";


    // ==================================================
    // 4. MENSAJES GENERALES
    // ==================================================

    function mostrarMensaje(mensaje, esError = true) {

        if (!feedback) return;

        feedback.textContent = mensaje;
        feedback.style.color = esError ? "#c62828" : "#0875ac";
    }


    // ==================================================
    // 5. QUITAR ERROR DE IDENTIFICACIÓN
    // ==================================================

    function quitarErrorDocumento() {

        if (alerta) {
            alerta.textContent = "";
            alerta.hidden = true;
        }

        campoDocumento?.classList.remove("ms-field-error");

        documentoInput.removeAttribute("aria-invalid");
        documentoInput.setCustomValidity("");
    }


    // ==================================================
    // 6. MOSTRAR ERROR DE IDENTIFICACIÓN
    // ==================================================

    function mostrarErrorDocumento() {

        const esRuc = tipoDocumento.value === "ruc";

        const mensaje = esRuc
            ? "El RUC ecuatoriano ingresado no es válido. Verifica los 13 dígitos."
            : "La cédula ecuatoriana ingresada no es válida. Verifica los 10 dígitos.";

        if (alerta) {
            alerta.textContent = mensaje;
            alerta.hidden = false;
        }

        campoDocumento?.classList.add("ms-field-error");

        documentoInput.setAttribute("aria-invalid", "true");
        documentoInput.setCustomValidity(mensaje);
    }


    // ==================================================
    // 7. ACTUALIZAR CÉDULA O RUC
    // ==================================================

    function actualizarTipoDocumento(limpiarNumero = true) {

        const esRuc = tipoDocumento.value === "ruc";

        if (labelDocumento) {
            labelDocumento.textContent = esRuc
                ? "Número de RUC"
                : "Número de cédula";
        }

        // Cédula: 10 dígitos / RUC: 13 dígitos
        documentoInput.maxLength = esRuc ? 13 : 10;

        documentoInput.placeholder = esRuc
            ? "13 dígitos"
            : "10 dígitos";

        documentoInput.pattern = esRuc
            ? "[0-9]{13}"
            : "[0-9]{10}";

        if (limpiarNumero) {
            documentoInput.value = "";
        }

        quitarErrorDocumento();

        if (feedback) {
            feedback.textContent = "";
        }
    }


    tipoDocumento.addEventListener("change", () => {

        actualizarTipoDocumento(true);

        documentoInput.focus();
    });


    // ==================================================
    // 8. VALIDAR DOCUMENTO
    // ==================================================

    function validarDocumento() {

        const numero = documentoInput.value.trim();
        const esRuc = tipoDocumento.value === "ruc";

        const esValido = esRuc
            ? validarRucEcuatoriano(numero)
            : validarCedulaEcuatoriana(numero);

        if (!esValido) {
            mostrarErrorDocumento();
            return false;
        }

        quitarErrorDocumento();
        return true;
    }


    // ==================================================
    // 9. VALIDAR MIENTRAS SE ESCRIBE
    // ==================================================

    documentoInput.addEventListener("input", () => {

        const limite = tipoDocumento.value === "ruc" ? 13 : 10;

        documentoInput.value = documentoInput.value
            .replace(/\D/g, "")
            .slice(0, limite);

        quitarErrorDocumento();

        if (feedback) {
            feedback.textContent = "";
        }
    });


    // Validar al salir del campo
    documentoInput.addEventListener("blur", () => {

        if (documentoInput.value.trim()) {
            validarDocumento();
        }
    });


    // ==================================================
    // 10. LIMPIAR FORMULARIO
    // ==================================================

    function limpiarFormulario() {

        formulario.reset();

        // Volver siempre a Cédula
        tipoDocumento.value = "cedula";

        actualizarTipoDocumento(true);

        if (feedback) {
            feedback.textContent = "";
            feedback.style.color = "";
        }

        formulario.querySelectorAll("input").forEach(input => {
            input.setCustomValidity("");
            input.removeAttribute("aria-invalid");
        });
    }


    // ==================================================
    // 11. ABRIR FORMULARIO
    // ==================================================

    function abrirRegistro() {

        if (!modal.hidden) return;

        focoAnterior = document.activeElement;

        limpiarFormulario();

        overflowAnterior = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        modal.hidden = false;

        if (window.lucide) {
            window.lucide.createIcons();
        }

        document.getElementById("ms-register-name")?.focus();
    }


    // ==================================================
    // 12. CERRAR FORMULARIO
    // ==================================================

    function cerrarRegistro() {

        if (modal.hidden) return;

        limpiarFormulario();

        modal.hidden = true;

        document.body.style.overflow = overflowAnterior;

        if (focoAnterior?.isConnected) {
            focoAnterior.focus();
        }
    }


    // ==================================================
    // 13. ABRIR Y CERRAR CON CLIC
    // ==================================================

    document.addEventListener("click", (event) => {

        const botonRegistro = event.target.closest(
            'button[data-page="registrar"]'
        );

        if (botonRegistro) {

            event.preventDefault();
            event.stopPropagation();

            abrirRegistro();
            return;
        }

        if (event.target.closest("[data-close-register]")) {
            cerrarRegistro();
        }

    }, true);


    // ==================================================
    // 14. CERRAR CON ESCAPE Y CONTROLAR EL FOCO
    // ==================================================

    document.addEventListener("keydown", (event) => {

        if (modal.hidden) return;

        if (event.key === "Escape") {

            event.preventDefault();
            cerrarRegistro();
            return;
        }

        if (event.key === "Tab") {

            const controles = Array.from(
                modal.querySelectorAll(
                    'button:not([disabled]), input:not([disabled]), select:not([disabled]), a[href]'
                )
            ).filter(elemento => elemento.getClientRects().length > 0);

            if (!controles.length) return;

            const primero = controles[0];
            const ultimo = controles[controles.length - 1];

            if (event.shiftKey && document.activeElement === primero) {
                event.preventDefault();
                ultimo.focus();
            } else if (
                !event.shiftKey &&
                document.activeElement === ultimo
            ) {
                event.preventDefault();
                primero.focus();
            }
        }
    });


    // ==================================================
    // 15. VALIDAR AL ENVIAR
    // ==================================================

    formulario.addEventListener("submit", (event) => {

        event.preventDefault();

        // Validar Cédula o RUC
        if (!validarDocumento()) {
            documentoInput.focus();
            return;
        }

        const datos = new FormData(formulario);

        const contrasena = String(datos.get("contrasena") || "");

        const confirmar = String(
            datos.get("confirmar_contrasena") || ""
        );

        if (contrasena.length < 8) {

            mostrarMensaje(
                "La contraseña debe tener al menos 8 caracteres."
            );

            passwordInput?.focus();
            return;
        }

        if (contrasena !== confirmar) {

            mostrarMensaje(
                "Las contraseñas no coinciden."
            );

            confirmarInput?.focus();
            return;
        }

        mostrarMensaje(
            "Datos validados correctamente. " +
            "El registro real se habilitará próximamente.",
            false
        );
    });
    }