function valorant() {
    Swal.fire({
    title: '<strong>Valorant <u>TRAILER</u></strong>',
    icon: 'info',
    html:
      '<iframe width="560" height="315" src="{% static "https://www.youtube.com/embed/Ey770ez6ROk" autoplay;  picture-in-picture" allowfullscreen></iframe>',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Genia!',
    confirmButtonAriaLabel: 'Me Gusta, Genial!',
    cancelButtonText:
      '<i class="fa fa-thumbs-down"></i>',
    cancelButtonAriaLabel: 'No me gusta'
  })
}