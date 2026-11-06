// ======================================================
// MUNDISALUD - PÁGINA DE INICIO
// Archivo: js/pages/home.js
// Descripción: Página principal del sitio web Mundisalud.
// ======================================================


// ======================================================
// 1. IMPORTACIONES
// ======================================================

import {
    icon,
    btn,
    link,
    sec,
    faq,
    steps
} from "../components/ui.js";

import {
    serviceTiles,
    planTiles,
    businessBanner
} from "../components/catalog.js";


// ======================================================
// 2. PORTADA PRINCIPAL
// ======================================================

function homeHero() {

    return `

        <div class="ms-hero">

            <div>

                <span class="ms-tag">
                    Centro médico y laboratorio clínico · Quito
                </span>

                <h1>
                    La salud al<br>
                    alcance de todos.
                </h1>

                <p>
                    Consultas, exámenes y chequeos para cuidar de ti.
                    Elige tu servicio de forma individual o descubre
                    nuestros planes de bienestar.
                </p>

                <div class="ms-actions">

                    ${btn(
                        'Encontrar mi servicio',
                        'servicios',
                        'light'
                    )}

                    ${btn(
                        'Ver planes desde $4,99',
                        'planes',
                        'ghost'
                    )}

                </div>

                <small>
                    Puedes atenderte sin contratar un plan.
                </small>

            </div>


            <div class="ms-art">

                <span style="font-size:12px;letter-spacing:1px">
                    SALUD · PREVENCIÓN · BIENESTAR
                </span>

                <div class="ms-bigicon ms-heart-beat">
    ${icon('heart-pulse')}
</div>

                <h3>
                    Cuidarte empieza aquí.
                </h3>

                <p>
                    Una consulta. Un chequeo.<br>
                    Un paso hacia tu bienestar.
                </p>

                <div class="ms-art-bottom">

                    ${icon('calendar-check')}

                    <span>
                        Elige tu atención<br>

                        <strong>
                            Nosotros te ayudamos a coordinarla.
                        </strong>
                    </span>

                </div>

            </div>

        </div>

    `;

}


// ======================================================
// 3. INDICADORES DE CONFIANZA
// ======================================================

function trustSection() {

    return `

        <div class="ms-trust">

            <span>
                ${icon('stethoscope')}
                Servicios individuales
            </span>

            <span>
                ${icon('heart-handshake')}
                Planes accesibles
            </span>

            <span>
                ${icon('building-2')}
                Atención empresarial
            </span>

        </div>

    `;

}


// ======================================================
// 4. SECCIÓN DE SERVICIOS MÉDICOS
// ======================================================

function servicesSection() {

    return sec(
        'Nuestros servicios',
        '¿Qué atención necesitas?',
        'Encuentra tu servicio y consulta su tarifa y disponibilidad, sin necesidad de afiliarte.',
        serviceTiles()
    );

}


// ======================================================
// 5. SECCIÓN DE PLANES DE BIENESTAR
// ======================================================

function plansSection() {

    return sec(
        'Planes de bienestar',
        'Más beneficios para cuidar de ti.',
        'Elige entre tres opciones de cuota mensual y conoce sus servicios incluidos y descuentos.',

        planTiles() +

        `<div class="ms-actions">

            ${link(
                'Comparar todos los beneficios',
                'planes'
            )}

        </div>`,

        true
    );

}


// ======================================================
// 6. SECCIÓN PARA EMPRESAS
// ======================================================

function businessSection() {

    return `

        <section class="ms-sec">

            ${businessBanner()}

        </section>

    `;

}


// ======================================================
// 7. PROCESO DE ATENCIÓN
// ======================================================

function attentionProcess() {

    return sec(
        'Así de sencillo',
        'Tu atención, paso a paso.',
        '',

        steps([

            [
                'Elige tu servicio',
                'Busca la consulta, examen o chequeo que necesitas.'
            ],

            [
                'Contacta a Mundisalud',
                'Consulta el precio y la disponibilidad de atención.'
            ],

            [
                'Confirma tu cita',
                'Nuestro equipo te ayuda a coordinar la visita.'
            ]

        ])
    );

}


// ======================================================
// 8. UBICACIÓN Y CONTACTO
// ======================================================

function locationSection() {

    return sec(
        'Estamos cerca',
        'Visítanos en La Pradera.',
        'Cristóbal de Acuña N29B y Juan de Agama, Quito.',

        `<div class="ms-actions">

            ${btn(
                'Ver ubicación y contacto',
                'contacto'
            )}

            ${btn(
                'Conoce Mundisalud',
                'nosotros',
                'alt'
            )}

        </div>`,

        true
    );

}


// ======================================================
// 9. PREGUNTAS FRECUENTES
// ======================================================

function frequentlyAskedQuestions() {

    return sec(
        'Resolvemos tus dudas',
        'Antes de tu visita',
        '',

        faq(
            '¿Puedo atenderme sin un plan?',
            'Sí. Puedes contratar cada servicio por separado y consultar su tarifa individual.'
        ) +

        faq(
            '¿Qué aportan los planes?',
            'Acceso a los beneficios y descuentos específicos de cada opción, según sus condiciones.'
        ) +

        faq(
            '¿Mi cita queda confirmada al solicitarla?',
            'El equipo debe confirmar disponibilidad, fecha y horario.'
        )
    );

}


// ======================================================
// 10. FUNCIÓN PRINCIPAL - PÁGINA DE INICIO
// ======================================================

export function home() {

    return (

        // Portada principal
        homeHero() +


        // Indicadores de confianza
        trustSection() +


        // Servicios médicos
        servicesSection() +


        // Planes de bienestar
        plansSection() +


        // Atención empresarial
        businessSection() +


        // Proceso de atención
        attentionProcess() +


        // Ubicación y contacto
        locationSection() +


        // Preguntas frecuentes
        frequentlyAskedQuestions()

    );

}