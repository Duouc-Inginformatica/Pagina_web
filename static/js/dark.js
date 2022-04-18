const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    btnSwitch.classList.toggle('active');
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
        localStorage.setItem('dark-mode', 'true');
    } else {
        localStorage.setItem('dark-mode', 'false');
    }
    if (localStorage.getItem('dark-mode') === 'true') {
        $("nav.navbar").addClass("dark");
        $("div.main").addClass("dark");
        $("div.footer__container").addClass("dark");
        $("div.main__container").addClass("dark");
        $("div.social_logo").addClass("dark");
        $("a.social__icon--link").addClass("dark");
        $("footer__logo").addClass("dark");
        $("a.navbar__links").addClass("dark");
        $("p.website__rights").addClass("dark");
        $("#switch").addClass("active");
        localStorage.setItem("dark-mode", "true");
    } else {
        $("nav.navbar").removeClass("dark");
        $("div.main").removeClass("dark");
        $("div.main__container").removeClass("dark");
        $("div.footer__container").removeClass("dark");
        $("div.social_logo").removeClass("dark");
        $("a.social__icon--link").removeClass("dark");
        $("footer__logo").removeClass("dark");
        $("a.navbar__links").removeClass("dark");
        $("p.website__rights").removeClass("dark");
        $("#switch").removeClass("active");
        localStorage.setItem("dark-mode", "false");
    }
});