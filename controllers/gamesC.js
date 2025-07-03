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

const getGames = (req, res) => {
  res.render("games", { title: "Add game" });
};

module.exports = { postGames, getGames };
