class Tennis{
    constructor(){
        this.jugador1 = 0;
        this.jugador2 = 0;
    }
    obtenerScore(){
        //si jugador 1 anota 
        if(this.jugador1===1){
            return "15 - Love";
        }
        return "Love - Love";
    }
}
export default Tennis;