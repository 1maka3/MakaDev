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