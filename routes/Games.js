const { Router } = require("express");

const gamesRouter = Router();

const gamesController = require("../controllers/gamesC");

gamesRouter.get("/add", gamesController.getGames);
gamesRouter.post("/add", gamesController.postGames);

module.exports = gamesRouter;
