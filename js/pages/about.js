
// ======================================================
// MUNDISALUD
// Página: Nosotros
// ======================================================


// 1. Importación de componentes
import {
  icon,
  btn,
  bread,
  heading,
  sec
} from "../components/ui.js";


// 2. Sección: Nuestro propósito
function purposeSection() {

  const content = `
    <div class="ms-grid">

      <div class="ms-tile">
        <span class="ms-icon">
          ${icon('heart-handshake')}
        </span>
        <h3>Atención respetuosa</h3>
        <p>
          Orientación clara para coordinar tu atención.
        </p>
      </div>

      <div class="ms-tile">
        <span class="ms-icon">
          ${icon('shield-plus')}
        </span>
        <h3>Prevención</h3>
        <p>
          Servicios y chequeos para acompañar tu bienestar.
        </p>
      </div>

      <div class="ms-tile">
        <span class="ms-icon">
          ${icon('stethoscope')}
        </span>
        <h3>Atención integral</h3>
        <p>
          Consultas, especialidades y apoyo diagnóstico.
        </p>
      </div>

    </div>
  `;

  return sec(
    'Nuestro propósito',
    'La salud al alcance de todos.',
    'Acercamos servicios médicos a personas, familias y empresas mediante atención individual, planes de bienestar y propuestas empresariales.',
    content
  );
}


// 3. Sección: Nuestro equipo
function teamSection() {

  const professionals = [
    'Medicina general',
    'Especialidades médicas',
    'Laboratorio clínico'
  ];

  const content = `
    <div class="ms-grid">

      ${professionals.map((professional) => `
        <div class="ms-tile">

          <div class="ms-outline">
            ${icon('user-round')}
            <p>Fotografía del profesional</p>
          </div>

          <h3>${professional}</h3>

          <p>
            Espacio para nombre y credenciales verificadas.
          </p>

        </div>
      `).join('')}

    </div>
  `;

  return sec(
    'Nuestro equipo',
    'Conoce a quienes te atenderán.',
    '',
    content,
    true
  );
}


// 4. Sección: Instalaciones
function facilitiesSection() {

  const content = `
    <div class="ms-grid two">

      <div class="ms-outline">
        ${icon('hospital')}
        <p>Fotografía real del centro médico</p>
      </div>

      <div class="ms-outline">
        ${icon('flask-conical')}
        <p>Fotografía real del laboratorio</p>
      </div>

    </div>

    <div class="ms-actions">

      ${btn('Ubicación y contacto', 'contacto')}

      ${btn(
        'Ver nuestros servicios',
        'servicios',
        'alt'
      )}

    </div>
  `;

  return sec(
    'Nuestras instalaciones',
    'Un espacio para cuidar de ti.',
    '',
    content
  );
}


// 5. Página principal: Nosotros
export function about() {

  return (

    bread('Nosotros')

    +

    heading(
      'Conoce Mundisalud',
      'Un equipo comprometido con tu bienestar.',
      'Somos un centro de especialidades médicas y laboratorio clínico enfocado en atención, prevención y diagnóstico.'
    )

    +

    purposeSection()

    +

    teamSection()

    +

    facilitiesSection()

  );

}
