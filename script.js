document.addEventListener('DOMContentLoaded', function() {
    console.log("JavaScript carregado!");

    const imagens = document.querySelectorAll("img");
    imagens.forEach(img => {
        img.addEventListener("error", () => {
            console.error(`Erro ao carregar a imagem: ${img.src}`);
        });
    });

    // Animação com ScrollReveal
    ScrollReveal().reveal('#inicio', { delay: 500 });
    ScrollReveal().reveal('#sapos', { delay: 500 });
    ScrollReveal().reveal('#galeria', { delay: 500 });
    ScrollReveal().reveal('#contato', { delay: 500 });
});
