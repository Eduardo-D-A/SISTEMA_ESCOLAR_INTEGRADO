document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('darkModeToggle');
    const body = document.body;

    // 1. Verifica no localStorage se o modo escuro já estava ativado
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        // Se o botão existir na página, muda o ícone para um sol
        if (toggleBtn) {
            toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        }
    }

    // 2. Adiciona o evento de clique ao botão (se ele existir na página)
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            
            // Salva a escolha e troca o ícone
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
                toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
            } else {
                localStorage.setItem('darkMode', 'disabled');
                toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
            }
        });
    }
});