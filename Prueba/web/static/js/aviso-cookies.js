const botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
const avisoCookies = document.getElementById('aviso-cookies');
const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');

dataLayer = [];

function confcokkies() {
    swal({
        title: "Cookies aceptadas",
        text: "Usted acepto las cookies!",
        type: "success",
        position: "top-end",
        closeOnConfirm: false
    });
}

function confcokkies2() {
    swal({
        title: "Cookies aceptadas",
        text: "Usted acepto las cookies!",
        type: "success",
        position: "top-end",
        closeOnConfirm: false
    });
}

if (!localStorage.getItem('cookies-aceptadas')) {
    avisoCookies.classList.add('activo');
    fondoAvisoCookies.classList.add('activo');
} else {
    dataLayer.push({ 'event': 'cookies-aceptadas' });
}

botonAceptarCookies.addEventListener('click', () => {
    avisoCookies.classList.remove('activo');
    fondoAvisoCookies.classList.remove('activo');
    confcokkies();

    localStorage.setItem('cookies-aceptadas', true);

    dataLayer.push({ 'event': 'cookies-aceptadas' });
});