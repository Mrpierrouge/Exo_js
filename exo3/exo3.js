let Names = [
  "Brandon",
  "Jade",
  "James",
  "Leah",
  "Sabrina",
  "Lola",
  "Mickael",
  "Tony",
];

let Carac = ["intello", "sportif", "geek", "obese", "idiot"];

class Tueur {
  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
  }
}

class Survivant {
  constructor(name, carac) {
    this.name = name;
    this.carac = carac;
  }
}
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

let Jason = new Tueur("Jason", 100);

let survivants = [];

for (let i = 0; i < 5; i++) {
  let indexNames = RandInt(0, 8 - i);

  let indexCarac = RandInt(0, 5 - i);

  survivants.push(new Survivant(Names[indexNames], Carac[indexCarac]));
  Names.splice(indexNames, 1);
  Carac.splice(indexCarac, 1);
}

survivants.forEach((element) => {
  console.log(element.name, element.carac);
});

let morts = [];

while (Jason.hp > 0 && survivants.length > 0) {
  

  let indexCible = RandInt(0, survivants.length);

  let chance = RandInt(0, 3);
  if (chance == 0) {
    console.log(survivants[indexCible].name + " est mort !");
    morts.push(survivants[indexCible].name);
    survivants.splice(indexCible, 1);
  } else if (chance == 1) {
    console.log(
      survivants[indexCible].name + " a ésquivé et infligé 10 dégâts !"
    );
    Jason.hp -= 10;
  } else if (chance == 2) {
    console.log(
      survivants[indexCible].name + " est mort et a infligé 15 dégâts !"
    );
    Jason.hp -= 15;
    morts.push(survivants[indexCible].name);
    survivants.splice(indexCible, 1);
  }

  if (Jason.hp <= 0) {
    console.log(morts);
    let message = morts[0]
    for (let i = 1; i < morts.length; i++) {
        message += ", " + morts[i] 
    }
    
    console.log("les survivants l'emporte, mais RIP a " + message + ".")
    break;
  }
  if (survivants.length <= 0) {
    console.log(
      "tout les survivants sont morts, il restait " + Jason.hp + " PV au tueur"
    );
  }
}
