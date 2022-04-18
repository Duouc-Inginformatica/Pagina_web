function statusnegro() {
    if (body.classList.contains("dark")) {
        return '#242526';
    } else {
        return '#FFF'

    }

}

function logine() {
    Swal.fire({
        title: 'Iniciar sesión',
        html: `<input type="text" id="login" class="swal2-input" placeholder="Nombre de usuario">
        <input type="password" id="password" class="swal2-input" placeholder="Contraseña">`,
        confirmButtonText: 'Ingresar',
        confirmButtonColor: '#27f2ae',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#27f2ae',
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