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
    it("deberia mostrar 30-love cuando jugador 1 anoto 2 puntos",()=>{
        let tennis = new Tennis();
        tennis.jugador1 = 2;
        expect(tennis.obtenerScore()).toBe("30 - Love");
    });
    it("deberia mostrar love-30 cuando jugador 2 anoto 2 puntos",()=>{
        let tennis = new Tennis();
        tennis.jugador2 = 2;
        expect(tennis.obtenerScore()).toBe("Love - 30");
    });
    it("deberia mostrar love-40 cuando jugador 2 anoto 3 puntos",()=>{
        let tennis = new Tennis();
        tennis.jugador2 = 3;
        expect(tennis.obtenerScore()).toBe("Love - 40");
    });
    it("deberia mostrar 40-love cuando jugador 1 anoto 3 puntos",()=>{
        let tennis = new Tennis();
        tennis.jugador1 = 3;
        expect(tennis.obtenerScore()).toBe("40 - Love");
    });
    it("deberia mostrar Game for player 1 cuando jugador 1 anoto 4 puntos",()=>{
        let tennis = new Tennis();
        tennis.jugador1 = 4;
        expect(tennis.obtenerScore()).toBe("Game for player 1");
    });
    it("deberia mostrar Game for player 2 cuando jugador 2 anoto 4 puntos",()=>{
        let tennis = new Tennis();
        tennis.jugador2 = 4;
        expect(tennis.obtenerScore()).toBe("Game for player 2");
    });
    it("deberia mostrar 15-30 cuando jugador 1 anoto 1 punto y jugador 2 anoto 2 puntos",()=>{
        let tennis = new Tennis();
        tennis.jugador1 = 1;
        tennis.jugador2 = 2;
        expect(tennis.obtenerScore()).toBe("15 - 30");
    });
    it("deberia mostrar 30-15 cuando jugador 1 anoto 2 puntos y jugador 2 anoto 1 punto",()=>{
        let tennis = new Tennis();
        tennis.jugador1 = 2;
        tennis.jugador2 = 1;
        expect(tennis.obtenerScore()).toBe("30 - 15");
    });
     it("deberia mostrar 30-30 cuando jugador 1 anoto 2 puntos y jugador 2 anoto 2 puntos",()=>{
        let tennis = new Tennis();
        tennis.jugador1 = 2;
        tennis.jugador2 = 2;
        expect(tennis.obtenerScore()).toBe("30 - 30");
    });
});
