const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box_1"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text"),
    modehome = body.querySelector(".home"),
    main = body.querySelector(".main"),
    bd = body.querySelector(".bd-grid");


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

// funcion para almacenar el modo oscuro unido a la cookie y cambiar el modo de la pagina al apretar el boton de modo oscuro o claro
if (localStorage.getItem('modo-oscuro')) {
    body.classList.add('dark');
    modeSwitch.checked = true;
} else {
    modeSwitch.checked = false;
    body.classList.remove('dark');
}


//      modo oscuro
modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
    // console.log("se activo el modo oscuro por toque de usuario");
    if (body.classList.contains("dark")) {
        modeText.innerText = "Modo oscuro ";
        localStorage.setItem('modo-oscuro', true);
    } else {
        modeText.innerText = "Modo claro ";
        // console.log("se activo el modo claro por toque de usuario");

    }
})

// sistema para cerrar el menu al hacer click en las cardview de la pagina
main.addEventListener("click", (e) => {
    if (sidebar.classList.contains("close")) {
        console.log("la barra de navegacion esta no estaba abierta");
    } else {
        sidebar.classList.toggle("close");
        console.log("Se fuerza el cierre de la barra de navegacion se hizo click en el fondo");
    }
})

// sistema para adaptar las cardview dependiendo del estado de la barra de navegacion
toggle.addEventListener("click", () => {
    if (sidebar.classList.contains("close")) {
        // console.log("la barra de navegacion esta cerrada");
        document.getElementById("gamecard").style.margin = "149px";
    } else {
        sidebar.classList.contains("close");
        // console.log("200px");
        document.getElementById("gamecard").style.margin = "294px";
        // margin: 149px;
    }
})

// sistema para definir el modo de color del sistema
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    modeText.innerText = "Modo oscuro ";
    localStorage.setItem('modo-oscuro', true);
} else { 
    modeText.innerText = "Modo claro ";
    localStorage.setItem('modo-oscuro', false);
}
