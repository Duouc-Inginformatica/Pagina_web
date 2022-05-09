function colored() {
  if (body.classList.contains("dark")) {
    return 'Se activo el modo oscuro por detección de sistema';
} else {
    return 'se activo el modo claro por detección de sistema';

}

}


window.colordet = async () => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-right',
      iconColor: 'white',
      customClass: {
        popup: 'colored-toast'
      },
      showConfirmButton: false,
      timer: 3400,
      timerProgressBar: true
    })
    await Toast.fire({
      icon: 'info',
      title: [colored()]
    })
    }
