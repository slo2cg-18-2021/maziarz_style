document.querySelectorAll('.navbar-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Zapobiega standardowemu działaniu linku
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth', // Płynne przewijanie
            block: 'start', // Ustala, aby przewijanie zaczynało się na początku sekcji
            inline: 'nearest' // Zapewnia najbliższe dopasowanie
        });
    });
});
