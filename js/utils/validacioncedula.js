// ======================================================
// 1. VALIDAR CÉDULA ECUATORIANA
// ======================================================

export function validarCedulaEcuatoriana(cedula) {

    if (!/^\d{10}$/.test(cedula)) return false;

    const provincia = Number(cedula.slice(0, 2));
    const tercerDigito = Number(cedula[2]);

    if (provincia < 1 || provincia > 24) return false;
    if (tercerDigito > 5) return false;

    const coeficientes = [2, 1, 2, 1, 2, 1, 2, 1, 2];

    let suma = 0;

    for (let i = 0; i < 9; i++) {

        let resultado = Number(cedula[i]) * coeficientes[i];

        if (resultado >= 10) resultado -= 9;

        suma += resultado;
    }

    const verificador = (10 - (suma % 10)) % 10;

    return verificador === Number(cedula[9]);
}


// ======================================================
// 2. VALIDAR RUC ECUATORIANO
// ======================================================

export function validarRucEcuatoriano(ruc) {

    if (!/^\d{13}$/.test(ruc)) return false;

    const provincia = Number(ruc.slice(0, 2));
    const tercerDigito = Number(ruc[2]);
    const establecimiento = Number(ruc.slice(10, 13));

    if (provincia < 1 || provincia > 24) return false;
    if (establecimiento < 1) return false;

    // RUC de persona natural
    if (tercerDigito <= 5) {
        return validarCedulaEcuatoriana(ruc.slice(0, 10));
    }

    // RUC de entidad pública
    if (tercerDigito === 6) {

        const coeficientes = [3, 2, 7, 6, 5, 4, 3, 2];
        let suma = 0;

        for (let i = 0; i < 8; i++) {
            suma += Number(ruc[i]) * coeficientes[i];
        }

        const verificador = (11 - (suma % 11)) % 11;

        return verificador === Number(ruc[8]);
    }

    // RUC de sociedad privada
    if (tercerDigito === 9) {

        const coeficientes = [4, 3, 2, 7, 6, 5, 4, 3, 2];
        let suma = 0;

        for (let i = 0; i < 9; i++) {
            suma += Number(ruc[i]) * coeficientes[i];
        }

        const verificador = (11 - (suma % 11)) % 11;

        return verificador === Number(ruc[9]);
    }

    return false;
}