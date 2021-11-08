let games = [
    {game:'Resident Evil Village', type:'Survival', cost:59.99, isMultiplayer:false},
    {game: 'Stardew Valley', type: 'Simulation', cost: 14.99, isMultiplayer:true },
    {game: 'Mortal Online', type: 'MMO', cost: 49.99, isMultiplayer:true},
    {game: 'League of Legends', type:'MMO', cost:0.00, isMultiplayer:true},
    {game: "Dark Souls", type:"RPG", cost:39.99, isMultiplayer:true},
    {game: 'The Binding of Isaac', type: 'Roguelike', cost:19.99, isMultiplayer:false},
    {game: `Devil May Cry5`, type: `Action Adventure`, cost: 59.99, isMultiplayer: true},
    {game: 'Silent Hill 2', type: 'Survival', cost: 0.00, isMultiplayer:false},
    {game: 'Animal Crossing', type:'Simulation', cost: 59.99, isMultiplayer:true },
    {game: "Magic the Gathering", type: "Card Game", cost:19.99, isMultiplayer: true},
    {game: "Fallout 3", type: "RPG", cost: 5.99, isMultiplayer: false},
    {game: "Monopoly", type: "Board Game", cost: 39.99, isMultiplayer: true},
    {game: 'Battle Field 4', type: 'Shooting game', cost: 20.00, isMultiplayer: true},
    {game: 'The Long Dark', type: 'Survival', cost: 20.00, isMultiplayer:false},
]


let sorted=[];

for (let i = 0; i < games.length; i++) {
    let added = false;
    for (let j = 0; j < sorted.length && !added; j++) {
        if(games[i].cost < sorted[j].cost){
            sorted.splice(j, 0, games[i]);
            added=true;
        }        
    }
    if(!added){
        sorted.push(games[i]);
    }    
}
//console.log(sorted);

games.sort((gameA, gameB)=>{
    if(gameA.cost < gameB.cost ){
        return -1;
    } else{
        return 1;
    }
})

games.sort((gameA,gameB)=>gameA.cost-gameB.cost);

//console.log(games);

games.sort((gameA,gameB)=>gameA.game.toLowerCase() > gameB.game.toLowerCase()? 1:-1);
console.log(games)