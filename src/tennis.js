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
        if(this.jugador2===1){
            return "Love - 15";
        }
        if(this.jugador1===2){
            return "30 - Love";
        }
        if(this.jugador2===2){
            return "Love - 30";
        }
        return "Love - Love";
    }
}
export default Tennis;