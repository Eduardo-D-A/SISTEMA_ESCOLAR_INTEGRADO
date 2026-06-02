// Simulação de logins e senhas pré-definidos
const bancoDeUsuarios = {
    "12345": "senha123",  
    "admin": "admin123",
    "joao123": "123456"
};

document.getElementById('form_login').addEventListener('submit', function(event) {
    event.preventDefault();

    const inputLogin = document.getElementById('floatingInput');
    const inputSenha = document.getElementById('floatingPassword');

    const erroLogin = document.getElementById('erroLogin');
    const erroSenha = document.getElementById('erroSenha');
    const erroCredenciais = document.getElementById('erroCredenciais');
    const sucessoPopup = document.getElementById('sucessoPopup');

    const loginDigitado = inputLogin.value.trim();
    const senhaDigitada = inputSenha.value;

    let camposPreenchidos = true;

    // Oculta os erros novamente a cada tentativa
    erroLogin.style.display = 'none';
    erroSenha.style.display = 'none';
    erroCredenciais.style.display = 'none';

    if (loginDigitado === "") {
        erroLogin.style.display = 'block';
        camposPreenchidos = false;
    }

    if (senhaDigitada === "") {
        erroSenha.style.display = 'block';
        camposPreenchidos = false;
    }

    if (camposPreenchidos) {
        if (bancoDeUsuarios[loginDigitado] && bancoDeUsuarios[loginDigitado] === senhaDigitada) {
            
            sucessoPopup.style.display = 'block';
            
            setTimeout(() => {
                sucessoPopup.style.display = 'none';
                window.location.href = 'pais_site.html';
            }, 2000);

        } else {
            erroCredenciais.style.display = 'block';
        }
    }
});     