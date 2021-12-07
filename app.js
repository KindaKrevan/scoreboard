const score = {
  player1: {
    points: 0,
  },
  player2: {
    points: 0,
  },
};

function addScore(player) {
  score[player].points++;
  document.getElementById(player).innerText = score[player].points;
}

function remScore(player) {
  score[player].points--;
  document.getElementById(player).innerHTML = score[player].points;
}
