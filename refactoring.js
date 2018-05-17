let game = () => {
	let buttons = Array.from(document.getElementsByTagName('button'));
	let pScoreBoard = document.getElementById('pScore');
	let cScoreBoard = document.getElementById('cScore');
	let round = document.getElementById('match');
	let gWinner = document.getElementById('winner');

	let playerScore = 0;
	let computerScore = 0;
	let playerSelection;
	let rounds = 0;
	let playRound = () => {
		let computerSelection = computerChoice();
		if(playerSelection === computerSelection) {
    		round.textContent = "Tie!";
    	} else if(playerSelection === 'rock' && computerSelection === 'paper') {
    	    computerScore += 1;
    		round.textContent = "You lose the round! Paper beats rock.";
    	} else if(playerSelection === 'rock' && computerSelection === 'scissors') {
    	    playerScore += 1;
    		round.textContent = "You win the round! Rock beats scissors.";
    	} else if(playerSelection === 'paper' && computerSelection === 'rock') {
    	    playerScore += 1;
    		round.textContent = "You win the round! Paper beats rock.";
    	} else if(playerSelection === 'paper' && computerSelection === 'scissors') {
    	    computerScore += 1;
    	    round.textContent = "You lose the round! Scissors beats paper.";
    	} else if(playerSelection === 'scissors' && computerSelection === 'rock') {
    	    computerScore += 1;
    		round.textContent = "You lose the round! Rock beats scissors.";
    	} else if(playerSelection === 'scissors' && computerSelection === 'paper') {
    	    playerScore += 1;
    		round.textContent = "You win the round! Paper beats scissors.";
    	}
    	rounds += 1;
    	pScoreBoard.textContent = `Player Score: ${playerScore}`;
    	cScoreBoard.textContent = `Computer Score: ${computerScore}`;
    	reset();
	}

	let score = () => {
		if(playerScore > computerScore) {
	    	gWinner.textContent = `You win the game! Your score: ${playerScore} Computer score:  ${computerScore}`;
		} else if(computerScore > playerScore) {
			gWinner.textContent = `The computer wins the game! Your score: ${playerScore} Computer score:  ${computerScore}`;
		} else {
			gWinner.textContent = `You tied the computer! Your score: ${playerScore} Computer score: ${computerScore}`;
		}
	}

	let reset = () => {
		if(rounds === 5) {
			score();
			playerScore = 0;
			computerScore = 0;
			rounds = 0;
			computerSelection = '';
			playerSelection = '';
		}
	}

	let computerChoice = () => {
		let arr = ['rock', 'paper', 'scissors'];
		let choice = arr[Math.floor(Math.random() * arr.length)];
		return choice;
	}

	buttons.forEach(function(button) {
		button.addEventListener('click', function() {
			if(button.value === 'rock') {
				playerSelection = "rock";
				if(rounds <= 5) {
					playRound();
				}
			} else if(button.value === 'paper') {
				playerSelection = "paper";
				if(rounds <= 5) {
					playRound();
				}
			} else if(button.value === 'scissors') {
				playerSelection = "scissors";
				if(rounds <= 5) {
					playRound();
				}
			}
		}, false)
	});
}
game();