const db = require("../db/queries");

async function postGames(req, res) {
  let { game_name, rating, categories, price, stock, publisher, release } = req.body;
  rating = parseInt(rating);
  price = parseInt(price);
  console.log(req.body);
  const { rows } = await db.newGame(
    game_name,
    rating,
    price,
    stock,
    publisher,
    release
  );
  for (const category of categories) {
    await db.insertGameAndCategory(rows[0].game_id, category);
  }
  res.redirect("/");
}

async function getGames(req, res) {
  const categories = await db.getCategories();
  res.render("games", { title: "Add game", categories });
}
module.exports = { postGames, getGames };
