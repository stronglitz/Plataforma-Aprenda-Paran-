console.log("Plataforma de Aprendizado carregada! 🚀");

// Formulário de contato
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário
    alert('Mensagem enviada com sucesso!');
});

// Exemplo de interatividade simples para inscrição em cursos
document.querySelectorAll('.curso button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Inscrição realizada com sucesso!');
    });
});
