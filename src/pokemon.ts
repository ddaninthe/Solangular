import { Type } from "./type";
import { Attack } from "./attack";

export class Pokemon {
    constructor(public name: string,
            public type: Type,
            public level: number,
            public life: number,
            public attack: number,
            public defense: number,
            public spAttack: number,
            public spDefense: number,
            public speed: number,
            public attacks: Array<Attack>) {
        this.name = name;
        this.life = life;
        this.attack = attack;
        this.defense = defense;
        this.spAttack = spAttack;
        this.spDefense = spDefense;
        this.speed = speed;
        this.attacks = attacks
    }

    public isKO(): boolean {
        return this.life <= 0;
    }

    public getRandomAttack(): Attack {
        const index: number = Math.floor(Math.random() * this.attacks.length);
        return this.attacks[index];
    }

    public toString(): string  {
        return `${this.name} \tLvl ${this.level}\n`
            + `\tPV\t${this.life} \tVIT\t${this.speed}\n`
            + `\tATQ\t${this.attack} \tDEF\t${this.defense}\n`
            + `\tATQ SP\t${this.spAttack} \tDEF SP\t${this.spDefense}\n`
    }
}