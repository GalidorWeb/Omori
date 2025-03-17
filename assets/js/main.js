console.log('This site was generated by Hugo.');


// Função para abrir/fechar o menu
export function toggleMenu() {
    const hamburgerbtn = document.getElementById('hamburgerbtn');
    const mobileMenu = document.getElementById('mobilemenu');
    if (hamburgerbtn && mobileMenu) {
        hamburgerbtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');  // Alterna a visibilidade do menu
        });
    }
}

// Função para fechar o menu
export function closeMenu() {
    const overlay = document.getElementById('btnclose');
    const mobileMenu = document.getElementById('mobilemenu');
    if (overlay && mobileMenu) {
        overlay.addEventListener('click', () => {
            mobileMenu.classList.add('hidden'); // Oculta o menu
        });
    }
}