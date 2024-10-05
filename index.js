class hero {
constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
}

attack() {
    let typeAttack;
    switch (this.type) {
    case "wizard":
        typeAttack = "magic";
        break;
        
    case "warrior":
        typeAttack = "blade";
        break;
        
    case "monk":
        typeAttack = "martial arts";
        break;
        
    case "ninja":
        typeAttack = "shuriken";
        break;
        
    default:
        console.log("Hero type is not found");
        return;
    }

    console.log(`The ${this.type} attacked using ${typeAttack}`);
    }
}

let hero1 = new hero("Superman", 30, "warrior");
hero1.attack(); 