function RandInt(min, max) {
  let a = Math.random() * max;
  for (let I = min; I < max; I++) {
    if (a <= I + 1) {
      a = I;
      break;
    }
  }
  return a;
}

class Player {
  constructor(name, side) {
    this.name = name;
    this.side = side;
  }
}

function MortPlayer(side, morts) {
  let Mort = RandInt(0, side.length);
  console.log(side[Mort].side + " " + side[Mort].name + " est mort !");
  morts.push(side[Mort]);
  side.splice(Mort, 1);
}

function PlayRound(teamA, teamD) {
  let SpikeIsPlanted = false;
  let morts = [];
  let chance = 0.5

  if (Math.random() < chance) {
    MortPlayer(teamA, morts);
    if (Math.random() < 0.6) {
      SpikeIsPlanted = true;
      console.log("Le Spike est planté");
    }
  }
   else {
    MortPlayer(teamD, morts);
    if (Math.random() < 0.4) {
      SpikeIsPlanted = true;
      console.log("Le Spike est planté");
    }
  }
  

  if (SpikeIsPlanted) {
    chance = 0.7;
  } 

  while (teamA.length > 0 && teamD.length > 0) {
    if (Math.random() > chance) {
      MortPlayer(teamA, morts);
    } else {
      MortPlayer(teamD, morts);
    }
    if (teamA.length <= 0) {
      console.log("Les attaquant perdent le round !");
      return teamD[0].side;
    } else if (teamD.length <= 0) {
      console.log("Les défenseurs perdent le round !");
      return teamA[0].side;
    }
  }
  console.log(morts);
}

allNames = ["Jett", "Omen", "Fade", "Phoenix", "Chamber"];

let ScoreA = 0,
  ScoreB = 0;

while (ScoreA < 13 && ScoreB < 13) {
  let attaquants = [];
  let defenseurs = [];

  for (let i = 0; i < allNames.length; i++) {
    let attaquant = new Player(allNames[i], "attaquant");
    let defenseur = new Player(allNames[i], "defenseur");
    attaquants.push(attaquant);
    defenseurs.push(defenseur);
  }

  if (PlayRound(attaquants, defenseurs) == "attaquant") {
    ScoreA += 1;
  } else {
    ScoreB += 1;
  }
  console.log("Score A-D: " + ScoreA + " " + ScoreB);

  if (ScoreA >= 13) {
    console.log("Les attaquants ont gagnés !");
    break;
  } else if (ScoreB >= 13) {
    console.log("Les défenseurs ont gagnés !");
    break;
  }
}
