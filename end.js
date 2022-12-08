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
let shooters = games.filter(game => game.genre.includes("fps"));

// make their names uppercase
shooters = shooters.map((game) => ({name : game.name.toUpperCase(), playTime : game.playTime }));

console.log(shooters);

let totalHours = shooters.reduce((totalHours, game) => totalHours += game.playTime, 0);

console.log("I have been shooting things for", totalHours, "hours. And counting...");