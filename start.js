const games = [
    {
        name: "XCOM: Enemy Unknown",
        genre: ["strategy", "turn-based"],
        playTime: 154,
    },
    {
        name: "Borderlands",
        genre: ["fps", "rpg", "co-op", "action"],
        playTime: 67,
    },
    {
        name: "DOOM",
        genre: ["fps", "action"],
        playTime: 124,
    },
    {
        name: "Mortal Kombat 11",
        genre: ["fighting", "action"],
        playTime: 78,
    },
    {
        name: "Papers Please",
        genre: ["simulation", "puzzle"],
        playTime: 16,
    },
    {
        name: "Half-Life 2",
        genre: ["fps", "action"],
        playTime: 67,
    },
    {
        name: "Broforce",
        genre: ["action", "co-op", "platformer"],
        playTime: 7,
    },
    {
        name: "Darkest Dungeon",
        genre: ["turn-based", "roguelike"],
        playTime: 45,
    },
    {
        name: "Deus Ex: Human Revolution",
        genre: ["action", "fps", "stealth", "rpg"],
        playTime: 38,
    }
];

// filter to just FPS games
let shooters = [];
for (let i = 0; i < games.length; i++) {
    let game = games[i];
    if (game.genre.includes("fps")) {
        shooters.push(game);
    }
}

// make their names uppercase
for (let d = 0; d < shooters.length; d++) {
    let gameTitle = shooters[d].name.toUpperCase();
    shooters[d].name = gameTitle;
}
console.log(shooters);

// How much time in total did I play
let totalHours = 0;
for (let d = 0; d < shooters.length; d++) {
    totalHours += shooters[d].playTime;
}
console.log("I have been shooting things for", totalHours, "hours. And counting...");
