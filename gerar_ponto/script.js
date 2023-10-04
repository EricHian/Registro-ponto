function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const currentTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock-text").textContent = `Horário atual: ${currentTime}`;
}

document.addEventListener("DOMContentLoaded", function() {
    updateTime();
    setInterval(updateTime, 1000);

    const pontoForm = document.getElementById("ponto-form");
    const registroDiv = document.getElementById("registro");

    pontoForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const nome = document.getElementById("nome").value;
        const tipo = document.getElementById("tipo").value;
        const horaRegistro = document.getElementById("clock-text").textContent;

        const registroTexto = `Nome: ${nome}, Tipo: ${tipo}, Hora: ${horaRegistro}`;
        const registroElement = document.createElement("p");
        registroElement.textContent = registroTexto;

        registroDiv.appendChild(registroElement);

        pontoForm.reset();
    });
});