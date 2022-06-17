function colored() {
  if (body.classList.contains("dark")) {
    return 'Se activo el modo oscuro por detecion de sistema';
} else {
    return 'se activo el modo claro por detecion de sistema';

 }
}

function tipe() {
  if (body.classList.contains("dark")) {
    return "success";
} else {
    return "info";
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
      timer: 2000,
      timerProgressBar: true
    })
    await Toast.fire({
      icon: [tipe()],
      title: [colored()]
    })
    }
