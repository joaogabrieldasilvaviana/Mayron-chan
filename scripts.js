document.getElementById('changeBackground').addEventListener('click', function() {
    // Altera a cor do fundo para uma cor aleatória
    document.body.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
});
