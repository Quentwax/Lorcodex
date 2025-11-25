let score1 = 0;
let score2 = 0;
const MAX_SCORE = 20;

function changeScore(player, amount) {
    if (player === 1) {
        score1 = Math.min(MAX_SCORE, Math.max(0, score1 + amount));
        document.getElementById("score1").textContent = score1;
    } else {
        score2 = Math.min(MAX_SCORE, Math.max(0, score2 + amount));
        document.getElementById("score2").textContent = score2;
    }

    highlightWinner();
}

function highlightWinner() {
    const p1 = document.getElementById("joueur1");
    const p2 = document.getElementById("joueur2");

    if (score1 === MAX_SCORE && score1 > score2) {
        p1.style.opacity = "1";
        p2.style.opacity = "0.4";
    } 
    else if (score2 === MAX_SCORE && score2 > score1) {
        p2.style.opacity = "1";
        p1.style.opacity = "0.4";
    }
    else {
        p1.style.opacity = "1";
        p2.style.opacity = "1";
    }
}

document.getElementById("flipBtn").addEventListener("click", () => {
    document.getElementById("joueur2").classList.toggle("rotated");
});
