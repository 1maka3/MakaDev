document.addEventListener('DOMContentLoaded', () => {
    // Lógica de rolagem suave para links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Rola suavemente para a seção, considerando o cabeçalho fixo
                const headerHeight = document.querySelector('header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Lógica de envio de formulário simplificada
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simula o envio
            alert("Mensagem enviada! Entrarei em contato em breve.");

            // Limpa o formulário
            contactForm.reset();
        });
    }

    // Lógica para copiar o nome do Discord
    const discordCopy = document.getElementById('discord-copy');
    const copyFeedback = document.getElementById('copy-feedback');
    if (discordCopy && copyFeedback) {  // Verifica ambos os elementos
        discordCopy.addEventListener('click', async (e) => {
            e.preventDefault();  // Previne comportamentos padrão se houver
            console.log('Clique detectado no Discord copy');  // Debug
            try {
                await navigator.clipboard.writeText('makinhagamesplay');
                console.log('Texto copiado com sucesso');  // Debug
                // Mostra o feedback
                copyFeedback.style.opacity = '1';  // Força visibilidade se CSS falhar
                copyFeedback.classList.remove('opacity-0');
                copyFeedback.classList.add('opacity-100');
                // Esconde após 2 segundos
                setTimeout(() => {
                    copyFeedback.classList.remove('opacity-100');
                    copyFeedback.classList.add('opacity-0');
                    copyFeedback.style.opacity = '0';  // Garante fade-out
                    console.log('Feedback escondido');  // Debug
                }, 2000);
            } catch (err) {
                console.error('Erro ao copiar: ', err);  // Debug
                // Fallback: Mostra um alert se a cópia falhar
                alert('Erro ao copiar. Tente manualmente: makinhagamesplay');
            }
        });
    } else {
        console.error('Elementos discord-copy ou copy-feedback não encontrados');  // Debug aprimorado
    }
});
// Lógica do Modal de Vídeo
document.addEventListener('DOMContentLoaded', () => {
    // ... (código existente)

    const videoModal = document.getElementById('video-modal');
    const modalVideo = document.getElementById('modal-video');
    const closeModalButton = document.getElementById('close-modal');
    const portfolioVideos = document.querySelectorAll('#portfolio video');

    // Função para fechar o modal
    const closeModal = () => {
        videoModal.classList.remove('active');
        // Pausa o vídeo ao fechar
        modalVideo.pause();
        // Remove a classe 'active' após a transição para garantir que o display: none seja aplicado
        setTimeout(() => {
            videoModal.classList.add('hidden');
        }, 300); // 300ms é a duração da transição CSS
    };

    // Adiciona o evento de clique para abrir o modal em cada vídeo do portfólio
    portfolioVideos.forEach(video => {
        video.addEventListener('click', () => {
            // Obtém a URL do vídeo clicado
            const videoSource = video.querySelector('source').getAttribute('src');
            
            // Define a URL no modal
            modalVideo.querySelector('source').setAttribute('src', videoSource);
            modalVideo.load(); // Recarrega o elemento <video> para aplicar a nova source
            
            // Exibe o modal
            videoModal.classList.remove('hidden');
            // Adiciona a classe 'active' após um pequeno delay para a transição de opacidade
            setTimeout(() => {
                videoModal.classList.add('active');
                modalVideo.play(); // Inicia a reprodução
            }, 10);
        });
    });

    // Evento para fechar o modal pelo botão 'X'
    closeModalButton.addEventListener('click', closeModal);

    // Evento para fechar o modal ao clicar no overlay (fora do vídeo)
    videoModal.addEventListener('click', (e) => {
        // Verifica se o clique foi diretamente no overlay (e não no conteúdo do modal)
        if (e.target === videoModal) {
            closeModal();
        }
    });

    // Evento para fechar o modal ao pressionar a tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && videoModal.classList.contains('active')) {
            closeModal();
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {

    // Rolagem suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const headerHeight = document.querySelector('header').offsetHeight;

            if (targetElement) {
                const pos = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                window.scrollTo({ top: pos, behavior: "smooth" });
            }
        });
    });

    // Formulário
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert("Mensagem enviada! Entrarei em contato em breve.");
            contactForm.reset();
        });
    }

    // Copiar Discord
    const discordCopy = document.getElementById('discord-copy');
    const copyFeedback = document.getElementById('copy-feedback');
    if (discordCopy && copyFeedback) {
        discordCopy.addEventListener('click', async (e) => {
            e.preventDefault();
            try {
                await navigator.clipboard.writeText('makinhagamesplay');
                copyFeedback.classList.add('opacity-100');
                setTimeout(() => copyFeedback.classList.remove('opacity-100'), 2000);
            } catch (err) {
                alert('Erro ao copiar.');
            }
        });
    }

    // Modal vídeo
    const videoModal = document.getElementById('video-modal');
    const modalVideo = document.getElementById('modal-video');
    const closeModalButton = document.getElementById('close-modal');
    const portfolioVideos = document.querySelectorAll('#portfolio video');

    portfolioVideos.forEach(video => {
        video.addEventListener('click', () => {
            modalVideo.querySelector('source').src = video.querySelector('source').src;
            modalVideo.load();
            videoModal.classList.remove('hidden');
            setTimeout(() => {
                videoModal.classList.add('active');
                modalVideo.play();
            }, 10);
        });
    });

    closeModalButton.addEventListener('click', () => {
        videoModal.classList.remove('active');
        modalVideo.pause();
        setTimeout(() => videoModal.classList.add('hidden'), 300);
    });

    videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) {
            videoModal.classList.remove('active');
            modalVideo.pause();
            setTimeout(() => videoModal.classList.add('hidden'), 300);
        }
    });

});

/* ============================ */
/* ===== MENU MOBILE JS ======= */
/* ============================ */

document.getElementById("mobile-menu-btn").addEventListener("click", () => {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
});
