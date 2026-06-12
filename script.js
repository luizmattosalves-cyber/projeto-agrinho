// Aguarda o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", () => {
    console.log("Site do Agrinho 2026 carregado com sucesso!");

    // Exemplo de Interatividade: Mensagem de boas-vindas no console
    const botaoConhecer = document.querySelector(".btn");
    if (botaoConhecer) {
        botaoConhecer.addEventListener("click", () => {
            console.log("O usuário clicou para conhecer mais sobre o projeto!");
        });
    }

    // Efeito de rolagem suave ao clicar nos links do menu (para navegadores antigos)
    const linksMenu = document.querySelectorAll("nav a");
    linksMenu.forEach(link => {
        link.addEventListener("click", (e) => {
            const targetId = link.getAttribute("href");
            if (targetId.startsWith("#")) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        });
    });
});
