export default function bot({ history, memory }) {
    //It was supposed to be a delayed titfortat but its a defection bot by accident

    memory = memory ?? { opponentDefected: false, counter: 0 }

    let move = "C"
    const lastOpponentMove = history.at(-1)?.opponent
    if (lastOpponentMove === "D")
        memory.opponentDefected = true
    if (lastOpponentMove === "C")
        memory.opponentDefected = false

    if (memory.opponentDefected === true && memory.counter < 1) 
        move = "C"
       memory.counter = 1
    
    if (memory.opponentDefected === true && memory.counter >= 1)
        move = "D"
    
    if (memory.opponentDefected === false && memory.counter < 1)
        move =  "C"
    
    if (memory.opponentDefected === false && memory.counter >= 1)
        move = "D"
        memory.counter = 0



    return [move, memory]; 

}