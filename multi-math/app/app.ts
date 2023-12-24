function startGame() {
    var messagesElement = document.getElementById('messages');
    messagesElement!.innerText = 'Welcome to Multi-Math! Starting new gaem...'

    let playerName: string|undefined = getInputValue('playername');
    logPlayerName(playerName);
    postScores(100, playerName);
}

function logPlayerName(name: string = 'Multi-Math player'): void {
    console.log(`New player ${name} starting the game`);
}

function getInputValue(elementID: string): string|undefined {
    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);
    if(inputElement.value==='') return undefined;
    else return inputElement.value;
}

function postScores(score: number, playerName: string = 'Multi-Math Player'): void {
    const scoreElement = document.getElementById('postedScores');
    scoreElement!.innerText = `${score} - ${playerName}`;
}

document.getElementById('startGame')!.addEventListener('click', startGame);