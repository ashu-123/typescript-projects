function startGame() {
    var messagesElement = document.getElementById('messages');
    messagesElement.innerText = 'Welcome to Multi-Math! Starting new gaem...'
}

document.getElementById('startGame').addEventListener('click', startGame);