// Seleciona o formulário e o botão
const form = document.getElementById("contactForm");
const button = document.getElementById("alertButton");

// Adiciona evento de envio ao formulário
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o comportamento padrão do formulário

    // Obtém os valores dos campos
    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("Telefone").value.trim();
    const email = document.getElementById("email").value.trim();

    // Verifica se todos os campos foram preenchidos
    if (!nome || !telefone || !email) {
        alert("Por favor, preencha todos os campos."); // Exibe mensagem de erro
        return; // Interrompe a execução
    }

    // Exibe mensagem de sucesso
    alert("Dados Enviados com Sucesso!");

    // Limpa o formulário
    form.reset();

    // Atualiza a página (opcional)
    location.reload();
});

// Quando o alerta surge, a página só reinicia quando eu concluo a msg
button.removeEventListener("click", () => {});
