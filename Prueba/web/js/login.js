// funcion para saber si la pagina esta en negro o en blanco
function statusnegro() {
    if (body.classList.contains("dark")) {
        return 'var(--sidebar-color)';
    } else {
        return 'var(--primary-color-light)';

    }

}

function logine() {
    Swal.fire({
        title: 'Iniciar sesión',
        color: "var(--primary-color)",
        html: `<input type="text" id="login" class="swal2-input" placeholder="Nombre de usuario">
        <input type="password" id="password" class="swal2-input" placeholder="Contraseña">`,
        confirmButtonText: 'Ingresar',
        confirmButtonTextcolor: 'var(--primary-color-light)',
        confirmButtonColor: 'var(--primary-color)',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        cancelButtonColor: 'var(--cancel-color)',
        background: [
            statusnegro(),
        ],
        focusConfirm: false,
        preConfirm: () => {
            const login = Swal.getPopup().querySelector('#login').value
            const password = Swal.getPopup().querySelector('#password').value
            if (!login || !password) {
                Swal.showValidationMessage(`Porfavor ingrese su usuario y contraseña`)
            }
            return { login: login, password: password }
        }
    }).then((result) => {
        Swal.fire(`
          Login: ${result.value.login}
          Password: ${result.value.password}
        `.trim())
    })

}