class Pokemon{
    constructor(name, attack, defense, hp, luck){
        this.name = name
        this.attack = attack
        this.defense = defense 
        this.hp = hp
        this.luck = luck
    }
    isLucky () {
        let nb = Math.random() * 100
        if(this.luck > nb){
            return true
        }
        else{
            return false
        }
    }
    attackPokemon (Pokemon) {
        if (this.isLucky()) {
            Pokemon.hp -= (this.attack - Pokemon.defense)
            return (this.name + " inflige " + (this.attack - Pokemon.defense) + " points de degâts a " + Pokemon.name)
        }
        else{
            return (this.name + " n'a pas de chance !")
        }
    }
}
let Finex = new Pokemon("Finex", 45, 10, 120, 70)
let Fisto = new Pokemon("Fisto", 30, 15, 120, 85)




console.log("Finex :" + String(Finex.hp) + "PV    Fisto :" + String(Fisto.hp) + "PV")


while (Finex.hp > 0 && Fisto.hp > 0){

    console.log(Finex.attackPokemon(Fisto))
    console.log("Finex :" + String(Finex.hp) + "PV    Fisto :" + String(Fisto.hp) + "PV")

    if (Fisto.hp <=0) {
        console.log("Fisto a perdu !")
        break
    }

    else{

        console.log(Fisto.attackPokemon(Finex))
        console.log("Finex :" + String(Finex.hp) + "PV    Fisto :" + String(Fisto.hp) + "PV")

        if (Finex.hp <=0) {
            console.log("Finex a perdu !")
            break
        }

        else{
            continue
        }
    }
    
}


