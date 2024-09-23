// Funções interativas podem ser adicionadas aqui
console.log("Plataforma de Aprendizado carregada! 🚀");

// Exemplo de interatividade simples
document.querySelectorAll('.curso button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Você clicou em um curso! Mais informações em breve.');
    });
});
