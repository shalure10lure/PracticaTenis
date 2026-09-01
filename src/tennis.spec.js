describe("Tennis",()=>{
    it("deberia mostrar love-love cuando ningun jugador anoto",()=>{
        let tennis = new Tennis();
        expect(tennis.obtenerScore()).toBe("Love - Love");
    });
});
class Tennis{
    obtenerScore(){
        return "Love - Love";
    }
}