class Tennis{
    constructor(){
        this.jugador1 = 0;
        this.jugador2 = 0;
    }
    obtenerScore(){
        //si jugador 1 anota 

        if(this.jugador1===2 && this.jugador2===1){
            return "30 - 15";
        }
        if(this.jugador1===1 && this.jugador2===2){
            return "15 - 30";
        }
        if(this.jugador1===2 && this.jugador2===2){
            return "30 - 30";
        }
        if(this.jugador1===3 && this.jugador2===2){
            return "40 - 30";
        }
        if(this.jugador1===2 && this.jugador2===3){
            return "30 - 40";
        }
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
        if(this.jugador1===3){
            return "40 - Love";
        }
        if(this.jugador2===3){
            return "Love - 40";
        }
        if(this.jugador1===4){
            return "Game for player 1";
        }
        if(this.jugador2===4){
            return "Game for player 2";
        }
        
        return "Love - Love";
    }
}
export default Tennis;