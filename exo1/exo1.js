class Pokemon{
    constructor(name, attack, defense, hp, luck){
        this.name = name
        this.attack = attack
        this.defense = defense 
        this.hp = hp
        this.luck = luck
    }
    isLucky () {

    }
    attackPokemon (Pokemon) {
        Pokemon.hp -= (this.attack - Pokemon.defense)
    }
}
let Finex = new Pokemon("Quentin", 45, 10, 120, 70)
let Fisto = new Pokemon("Thomas", 30, 15, 120, 85)

while (Finex.hp > 0 && Fisto.hp > 0){
    console.log("Finex :" + String(Finex.hp) + "PV    Fisto :" + String(Fisto.hp) + "PV")
    Finex.attackPokemon(Fisto)
    console.log("Finex :" + String(Finex.hp) + "PV    Fisto :" + String(Fisto.hp) + "PV")
    Fisto.attackPokemon(Finex)
}