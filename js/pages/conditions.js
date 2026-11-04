// Contenido de página.
// ======================================================
// MUNDISALUD - CONDICIONES DE LOS PLANES
// Archivo: js/pages/conditions.js
// Descripción: Información comercial y condiciones de uso.
// ======================================================


// ======================================================
// 1. IMPORTACIONES
// ======================================================

import {
    bread,
    heading,
    sec,
    faq
} from "../components/ui.js";

import {
    planTiles
} from "../components/catalog.js";


// ======================================================
// 2. PÁGINA DE CONDICIONES
// ======================================================

export function conditions() {

    return (

        // --------------------------------------------------
        // ENCABEZADO DE LA PÁGINA
        // --------------------------------------------------

        bread('Condiciones de planes') +

        heading(
            'Información comercial',
            'Beneficios claros, decisiones informadas.',
            'Revisa el precio, servicios incluidos y condiciones de la opción que te interesa.'
        ) +


        // --------------------------------------------------
        // SECCIÓN 1: PLANES DISPONIBLES
        // --------------------------------------------------

        sec(
            'Los tres planes',
            'Cuotas y beneficios',
            '',
            planTiles()
        ) +


        // --------------------------------------------------
        // SECCIÓN 2: ACTIVACIÓN Y CONDICIONES
        // --------------------------------------------------

        sec(
            'Activación y uso',
            'Condiciones que deben quedar definidas',
            '',

            // Beneficios después de seis meses
            faq(
                'Beneficios después de seis meses',
                'Corporativo: un laboratorio anual. Familiar: dos laboratorios y una ecografía básica anual, según el folleto.'
            ) +

            // Beneficiarios y alcance
            faq(
                'Beneficiarios y alcance',
                'Pendiente de definición: número de beneficiarios del Familiar, distribución de beneficios, elegibilidad del Corporativo y alcance de las consultas.'
            ) +

            // Chequeos, descuentos y tarifas
            faq(
                'Chequeos, descuentos y tarifas',
                'Pendiente de definición: periodicidad de chequeos, pruebas incluidas, servicios elegibles y base de descuentos.'
            ) +

            // Pago, renovación y cancelación
            faq(
                'Pago, renovación y cancelación',
                'Espacio para las condiciones comerciales aprobadas antes del lanzamiento.'
            ),

            true
        )

    );

}