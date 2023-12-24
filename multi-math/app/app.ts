function startGame() {
    var messagesElement = document.getElementById('messages');
    messagesElement!.innerText = 'Welcome to Multi-Math! Starting new gaem...'
    logPlayerName('Ashutosh');
}

function logPlayerName(name: string): void {
    console.log(`New player ${name} starting the game`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);