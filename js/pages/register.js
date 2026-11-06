// ======================================================
// MUNDISALUD - REGISTRO DE USUARIOS
// Archivo: js/pages/register.js
// ======================================================

export function register() {

    return `
        <section class="ms-auth-section">

            <div class="ms-auth-card">

                <div class="ms-auth-icon">
                    <i data-lucide="user-plus"></i>
                </div>

                <h1>Crear una cuenta</h1>

                <p>
                    Regístrate en Mundisalud para acceder
                    a nuestros servicios.
                </p>

                <form class="ms-auth-form" data-form="registro">

                    <label for="reg-nombre">Nombres</label>
                    <input
                        id="reg-nombre"
                        type="text"
                        name="nombre"
                        placeholder="Ingresa tus nombres"
                        autocomplete="given-name"
                        required
                    >

                    <label for="reg-apellido">Apellidos</label>
                    <input
                        id="reg-apellido"
                        type="text"
                        name="apellido"
                        placeholder="Ingresa tus apellidos"
                        autocomplete="family-name"
                        required
                    >

                    <label for="reg-cedula">Cédula</label>
                    <input
                        id="reg-cedula"
                        type="text"
                        name="cedula"
                        placeholder="Ingresa tu cédula"
                        inputmode="numeric"
                        maxlength="10"
                        pattern="[0-9]{10}"
                        title="Ingresa 10 dígitos"
                        required
                    >

                    <label for="reg-correo">Correo electrónico</label>
                    <input
                        id="reg-correo"
                        type="email"
                        name="correo"
                        placeholder="correo@ejemplo.com"
                        autocomplete="email"
                        required
                    >

                    <label for="reg-celular">Celular</label>
                    <input
                        id="reg-celular"
                        type="tel"
                        name="celular"
                        placeholder="09XXXXXXXX"
                        autocomplete="tel"
                        required
                    >

                    <label for="reg-clave">Contraseña</label>
                    <input
                        id="reg-clave"
                        type="password"
                        name="password"
                        placeholder="Mínimo 8 caracteres"
                        autocomplete="new-password"
                        minlength="8"
                        required
                    >

                    <label for="reg-confirmar">Confirmar contraseña</label>
                    <input
                        id="reg-confirmar"
                        type="password"
                        name="confirmar"
                        placeholder="Repite tu contraseña"
                        autocomplete="new-password"
                        minlength="8"
                        required
                    >

                    <button type="submit" class="ms-auth-submit">
                        Registrarme
                    </button>

                    <div class="ms-feedback" role="status"></div>

                </form>

                <p class="ms-auth-bottom">
                    ¿Ya tienes una cuenta?
                    <button type="button" data-page="login">
                        Iniciar Sesión
                    </button>
                </p>

            </div>

        </section>
    `;
}