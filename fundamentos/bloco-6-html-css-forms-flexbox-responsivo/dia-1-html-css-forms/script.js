const btnEnviar = document.getElementById('enviar');

function naoEnviar(event) {
event.preventDefault();
}
btnEnviar.addEventListener('click', naoEnviar);