
// ======================================================
// MUNDISALUD
// Página: Contacto
// Archivo: js/pages/contact.js
// Descripción: Ubicación, canales de atención,
// formulario de citas y preguntas frecuentes.
// ======================================================


// ======================================================
// 1. IMPORTACIÓN DE COMPONENTES
// ======================================================

import {
    icon,
    btn,
    bread,
    heading,
    sec,
    faq,
    form
} from "../components/ui.js";


// ======================================================
// 2. MAPA DE GOOGLE MAPS
// ======================================================

function googleMap() {

    return `
        <div class="ms-map">

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3989.795654799796!2d-78.49567162503523!3d-0.19312759980497243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwMTEnMzUuMyJTIDc4wrAyOSczNS4yIlc!5e0!3m2!1ses!2sec!4v1793814516188!5m2!1ses!2sec"
                width="100%"
                height="400"
                style="border:0;"
                allowfullscreen
                loading="lazy"
                referrerpolicy="strict-origin-when-cross-origin"
                title="Ubicación de Mundisalud en Quito">
            </iframe>

        </div>
    `;
}


// ======================================================
// 3. CANALES DE ATENCIÓN
// ======================================================

function contactChannels() {

    return `

        <h3>Canales de atención</h3>

        <div class="ms-contact-channels">

    <!-- WhatsApp -->
    <a
        href="https://wa.me/593964253317"
        target="_blank"
        rel="noopener noreferrer"
        class="ms-channel-icon"
        aria-label="WhatsApp"
        title="WhatsApp">

        ${icon('message-circle')}

    </a>


    <!-- Correo electrónico -->
    <a
        href="mailto:mundisaludsgsas@gmail.com"
        class="ms-channel-icon"
        aria-label="Correo electrónico"
        title="Correo electrónico">

        ${icon('mail')}

    </a>

</div>

    `;
}


// ======================================================
// 4. SECCIÓN: UBICACIÓN Y CANALES DE ATENCIÓN
// ======================================================

function locationSection() {

    const locationContent = `

        <div class="ms-split">


            <!-- INFORMACIÓN DE UBICACIÓN -->

            <div>

                <h2>Visítanos en Quito.</h2>

                <p>
                    Cristóbal de Acuña N29B y Juan de Agama.
                    <br>
                    Sector estación de Metro La Pradera.
                </p>


                <!-- MAPA DE GOOGLE MAPS -->

                <h3>Ubicación del centro médico</h3>

                ${googleMap()}


                <!-- CANALES DE ATENCIÓN -->

                ${contactChannels()}


                <!-- BOTONES DE NAVEGACIÓN -->

                <div class="ms-actions">

                    ${btn(
                        'Consultar un plan',
                        'planes',
                        'alt'
                    )}

                    ${btn(
                        'Soy empresa',
                        'cotizacion',
                        'alt'
                    )}

                </div>

            </div>


            <!-- FORMULARIO DE CONTACTO -->

            ${form('cita')}


        </div>

    `;


    return `
        <section class="ms-sec">

            ${locationContent}

        </section>
    `;
}


// ======================================================
// 5. SECCIÓN: PREGUNTAS FRECUENTES
// ======================================================

function contactFaqSection() {

    const questions =

        faq(
            '¿Necesito estar afiliado?',
            'No. Puedes solicitar los servicios por separado.'
        )

        +

        faq(
            '¿Cuándo se confirma la cita?',
            'Cuando el equipo de Mundisalud confirme contigo la fecha y disponibilidad.'
        );


    return sec(
        'Antes de enviar',
        'Coordinemos tu visita',
        '',
        questions
    );

}


// ======================================================
// 6. PÁGINA PRINCIPAL: CONTACTO
// ======================================================

export function contact() {

    return (

        // Navegación

        bread('Contacto')

        +

        // Encabezado principal

        heading(
            'Estamos para orientarte',
            'Cuéntanos qué atención necesitas.',
            'Solicita una cita individual, consulta nuestros planes o coordina una propuesta para tu empresa.'
        )

        +

        // Ubicación, atención y formulario

        locationSection()

        +

        // Preguntas frecuentes

        contactFaqSection()

    );

}


// ======================================================
// FIN DEL ARCHIVO contact.js
// ======================================================
