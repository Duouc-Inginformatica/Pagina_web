const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box_1"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");


toggle.addEventListener("click", () => {
        sidebar.classList.toggle("close");
    })
    // funcion para fozar el cierrre de la pestaña y el menu al apretar el boton de buscar
searchBtn.addEventListener("click", () => {
    if (sidebar.classList.contains("close")) {
        // console.log("la barra de navegacion esta cerrada");
    } else {
        sidebar.classList.toggle("close");
        // console.log("Se fuerza el cierre de la barra de navegacion");
    }
})


modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        modeText.innerText = "Modo oscuro ";
    } else {
        modeText.innerText = "Modo claro ";

    }
});