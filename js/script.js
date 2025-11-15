function playGame() {
    let player = prompt("Choose: rock, paper, or scissors").toLowerCase();

    if (player !== "rock" && player !== "paper" && player !== "scissors") {
        alert("Invalid choice!");
        return;
    }

    let choices = ["rock", "paper", "scissors"];
    let computer = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if (player === computer) {
        result = "It's a draw!";
    }
    else if (player === "rock") {
        if (computer === "scissors") result = "You win! Rock crushes scissors.";
        else result = "You lose. Paper covers rock.";
    }
    else if (player === "paper") {
        if (computer === "rock") result = "You win! Paper covers rock.";
        else result = "You lose. Scissors cut paper.";
    }
    else if (player === "scissors") {
        if (computer === "paper") result = "You win! Scissors cut paper.";
        else result = "You lose. Rock crushes scissors.";
    }

    alert("Computer chose: " + computer + "\n" + result);
}
