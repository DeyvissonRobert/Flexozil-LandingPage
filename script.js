function iniciarContador() {
    let tempoRestante = 10 * 60; // 10 minutos em segundos

    function atualizarContador() {
        let minutos = Math.floor(tempoRestante / 60);
        let segundos = tempoRestante % 60;
        let contador = document.getElementById("contador");
        
        contador.innerText = `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;

        // Quando faltar 5 minutos, mudar cor e exibir alerta
        if (tempoRestante === 5 * 60) {
            document.getElementById("estoque-alerta").classList.remove("hidden");
            document.getElementById("barra-urgencia").classList.add("urgencia-alta");
        }

        // Se acabar o tempo, muda o texto
        if (tempoRestante > 0) {
            tempoRestante--;
            setTimeout(atualizarContador, 1000);
        } else {
            contador.innerText = "Promoção Expirada!";
            document.getElementById("barra-urgencia").style.backgroundColor = "gray"; // Cinza quando expira
        }
    }

    atualizarContador();
}

document.addEventListener("DOMContentLoaded", iniciarContador);

//Header
function toggleMenu() {
    const menu = document.querySelector(".nav-links");
    const menuToggle = document.querySelector(".menu-toggle");

    menu.classList.toggle("active");
    menuToggle.classList.toggle("active");
}

// Função para rolar suavemente até a seção de compra
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Iniciar funcionalidades ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
    iniciarContador();
    avisoPoucasUnidades();
});

document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', function () {
        const faqItem = this.parentElement;

        // Fecha todas as outras perguntas antes de abrir a nova
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) {
                item.classList.remove('active');
            }
        });

        // Alterna a classe 'active' na pergunta clicada
        faqItem.classList.toggle('active');
    });
});

//Função de troca de página
        document.addEventListener("DOMContentLoaded", function () {
            const links = document.querySelectorAll(".botao-comprar");
    
            links.forEach(link => {
                link.addEventListener("click", function (e) {
                    e.preventDefault(); // Impede o carregamento imediato
                    const href = this.getAttribute("href"); // Obtém o destino do link
                    
                    document.body.classList.add("zoom-out"); // Ativa o efeito de saída
    
                    setTimeout(() => {
                        window.location.href = href;
                    }, 500); // Espera a animação antes de mudar a página
                });
            });
        });



