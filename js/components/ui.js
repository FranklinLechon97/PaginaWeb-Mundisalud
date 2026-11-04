
// ======================================================
// MUNDISALUD - COMPONENTES REUTILIZABLES
// Archivo: js/components/ui.js
// Descripción:
// Elementos reutilizables para toda la página web:
// botones, enlaces, títulos, secciones, formularios,
// pasos, preguntas frecuentes y tablas comparativas.
// ======================================================

import { services } from "../data/services.js";
import { plans } from "../data/plans.js";


// ======================================================
// 1. ICONOS
// ======================================================

export const icon = (name) => {
    return `<i data-lucide="${name}" aria-hidden="true"></i>`;
};


// ======================================================
// 2. BOTONES
// ======================================================

export const btn = (label, page, alt = "") => {
    return `
        <button class="ms-btn ${alt}" data-page="${page}">
            ${label}
        </button>
    `;
};


// ======================================================
// 3. ENLACES
// ======================================================

export const link = (label, page) => {
    return `
        <button class="ms-link" data-page="${page}">
            ${label}
            ${icon("arrow-up-right")}
        </button>
    `;
};


// ======================================================
// 4. ENCABEZADOS
// ======================================================

export const heading = (tag, title, text) => {
    return `
        <div class="ms-heading">
            <span class="ms-eyebrow">${tag}</span>
            <h1>${title}</h1>
            <p>${text}</p>
        </div>
    `;
};


// ======================================================
// 5. MIGAS DE PAN / BREADCRUMB
// ======================================================

export const bread = (title) => {
    return `
        <div class="ms-breadcrumb">
            <button data-page="inicio">Inicio</button>
            / ${title}
        </div>
    `;
};


// ======================================================
// 6. SECCIONES
// ======================================================

export const sec = (tag, title, intro, content, soft = false) => {
    return `
        <section class="ms-sec ${soft ? "soft" : ""}">

            <span class="ms-eyebrow">${tag}</span>

            <h2>${title}</h2>

            ${intro ? `<p class="ms-intro">${intro}</p>` : ""}

            ${content}

        </section>
    `;
};


// ======================================================
// 7. PREGUNTAS FRECUENTES
// ======================================================

export const faq = (question, answer) => {
    return `
        <details>
            <summary>${question}</summary>
            <p>${answer}</p>
        </details>
    `;
};


// ======================================================
// 8. PASOS / PROCESOS
// ======================================================

export const steps = (items) => {
    return `
        <div class="ms-grid">

            ${items.map((step, index) => `
                <div class="ms-step">

                    <span class="ms-num">
                        ${index + 1}
                    </span>

                    <h3>${step[0]}</h3>

                    <p>${step[1]}</p>

                </div>
            `).join("")}

        </div>
    `;
};


// ======================================================
// 9. FORMULARIOS
// ======================================================

export const form = (type, pre = "") => {

    const isEmpresa = type === "empresa";
    const isPlan = type === "plan";

    const tituloEtiqueta = isEmpresa
        ? "Hablemos de tu equipo"
        : isPlan
            ? "Conoce tus beneficios"
            : "Coordinemos tu atención";

    const tituloFormulario = isEmpresa
        ? "Solicitar una propuesta"
        : isPlan
            ? "Quiero información"
            : "Solicitar cita";

    const textoBoton = isEmpresa
        ? "Solicitar propuesta"
        : isPlan
            ? "Solicitar información"
            : "Solicitar cita";


    // Opciones del campo de interés
    const opcionesInteres = isPlan
        ? plans.map(plan => `Plan ${plan.name}`)
        : isEmpresa
            ? [
                "Evaluaciones ocupacionales",
                "Brigada médica",
                "Unidad móvil",
                "Laboratorio ocupacional",
                "Convenio integral"
            ]
            : services.map(service => service.name);


    return `
        <form data-form="${type}" class="ms-contactbox">

            <span class="ms-eyebrow">
                ${tituloEtiqueta}
            </span>

            <h3>
                ${tituloFormulario}
            </h3>


            <!-- NOMBRE -->

            <label>
                Nombre

                <input
                    type="text"
                    name="nombre"
                    placeholder="Tu nombre"
                    required
                    autocomplete="off"
                >
            </label>


            <!-- EMPRESA -->

            ${isEmpresa ? `
                <label>
                    Empresa

                    <input
                        type="text"
                        name="empresa"
                        placeholder="Nombre de la empresa"
                        required
                    >
                </label>
            ` : ""}


            <!-- CELULAR -->

            <label>
                Celular

                <input
                    type="tel"
                    name="celular"
                    placeholder="Número de contacto"
                    required
                >
            </label>


            <!-- CORREO ELECTRÓNICO -->

            <label>
                Correo electrónico

                <input
                    type="email"
                    name="correo"
                    placeholder="ejemplo@correo.com"
                    required
                >
            </label>


            <!-- CIUDAD Y COLABORADORES PARA EMPRESAS -->

            ${isEmpresa ? `
                <div class="ms-grid two">

                    <label>
                        Ciudad

                        <input
                            type="text"
                            name="ciudad"
                            placeholder="Ciudad"
                            required
                        >
                    </label>

                    <label>
                        Colaboradores

                        <select name="colaboradores">

                            <option>1 a 20</option>
                            <option>21 a 50</option>
                            <option>51 a 100</option>
                            <option>Más de 100</option>

                        </select>
                    </label>

                </div>
            ` : ""}


            <!-- SERVICIO O PLAN DE INTERÉS -->

            <label>
                ${isPlan ? "Plan de interés" : "Servicio de interés"}

                <select name="interes">

                    ${opcionesInteres.map(option => `
                        <option ${option === pre ? "selected" : ""}>
                            ${option}
                        </option>
                    `).join("")}

                </select>
            </label>


            <!-- AVISO DE PRIVACIDAD -->

            <label>
                <input
                    type="checkbox"
                    name="privacidad"
                    required
                >

                He leído el aviso de privacidad.
            </label>


            <!-- NOTA PARA EMPRESAS -->

            ${isEmpresa ? `
                <p class="ms-note">
                    El alcance y las fechas se definirán en la propuesta.
                </p>
            ` : ""}


            <!-- BOTÓN DE ENVÍO -->

            <button class="ms-btn" type="submit">
                ${textoBoton}
            </button>


            <!-- AVISO DE DEMOSTRACIÓN -->

            <p class="ms-note">
                Demostración: no ingreses datos personales reales.
            </p>


            <!-- MENSAJE DE RESPUESTA -->

            <div
                class="ms-feedback"
                role="status"
                aria-live="polite"
            ></div>

        </form>
    `;
};


// ======================================================
// 10. TABLA COMPARATIVA DE PLANES
// ======================================================

export const compare = () => {

    const beneficios = [

        [
            "Cuota mensual",
            "$4,99",
            "$9,99",
            "$14,99"
        ],

        [
            "Consultas médicas",
            "2 al mes",
            "Ilimitadas",
            "Ilimitadas y prioritarias"
        ],

        [
            "Laboratorio y ecografías",
            "30% descuento",
            "30% descuento",
            "30% descuento"
        ],

        [
            "Especialistas",
            "Por confirmar",
            "10% descuento",
            "10% descuento"
        ],

        [
            "Nutrición",
            "1 al mes",
            "1 al mes",
            "1 al mes"
        ],

        [
            "Psicología",
            "Por confirmar",
            "1 al mes",
            "2 al mes"
        ],

        [
            "Chequeo odontológico",
            "1 gratis*",
            "1 gratis*",
            "1 gratis*"
        ],

        [
            "Chequeo visual",
            "1 gratis*",
            "Por confirmar",
            "1 gratis*"
        ],

        [
            "Laboratorio anual incluido",
            "Por confirmar",
            "1 después de 6 meses",
            "2 después de 6 meses"
        ],

        [
            "Ecografía básica anual",
            "Por confirmar",
            "Por confirmar",
            "1 después de 6 meses"
        ]

    ];


    return `
        <div class="ms-tablewrap">

            <table>

                <thead>
                    <tr>
                        <th>Beneficio</th>
                        <th>Solidario</th>
                        <th>Corporativo</th>
                        <th>Familiar</th>
                    </tr>
                </thead>

                <tbody>

                    ${beneficios.map(row => `
                        <tr>
                            ${row.map(value => `
                                <td>${value}</td>
                            `).join("")}
                        </tr>
                    `).join("")}

                </tbody>

            </table>

        </div>


        <!-- OBSERVACIONES -->

        <p class="ms-note">
            *Periodicidad por confirmar. Los beneficios no descritos
            en el folleto y el número de beneficiarios del plan Familiar
            requieren definición antes de publicar.
        </p>
    `;
};


// ======================================================
// FIN DEL ARCHIVO ui.js
// ======================================================
