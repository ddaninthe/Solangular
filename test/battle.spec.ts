import { Pokemon } from "../src/pokemon"
import { Battle } from "../src/battle"
import { Type } from "../src/type";
import { Attack, Nature } from "../src/attack";

describe('Battle tests', () => {
    const attack = new Attack("Charge", Type.Normal, 40, 100, Nature.Physical);
    const attack2 = new Attack("Forte-Paume", Type.Fighting, 60, 100, Nature.Physical);
    
    const capumain: Pokemon = new Pokemon("Capumain", Type.Normal, 20, 130, 120, 123, 80, 80, 187, [attack]);
    const ferosinge: Pokemon = new Pokemon("Ferosinge", Type.Fighting, 23, 140, 150, 100, 56, 54, 120, [attack2]);

    it('determine if a pokemon begins', () => {
        expect(Battle.isFirstStarting(capumain, ferosinge))
            .toBeTruthy()
    })

    it('calculate the physical damage dealt', () => {
        expect(Battle.calculateDamage(capumain, ferosinge, attack))
            .toBe(11)
    })

    it('run a fight', async () => {
        await Battle.rounds(capumain, ferosinge);
        expect(capumain.isKO()).toBeTruthy();
        expect(ferosinge.isKO()).toBeFalsy();
        console.log(capumain.toString());
        console.log(ferosinge.toString())
    })
});