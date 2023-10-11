class Personnage {
    constructor(name, health){
        this.name = name
        this.health = health
    }
    Trajet(){

        let nb_changements = 0

        for (let i = 0; i < 30; i++) {

            let index = (Math.random() * 5)
            for (let i = 0; i < 5; i++) {
                if (index<=i+1) {
                    index= i
                    break
                }  
            }
           
            let musique = musiques[index]
            console.log(musique)

            if (musique == "Anissa") {
                this.health -=1
                nb_changements +=1
            }
            if (this.health <=0) {
                return "explosion" 
            }  
        }
        return (this.name + " est bien arrivé en changeant de taxi " + nb_changements + " fois")
    }

}

let Pierric = new Personnage("Pierric", 10)

let musiques = ["Anissa", "Paradise", "Fight Back", "Destiny", "Dead Inside"]

console.log(Pierric.Trajet())