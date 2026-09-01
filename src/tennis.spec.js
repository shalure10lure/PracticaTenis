import  Tennis  from "./tennis.js";
describe("Tennis",()=>{
    
    it("deberia mostrar love-love cuando ningun jugador anoto",()=>{
        let tennis = new Tennis();
        expect(tennis.obtenerScore()).toBe("Love - Love");
    });
    it("deberia mostrar 15-love cuando jugador 1 anoto 1 punto",()=>{
        let tennis = new Tennis();
        tennis.jugador1 = 1;
        expect(tennis.obtenerScore()).toBe("15 - Love");
    });
    it("deberia mostrar love-15 cuando jugador 2 anoto 1 punto",()=>{
        let tennis = new Tennis();
        tennis.jugador2 = 1;
        expect(tennis.obtenerScore()).toBe("Love - 15");
    });
});
