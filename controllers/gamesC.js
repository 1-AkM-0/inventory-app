const db = require("../db/queries");

async function postGames(req, res) {
  const { name, rating, category, price, stock, publisher, release_date } =
    req.body;
  await db.addGame(
    name,
    rating,
    category,
    price,
    stock,
    publisher,
    release_date
  );
  res.redirect("/");
}

async function getGames(req, res) {
  const categories = await db.getCategories();
  res.render("games", { title: "Add category", categories });
}
module.exports = { postGames, getGames };
