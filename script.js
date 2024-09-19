document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === '1234') {
        window.location.href = 'inicio.html';
    } else {
        document.getElementById('errorMessage').textContent = 'Usuario o contraseña incorrectos';
    }
});

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

document.addEventListener('keydown', function(event) {
    // Lista de teclas de función que deseas deshabilitar
    const functionKeys = ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'];

    if (functionKeys.includes(event.key)) {
        event.preventDefault();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey) {
        event.preventDefault();
        console.log('Tecla Ctrl cancelada');
    }
});
