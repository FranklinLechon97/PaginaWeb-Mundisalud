// ======================================================
// MUNDISALUD - PÁGINA PARA EMPRESAS
// Archivo: js/pages/enterprise.js
// Descripción: Servicios empresariales, unidad móvil y
//              formulario para solicitar cotizaciones.
// ======================================================


// ======================================================
// 1. IMPORTACIONES
// ======================================================

import {
    icon,
    btn,
    link,
    bread,
    heading,
    sec,
    steps,
    form
} from "../components/ui.js";


// ======================================================
// 2. SERVICIOS EMPRESARIALES
// ======================================================

const offers = [

    [
        'clipboard-check',
        'Evaluaciones ocupacionales',
        'Ingreso, periódicas y de retiro.'
    ],

    [
        'flask-conical',
        'Laboratorio ocupacional',
        'Pruebas según los requerimientos de la evaluación.'
    ],

    [
        'truck',
        'Brigadas y unidad móvil',
        'Consulta jornadas en las instalaciones de tu empresa.'
    ],

    [
        'shield-plus',
        'Campañas preventivas',
        'Prevención y promoción de la salud.'
    ],

    [
        'presentation',
        'Charlas y capacitaciones',
        'Actividades coordinadas para tu equipo.'
    ],

    [
        'stethoscope',
        'Atención especializada',
        'Derivación y seguimiento según disponibilidad.'
    ]

];


// ======================================================
// 3. PORTADA EMPRESARIAL
// ======================================================

function enterpriseHero() {

    return `
        <div class="ms-hero">

            <div>

                <span class="ms-tag">
                    Mundisalud empresas
                </span>

                <h1>
                    Salud para tu equipo.<br>
                    Soluciones para tu empresa.
                </h1>

                <p>
                    Coordinamos atención médica, evaluaciones
                    ocupacionales y programas preventivos según
                    las necesidades de tu organización.
                </p>

                ${btn(
                    'Solicitar propuesta',
                    'cotizacion',
                    'light'
                )}

            </div>


            <div class="ms-art">

                <span class="ms-eyebrow">
                    Atención coordinada
                </span>

                <div class="ms-bigicon">
                    ${icon('truck')}
                </div>

                <h3>
                    Más cerca de tu equipo.
                </h3>

                <p>
                    Brigadas · Unidad móvil · Prevención
                </p>

                <div class="ms-art-bottom">
                    ${icon('building-2')}
                    En nuestro centro o en tu empresa.
                </div>

            </div>

        </div>
    `;

}


// ======================================================
// 4. CATÁLOGO DE SERVICIOS EMPRESARIALES
// ======================================================

function enterpriseServices() {

    return `
        <div class="ms-grid">

            ${offers.map(service => `

                <div class="ms-tile">

                    <span class="ms-icon">
                        ${icon(service[0])}
                    </span>

                    <h3>
                        ${service[1]}
                    </h3>

                    <p>
                        ${service[2]}
                    </p>

                    ${link(
                        'Consultar propuesta',
                        'cotizacion'
                    )}

                </div>

            `).join('')}

        </div>
    `;

}


// ======================================================
// 5. MODALIDADES DE ATENCIÓN
// ======================================================

function mobileUnit() {

    return `
        <div class="ms-grid two">

            <div class="ms-tile">

                <h3>
                    En Mundisalud
                </h3>

                <p>
                    Organización de citas y atención
                    en nuestras instalaciones.
                </p>

            </div>


            <div class="ms-tile">

                <h3>
                    En tu empresa
                </h3>

                <p>
                    Brigadas y atención extramural sujetas
                    a coordinación y disponibilidad.
                </p>

            </div>

        </div>
    `;

}


// ======================================================
// 6. PROCESO DE COORDINACIÓN EMPRESARIAL
// ======================================================

function enterpriseProcess() {

    return `
        ${steps([

            [
                'Comparte tu necesidad',
                'Ciudad, número de colaboradores y servicios.'
            ],

            [
                'Definimos el alcance',
                'Modalidad, jornadas y propuesta económica.'
            ],

            [
                'Coordinamos la atención',
                'Organización de fechas y ejecución acordada.'
            ]

        ])}

        ${btn(
            'Cotizar servicios empresariales',
            'cotizacion'
        )}
    `;

}


// ======================================================
// 7. PLAN CORPORATIVO
// ======================================================

function corporatePlan() {

    return btn(
        'Ver Plan Corporativo',
        'plan-corporativo',
        'alt'
    );

}


// ======================================================
// 8. PÁGINA PRINCIPAL PARA EMPRESAS
// ======================================================

export function enterprise() {

    return (

        // Navegación de la página
        bread('Para empresas') +


        // Portada
        enterpriseHero() +


        // Servicios empresariales
        sec(
            'Servicios empresariales',
            'Una propuesta a la medida de tu operación.',
            '',
            enterpriseServices()
        ) +


        // Unidad móvil
        sec(
            'Unidad móvil',
            'Acercamos la atención a tu empresa.',
            'Consulta los servicios disponibles, requisitos logísticos y cobertura de nuestras jornadas.',
            mobileUnit(),
            true
        ) +


        // Coordinación empresarial
        sec(
            'Coordinación empresarial',
            'Construyamos una propuesta para tu equipo.',
            '',
            enterpriseProcess()
        ) +


        // Plan corporativo
        sec(
            'Planes de bienestar',
            'Conoce también el Plan Corporativo.',
            'Una oferta distinta de las evaluaciones ocupacionales y los convenios a medida.',
            corporatePlan(),
            true
        ) +


        // Formulario de contacto
        sec(
            'Conversemos',
            '¿Qué necesita tu empresa?',
            '',
            form('empresa')
        )

    );

}