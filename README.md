# Mundisalud — Proyecto organizado

Esta versión separa la maqueta original en archivos para que puedas mantener cada parte sin tener todo el HTML, CSS y JavaScript mezclado. Se conservó el contenido y el comportamiento de la maqueta: navegación interna, servicios, planes, páginas informativas y formularios demostrativos.

## Estructura de carpetas

```text
mundisalud_organizado/
├── index.html                 # Estructura principal de la web
├── css/
│   └── styles.css              # Todos los estilos y diseño responsive
├── assets/
│   └── images/                 # Fotografías y logotipos que agregues
└── js/
    ├── main.js                 # Inicio de la aplicación y eventos
    ├── router.js               # Decide qué página mostrar
    ├── data/
    │   ├── services.js          # Catálogo de servicios
    │   └── plans.js             # Planes y beneficios
    ├── components/
    │   ├── ui.js                # Botones, títulos, secciones, formularios y tabla
    │   └── catalog.js           # Tarjetas de servicios/planes y banner empresarial
    └── pages/
        ├── home.js              # Página de inicio
        ├── services.js          # Listado y detalle de servicios
        ├── plans.js             # Listado y detalle de planes
        ├── enterprise.js       # Página para empresas
        ├── about.js             # Página Nosotros
        ├── contact.js           # Página Contacto
        ├── conditions.js        # Condiciones de planes
        └── privacy.js           # Aviso de privacidad
```

## Qué hace cada parte

- **index.html:** contiene el encabezado, menú, espacio donde se dibuja la página (`#ms-content`) y pie de página. No debe contener grandes bloques de CSS o JavaScript.
- **css/styles.css:** controla colores, tamaños, tarjetas, formularios, distribución y adaptación a celulares mediante `@media`.
- **js/data/:** guarda información, no diseño. Para agregar un servicio, edita `services.js`; para modificar precios o beneficios, edita `plans.js`.
- **js/components/:** contiene piezas reutilizables. Por ejemplo, `btn()` construye botones y `sec()` crea secciones con el mismo formato. Así evitas copiar el mismo HTML muchas veces.
- **js/pages/:** cada archivo devuelve el contenido de una página. Si vas a modificar el Inicio, trabaja en `home.js`; para la página Nosotros, usa `about.js`.
- **js/router.js:** relaciona nombres como `inicio`, `servicios`, `planes` o `contacto` con sus funciones de página. También reconoce detalles como `servicio-ecografias` y `plan-familiar`.
- **js/main.js:** conecta los botones con el router, actualiza el menú activo, vuelve a dibujar los iconos y muestra el mensaje demostrativo de los formularios.
- **assets/images/:** aquí puedes guardar fotos del centro, profesionales, laboratorio, logotipo y demás recursos gráficos.

## Cómo abrirlo en Visual Studio Code

1. Descomprime la carpeta y abre `mundisalud_organizado` en Visual Studio Code.
2. Abre `index.html`.
3. Ejecuta **Open with Live Server** (extensión Live Server). También puedes usar otro servidor local.
4. No abras `index.html` directamente con doble clic: los módulos JavaScript (`type="module"`) necesitan servirse desde un servidor local.

La librería de iconos Lucide se carga desde un CDN, por lo que necesita conexión a internet.

## Importante

Los formularios siguen siendo demostrativos: muestran un mensaje, pero no envían ni guardan datos. Para recibir solicitudes reales después habrá que conectarlos a un backend o a un servicio autorizado.
