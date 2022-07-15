let links = document.querySelectorAll('.nav-link');
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (event) {
        event.preventDefault();
        let idSection = links[i].getAttribute('href'),
            Section = document.querySelector(idSection)
        Section.scrollIntoView({ block: "start", behavior: "smooth" });
    });
}