// Seleciona o botão pelo ID
const button = document.getElementById("alertButton");

// Adiciona evento de clique no botão
button.addEventListener("click", function () {
    alert("Dados Enviados com Sucesso!"); // Alerta de sucesso
    location.reload(); // Recarrega a página
});

// Seleciona o formulário pelo ID
const form = document.getElementById('contactForm');

// Adiciona evento de envio ao formulário
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Obtém os valores dos campos
    const name = document.getElementById("nome").value.trim();
    const phone = document.getElementById("Telefone").value.trim();
    const email = document.getElementById("email").value.trim();

    // Valida se os campos obrigatórios estão preenchidos
    if (!name || !email) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return; // Interrompe a execução
    }

    alert("Formulário enviado com sucesso!");
    form.reset(); // Limpa os campos do formulário
});
