import GameSavingLoader from "./GameSavingLoader.mjs";

GameSavingLoader.load()
    .then(saving => console.log(saving)
    ,(error => console.log(error.message)));