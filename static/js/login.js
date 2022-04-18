function logine() {
    Swal.fire({
        title: 'Iniciar sesión',
        html: `<input type="text" id="login" class="swal2-input" placeholder="Username">
        <input type="password" id="password" class="swal2-input" placeholder="Password">`,
        confirmButtonText: 'Ingresar',
        confirmButtonColor: '#5c0df0',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#5c0df0',
        background: '#fff',
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