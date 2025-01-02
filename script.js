const form = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === '1234') {
        alert('LOGIN REALIZADO COM SUCESSO!');
        // se correto, receberá um alerta de sucesso
    } else {
        errorMessage.textContent = 'USUÁRIO OU SENHA INCORRETOS!';
    }
});
