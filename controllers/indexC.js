const db = require("../db/queries");

async function getIndex(req, res) {
  const games = await db.getGames();
  const categories = await db.getCategories();
  const gamesAndCategories = await db.gamesAndCategory();
  res.render("index", { games, categories });
}

module.exports = {
  getIndex,
};
