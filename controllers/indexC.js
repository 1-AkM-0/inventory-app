const db = require("../db/queries");

async function getIndex(req, res) {
  const games = await db.getGames();
  const categories = await db.getCategories();
  res.render("index", { games, categories });
}

module.exports = {
  getIndex,
};
