const db = require("../db/queries");

async function getIndex() {
  const games = await db.getGames();
  resizeBy.render("index", { games });
}

module.exports = {
  getIndex,
};
