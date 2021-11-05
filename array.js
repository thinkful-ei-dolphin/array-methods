let input = process.argv;
let searchTerm = input[2];
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

function searchGames(search){
    let foundGame = games.find(game=> game.game ===search);
    console.log(`We have ${foundGame.game}, it costs ${foundGame.cost}.  
    It is a ${foundGame.type} and ${foundGame.isMultiplayer?'it is multiplayer':'it is not multiplayer'}`);
}

searchGames(searchTerm);
 
let firstMMO = games.find(game=>game.type==='MMO');
//console.log(firstMMO);

let simGames = games.filter(game=>game.type==='Simulation');
//console.log(simGames);

let expensiveGames = games.filter(game=> game.cost>20 && game.isMultiplayer);
//console.log(expensiveGames);

let gameSale = games.map(game=>{
    if(game.cost === 59.99){
        game.cost= 19.99;
    }
    return game;
});
//console.log(gameSale);

let areAnyGamesMultiplayer = games.some(game=>game.isMultiplayer===true);
//console.log(`Are any of these games multiplayer? ${areAnyGamesMultiplayer}`);

let areAllGamesSinglePlayer = games.every(game=>game.isMultiplayer===false);
//console.log(`Are all of these games singleplayer? ${areAllGamesSinglePlayer}`);