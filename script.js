  function getComputerChoice() {
            const choices = ['rock', 'paper', 'scissor'];
            const randomIndex = Math.floor(Math.random() * choices.length);
            return choices[randomIndex];
        }
        
        function getHumanChoice(){
            let userinput = prompt ("Choose rock, paper or scissor");
            userinput = userinput.toLowerCase();
            if (userinput === 'rock' || userinput === 'paper' || userinput === 'scissor'){
                return userinput;
        } 
        else {
            alert("Invalid choice. Please choose rock, paper, or scissor.");
            return getHumanChoice();
        }
    }
        
        humanScore = 0;
        computerScore = 0;
        
        const  playRound = (humanChoice, computerChoice) => {
            if (humanChoice === computerChoice) {
                alert(`It's a tie! Both chose ${humanChoice}.`);
            } else if (
                (humanChoice === 'rock' && computerChoice === 'scissor') ||
                (humanChoice === 'paper' && computerChoice === 'rock') ||
                (humanChoice === 'scissor' && computerChoice === 'paper')
            ) {
                humanScore++;
                alert(`You win! ${humanChoice} beats ${computerChoice}.`);
            } else {
                computerScore++;
                alert(`You lose! ${computerChoice} beats ${humanChoice}.`);
            }
   
            alert(`Score - You: ${humanScore}, Computer: ${computerScore}`);

        }

       
        function playGame(rounds, currentRound = 1) {
           if (currentRound > rounds) return;

         const humanSelection = getHumanChoice();
         const computerSelection = getComputerChoice();

         playRound(humanSelection, computerSelection);

          playGame(rounds, currentRound + 1); // recursive call
        }
        playGame(5);
        alert (`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
        if (humanScore > computerScore) {
            alert("Congratulations! You are the overall winner!");
        } else if (humanScore < computerScore) {
            alert("Sorry, the computer wins overall. Better luck next time!");
        } else {
            alert("It's an overall tie!");
        }
