
// ======================================================
// MUNDISALUD - PÁGINAS DE PLANES Y SERVICIOS
// Archivo: js/pages/plans.js
// Descripción: Páginas de planes de bienestar y servicios médicos.
// ======================================================


// ======================================================
// 1. IMPORTACIONES
// ======================================================

import { plans } from "../data/plans.js";

import {
    btn,
    link,
    bread,
    heading,
    sec,
    faq,
    steps,
    form,
    compare,
    icon
} from "../components/ui.js";

import {
    planTiles,
    serviceTiles
} from "../components/catalog.js";

import { home } from "./home.js";


// ======================================================
// 2. PÁGINA DE DETALLE DE PLAN
// ======================================================

export function planPage(id) {

    const p = plans.find(x => x.id === id);

    // Si no existe el plan, regresar al inicio.
    if (!p) return home();


    return (

        // Encabezado y navegación
        bread('Planes / ' + p.name) +

        heading(
            'Plan de bienestar',
            'Plan ' + p.name,
            p.desc
        ) +


        // Información y beneficios del plan
        `<section class="ms-sec">

            <div class="ms-split">

                <div>

                    <div class="ms-price">
                        $${p.price}
                        <small>al mes</small>
                    </div>

                    <h2>
                        Conoce tus beneficios.
                    </h2>

                    <ul class="ms-list">

                        ${p.items.map(x => `
                            <li>${x}</li>
                        `).join('')}

                    </ul>

                    <p class="ms-note">
                        Consulta alcance de las consultas,
                        servicios elegibles, activación y condiciones.
                        La periodicidad de chequeos debe confirmarse.
                    </p>

                    ${
                        id === 'familiar'
                        ? `
                            <p class="ms-note">
                                Número de beneficiarios y distribución 
                                de beneficios pendientes de definición comercial.
                            </p>
                        `
                        : ''
                    }

                    ${
                        id === 'corporativo'
                        ? `
                            <p class="ms-note">
                                Consulta los requisitos de contratación.
                                La salud ocupacional y las brigadas
                                se cotizan por separado.
                            </p>
                        `
                        : ''
                    }

                    ${link(
                        'Comparar con otros planes',
                        'planes'
                    )}

                </div>

                ${form('plan', 'Plan ' + p.name)}

            </div>

        </section>` +


        // Cómo empezar
        sec(
            'Cómo empezar',
            'Te acompañamos en tu elección.',
            '',
            steps([
                [
                    'Consulta el plan',
                    'Conoce los beneficios y requisitos.'
                ],
                [
                    'Revisa las condiciones',
                    'Confirma beneficiarios, activación y formas de pago.'
                ],
                [
                    'Coordina tu afiliación',
                    'El equipo te indicará cómo completar el proceso.'
                ]
            ]),
            true
        ) +


        // Condiciones del plan
        sec(
            'Condiciones',
            'Información antes de afiliarte',
            '',

            faq(
                '¿Cuándo puedo utilizar los beneficios?',
                'La activación debe confirmarse. Los beneficios anuales señalados en los planes Corporativo y Familiar requieren seis meses de afiliación.'
            ) +

            faq(
                '¿Qué incluyen los chequeos gratuitos?',
                'Su alcance y periodicidad deben quedar definidos en las condiciones vigentes del plan.'
            ) +

            link(
                'Ver condiciones del plan',
                'condiciones'
            )
        ) +


        // Servicios adicionales
        sec(
            'También sin afiliación',
            'Puedes solicitar servicios por separado.',
            'Consulta y agenda atención individual cuando la necesites.',

            btn(
                'Ver servicios médicos',
                'servicios',
                'alt'
            ),

            true
        )

    );

}


// ======================================================
// 3. PÁGINA DE SERVICIOS MÉDICOS
// ======================================================

export function servicesPage() {

    return (

        // Encabezado
        bread('Servicios médicos') +

        heading(
            'Atención para personas y familias',
            'Tu servicio. Tu atención.',
            'Consultas, exámenes y chequeos por separado. No necesitas contratar un plan para atenderte en Mundisalud.'
        ) +


        // Catálogo de servicios
        sec(
            'Encuentra tu atención',
            'Servicios médicos y diagnóstico',
            'Selecciona una opción para ver cómo solicitarla.',
            serviceTiles()
        ) +


        // Especialidades médicas
        sec(
            'Atención especializada',
            'Encuentra la especialidad que necesitas.',
            'Consulta las especialidades habilitadas y sus horarios con nuestro equipo.',

            `
                <div class="ms-pills">

                    ${
                        [
                            'Medicina general',
                            'Ginecología y obstetricia',
                            'Pediatría',
                            'Traumatología',
                            'Cardiología',
                            'Urología',
                            'Otorrinolaringología',
                            'Psicología',
                            'Nutrición',
                            'Optometría'
                        ].map(x => `
                            <span class="ms-pill">
                                ${x}
                            </span>
                        `).join('')
                    }

                </div>

                ${btn(
                    'Consultar disponibilidad',
                    'servicio-consultas'
                )}
            `,

            true
        ) +


        // Modalidades de atención
        sec(
            'Modalidades de atención',
            'Te ayudamos a coordinar tu servicio.',
            '',

            `
                <div class="ms-grid two">

                    <div class="ms-tile">

                        <span class="ms-icon">
                            ${icon('hospital')}
                        </span>

                        <h3>
                            En nuestro centro
                        </h3>

                        <p>
                            Consulta horarios y disponibilidad
                            para los servicios prestados en Mundisalud.
                        </p>

                    </div>


                    <div class="ms-tile">

                        <span class="ms-icon">
                            ${icon('network')}
                        </span>

                        <h3>
                            Mediante servicios especializados
                        </h3>

                        <p>
                            Coordinación de atención externa
                            según servicio, prestador y ciudad confirmados.
                        </p>

                    </div>

                </div>
            `
        ) +


        // Promoción de planes
        sec(
            'Más beneficios',
            'Conoce nuestros planes de bienestar.',
            'Además de la atención individual, puedes elegir un plan con beneficios específicos desde $4,99 al mes.',

            btn(
                'Comparar planes',
                'planes'
            ),

            true
        )

    );

}


// ======================================================
// 4. PÁGINA DE PLANES DE BIENESTAR
// ======================================================

export function plansPage() {

    return (

        // Encabezado
        bread('Planes de bienestar') +

        heading(
            'Nuestro valor agregado',
            'Tres formas de cuidar tu bienestar.',
            'Conoce los precios, beneficios y condiciones. También puedes solicitar cualquier servicio disponible de forma individual.'
        ) +


        // Catálogo de planes
        sec(
            'Elige tu opción',
            'Planes de bienestar',
            'Cuotas mensuales en dólares de Estados Unidos.',
            planTiles(true)
        ) +


        // Comparativa
        sec(
            'Compara con claridad',
            '¿Qué incluye cada plan?',
            '',
            compare(),
            true
        ) +


        // Preguntas frecuentes
        sec(
            'Antes de afiliarte',
            'Conoce las condiciones',
            '',

            faq(
                '¿Las consultas ilimitadas incluyen todas las especialidades?',
                'El alcance debe confirmarse. No debe interpretarse que todas las especialidades están incluidas.'
            ) +

            faq(
                '¿Cuántas personas incluye el Familiar?',
                'Este dato debe completarse con la definición comercial antes de publicar la oferta.'
            ) +

            faq(
                '¿Los beneficios anuales están disponibles desde el primer mes?',
                'Los beneficios anuales indicados en Corporativo y Familiar se habilitan después de seis meses de afiliación.'
            ) +

            link(
                'Consultar condiciones completas',
                'condiciones'
            )
        ) +


        // Servicios individuales
        sec(
            'Tú eliges',
            'También puedes atenderte sin un plan.',
            'Consulta tarifas individuales y coordina el servicio que necesitas.',

            btn(
                'Explorar servicios',
                'servicios',
                'alt'
            ),

            true
        )

    );

}


// ======================================================
// FIN DEL ARCHIVO PLANS.JS
// ======================================================
