console.log("Plataforma de Aprendizado carregada! 🚀");

// Formulário de contato
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário
    alert('Mensagem enviada com sucesso! Em breve responderemos.');
});

// Função para inscrição nos cursos
function inscrever(curso) {
    alert(`Inscrição realizada com sucesso no ${curso}! Você agora pode acessar o curso!`);
}
