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
  constructor(name, side, kills, deaths) {
    this.name = name;
    this.side = side;
    this.kills = kills;
    this.deaths = deaths;
  }
}

function MortPlayer(side, tueur, morts) {
  let Mort = RandInt(0, side.length);
  tueur.kills += 1;
  console.log(
    side[Mort].side +
      " " +
      side[Mort].name +
      " est mort par " +
      tueur.side +
      " " +
      tueur.name +
      " ! (" +
      tueur.kills +
      ")"
  );
  morts.push(side[Mort]);
  side.splice(Mort, 1);
}

function PlayRound(teamA, teamD, morts) {
  let SpikeIsPlanted = false;

  let chance = 0.5;

  if ((ScoreA + ScoreB) % 3 == 2 && Math.random() < 0.8) {
    for (let i = 0; i < teamA.length; i++) {
      if (teamA[i].name == "Jett") {
        MortPlayer(teamD, teamA[i], morts);
        console.log("nice smurf jett...");
      }
    }
  }

  if (Math.random() < chance) {
    MortPlayer(teamA, teamD[RandInt(0, teamD.length - 1)], morts);
    if (Math.random() < 0.6) {
      SpikeIsPlanted = true;
      console.log("Le Spike est planté");
    }
  } else {
    MortPlayer(teamD, teamA[RandInt(0, teamA.length - 1)], morts);
    if (Math.random() < 0.4) {
      SpikeIsPlanted = true;
      console.log("Le Spike est planté");
    }
  }

  if (SpikeIsPlanted) {
    chance = 0.7;
  } else if (Math.random() < 0.5) {
    console.log("Shadows traveling !");
    chance = 0.6;
  }

  if (!SpikeIsPlanted && Math.random() < 0.5) {
    if (Math.random() < 0.8) {
      console.log("Flash !");
      chance = 0.6;
    } else {
      console.log("OMG REPORT PHOENIX TROLLING");
      chance = 0.3;
    }
  }

  while (teamA.length > 0 && teamD.length > 0) {
    if (Math.random() > chance) {
      MortPlayer(teamA, teamD[RandInt(0, teamD.length - 1)], morts);
    } else {
      MortPlayer(teamD, teamA[RandInt(0, teamA.length - 1)], morts);
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

let attaquants = [];
let defenseurs = [];

for (let i = 0; i < allNames.length; i++) {
  let attaquant = new Player(allNames[i], "attaquant", 0, 0);
  let defenseur = new Player(allNames[i], "defenseur", 0, 0);
  attaquants.push(attaquant);
  defenseurs.push(defenseur);
}
let morts = [];





while (ScoreA < 13 && ScoreB < 13) {
  
  morts = [];
  console.log(attaquants, defenseurs)
  if (PlayRound(attaquants, defenseurs, morts) == "attaquant") {
    ScoreA += 1;
  } else {
    ScoreB += 1;
  }
  console.log("Score A-D: " + ScoreA + " " + ScoreB);
  
  


  if (ScoreA + ScoreB == 12) {

    console.log(ScoreA, ScoreB);
    let a = ScoreA;
    ScoreA = ScoreB;
    ScoreB = a;
    console.log("mi-temps");
    console.log(ScoreA, ScoreB);
    

    for (let i = 0; i < morts.length; i++) {
      if (morts[i].side == "attaquant") {
        morts[i].side = "defenseur"
      }
      else if (morts[i].side == "defenseur") {
        morts[i].side = "attaquant"
      }
      
    }
    let nvA = []
    let nvD= []
    for (let i = 0; i < attaquants.length; i++) {

      attaquants[i].side = "defenseur"
      nvD.push(attaquants[i])
    }
    for (let i = 0; i < defenseurs.length; i++) {

      defenseurs[i].side = "attaquant"
      nvA.push(defenseurs[i])
    }
    defenseurs = nvD
    attaquants = nvA
  }


  if (ScoreA + ScoreB >= 1) {
    for (let i = 0; i < morts.length; i++) {
      morts[i].deaths += 1
      if (morts[i].side == "attaquant") {
        attaquants.push(morts[i]);
      } else if (morts[i].side == "defenseur") {
        defenseurs.push(morts[i]);
      }
    }
  }

  if (ScoreA >= 13 || ScoreB >= 13) {
    if (ScoreA >= 13) {
      console.log("Les attaquants ont gagnés !");
    } else if (ScoreB >= 13) {
      console.log("Les défenseurs ont gagnés !");
    }
    
    console.log("Scoreboard :")
    console.log("Nom           Kills              deaths")
    console.log("attaquant :")
    for (let i = 0; i < attaquants.length; i++) {
      console.log(attaquants[i].name + "  :        " + attaquants[i].kills + "             " + attaquants[i].deaths)
    }
    console.log("defenseur :")
    for (let i = 0; i < defenseurs.length; i++) {
      console.log(defenseurs[i].name + "  :        " + defenseurs[i].kills + "             " + defenseurs[i].deaths)
    }

    
  }
}
