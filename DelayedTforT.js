export default function bot({ history, memory }) {
    //Its a tit for tat bot for now but I want it to delay its response

    memory = memory ?? { opponentDefected: false }

    const counter = 0
    const move = "C"
    const lastOpponentMove = history.at(-1)?.opponent
    if (lastOpponentMove === "D")
        memory.opponentDefected = true
    if (lastOpponentMove === "C")
        memory.opponentDefected = false

    if (memory.opponentDefected === true && counter < 1) 
        move = "C"
        counter = 1
    
    if (memory.opponentDefected === true && counter >= 1)
        move = "D"
    
    if (memory.opponentDefected === false && counter < 1)
        move =  "C"
    
    if (memory.opponentDefected === false && counter >= 1)
        move = "D"
        counter = 0



    return [move, memory]; //Lets go I did it (I think)

}