function queconsola() {
    Swal.fire({
        title: 'De que parte eres?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Yes',
        denyButtonText: 'No',
        customClass: {
            actions: 'my-actions',
            cancelButton: 'order-1 right-gap',
            confirmButton: 'order-2',
            denyButton: 'order-3',
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire('Saved!', '', 'success')
        } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
        }
    })
}

function vervideos() {
    Swal.fire({
        text: 'Ver trailer',
        target: '#ver-video',
        confirmButtonText: 'Aceptar',
        confirmButtonTextcolor: 'var(--primary-color-light)',
        confirmButtonColor: 'var(--primary-color)',
        customClass: {
            container: 'position-absolute'
        },
        toast: true,
        position: 'bottom-right'
    })
}