
// ======================================================
// MUNDISALUD - CATÁLOGO DE SERVICIOS MÉDICOS
// Archivo: js/data/services.js
// Descripción: Información de los servicios individuales.
// ======================================================

export const services = [

    // ==================================================
    // 1. CONSULTAS MÉDICAS
    // ==================================================

    {
    id: 'consultas',
    name: 'Consultas médicas',
    icon: 'stethoscope',
    image: 'assets/images/consulta_medica.jpg',

    desc: 'Medicina general y atención por especialidades.',

    title: 'Atención médica para cuidar de ti.',

    detail: 'Solicita una consulta de medicina general o consulta la disponibilidad de nuestros especialistas.',

    items: [
        'Medicina general',
        'Ginecología y obstetricia',
        'Pediatría',
        'Traumatología',
        'Cardiología y urología',
        'Otorrinolaringología',
        'Psicología y nutrición'
    ],

    note: 'Las especialidades y horarios se confirman al solicitar atención.'
},


    // ==================================================
    // 2. ECOGRAFÍAS
    // ==================================================

    {
        id: 'ecografias',
        name: 'Ecografías',
        icon: 'scan-line',
        image: 'assets/images/ecografias.jpg',

        desc: 'Apoyo diagnóstico para tu atención médica.',

        title: 'Coordina la ecografía que necesitas.',

        detail: 'Consulta los tipos de ecografía disponibles, sus tarifas y la preparación indicada para tu examen.',

        items: [
            'Consulta el tipo de estudio que necesitas',
            'Recibe indicaciones de preparación',
            'Coordina fecha y disponibilidad'
        ],

        note: 'El 30% de descuento de los planes aplica según sus condiciones y servicios elegibles.'
    },


    // ==================================================
    // 3. RAYOS X
    // ==================================================

    {
        id: 'rayos-x',
        name: 'Rayos X',
        icon: 'scan',
        image: 'assets/images/rayos_x.jpg',

        desc: 'Estudios mediante servicio especializado.',

        title: 'Rayos X con atención coordinada.',

        detail: 'Solicita información del estudio indicado y conoce la modalidad, ubicación y disponibilidad del servicio especializado.',

        items: [
            'Consulta disponibilidad del estudio',
            'Confirma tarifa y lugar de atención',
            'Coordina tu cita con el equipo'
        ],

        note: 'La modalidad y el prestador se confirman para cada estudio. No se presume que esté incluido en los planes.'
    },


    // ==================================================
    // 4. LABORATORIO CLÍNICO
    // ==================================================

    {
        id: 'laboratorio',
        name: 'Laboratorio clínico',
        icon: 'flask-conical',
        image: 'assets/images/laboratorio_clinico.jpg',

        desc: 'Exámenes individuales de prevención y diagnóstico.',

        title: 'Conoce más sobre tu salud.',

        detail: 'Solicita tus exámenes de laboratorio de forma individual. Te orientamos sobre pruebas disponibles, preparación y entrega de resultados.',

        items: [
            'Hematología',
            'Química sanguínea',
            'Hormonas',
            'Inmunología y pruebas especializadas',
            'Exámenes de rutina y ocupacionales',
            'Toma de muestras'
        ],

        note: 'La preparación y el plazo de entrega dependen de las pruebas solicitadas.'
    },


    // ==================================================
    // 5. SALUD VISUAL
    // ==================================================

    {
        id: 'visual',
        name: 'Salud visual',
        icon: 'eye',
        image: 'assets/images/salud_visual.jpg',

        desc: 'Chequeos visuales y atención de optometría.',

        title: 'Dale atención a tu salud visual.',

        detail: 'Consulta por chequeos visuales y atención de optometría sin necesidad de contratar un plan.',

        items: [
            'Chequeo visual',
            'Consulta de optometría',
            'Coordinación de disponibilidad'
        ],

        note: 'Confirmar alcance y tarifa antes de la cita. El chequeo de los planes tiene condiciones propias.'
    },


    // ==================================================
    // 6. ATENCIÓN DENTAL
    // ==================================================

    {
        id: 'dental',
        name: 'Atención dental',
        icon: 'smile',
        image: 'assets/images/saluld_dental.jpg',

        desc: 'Consulta odontológica y servicios por separado.',

        title: 'El cuidado de tu sonrisa empieza aquí.',

        detail: 'Solicita atención dental individual y consulta con nuestro equipo los procedimientos disponibles.',

        items: [
            'Consulta de disponibilidad',
            'Orientación sobre servicios dentales',
            'Cotización según el procedimiento'
        ],

        note: 'Los procedimientos y tarifas se confirman con el prestador. El chequeo del plan no implica tratamientos dentales incluidos.'
    }

];

// ======================================================
// FIN DEL CATÁLOGO DE SERVICIOS
// ======================================================
