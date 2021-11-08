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

let acc=0;
for(let game of games){
    acc+=game.cost;
}
//console.log(`Total of game cost: ${acc}`);

let totalCost = games.reduce((acc,game)=>acc+game.cost,0);
//console.log(`Total of game cost: ${totalCost}`);

//Categorization

let catObj={};
for(let game of games){
    if(catObj[game.type]){
        catObj[game.type].push(game);    //{'Survival': [ {game: 'Silent Hill 2', type: 'Survival', cost: 0.00, isMultiplayer:false}]}
     }else{
         catObj[game.type]=[game];
     }
}
///console.log(catObj['MMO']);

let reducedCatObj = games.reduce((acc, game)=>{
    if(acc[game.type]){
        acc[game.type].push(game);
    } else{
        acc[game.type]=[game];
    }
    return acc;
},{})
console.log(reducedCatObj);