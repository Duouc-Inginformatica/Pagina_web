function valorant() {
    Swal.fire({
    title: '<strong>Valorant <u>TRAILER</u></strong>',
    titleTextColor: 'var(--primary-color-light)',
    icon: '<img src="images/mando.png">',
    html:
      '<iframe width="480" height="315" src="https://www.youtube.com/embed/Ey770ez6ROk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    showCloseButton: true,
    showCancelButton: false,
    focusConfirm: false,
    confirmButtonTextcolor: 'var(--primary-color-light)',
    confirmButtonColor: 'var(--primary-color)',
    background: [
      statusnegro(),
  ],
    confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Genia!',
    confirmButtonAriaLabel: 'Me Gusta, Genial!',
  })
}