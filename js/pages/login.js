// ======================================================
// MUNDISALUD - INICIAR SESIÓN
// Archivo: js/pages/login.js
// ======================================================

export function login() {

    return `
        <section class="ms-auth-section">

            <div class="ms-auth-card">

                <div class="ms-auth-icon">
                    <i data-lucide="log-in"></i>
                </div>

                <h1>Iniciar Sesión</h1>

                <p>
                    Bienvenido a Mundisalud.
                    Ingresa tus datos para continuar.
                </p>

                <form class="ms-auth-form" data-form="login">

                    <label for="login-correo">
                        Correo electrónico
                    </label>

                    <input
                        id="login-correo"
                        type="email"
                        name="correo"
                        placeholder="correo@ejemplo.com"
                        autocomplete="username"
                        required
                    >

                    <label for="login-clave">
                        Contraseña
                    </label>

                    <input
                        id="login-clave"
                        type="password"
                        name="password"
                        placeholder="Ingresa tu contraseña"
                        autocomplete="current-password"
                        required
                    >

                    <button type="submit" class="ms-auth-submit">
                        Ingresar
                    </button>

                    <div class="ms-feedback" role="status"></div>

                </form>

                <p class="ms-auth-bottom">
                    ¿No tienes una cuenta?
                    <button type="button" data-page="registrar">
                        Regístrate aquí
                    </button>
                </p>

            </div>

        </section>
    `;
}