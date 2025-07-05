const db = require("../db/queries");

class Game {
  constructor(name, rating, price, number_stock, publisher, release_date) {
    (this.name = name), (this.rating = rating), (this.categories = []);
    (this.price = price),
      (this.number_stock = number_stock),
      (this.publisher = publisher);
    this.release_date = release_date;
  }

  addCategory = (category) => {
    this.categories.push(category);
  };

  getCategories = () => {
    return this.categories;
  };
}
let games = [];
let show = [];
let new_game;
async function getIndex(req, res) {
  const gamesAndCategories = await db.getGameCategory();
  gamesAndCategories.forEach((game) => {
    if (!show.includes(game.game_id)) {
      new_game = new Game(
        game.game_name,
        game.rating,
        game.price,
        game.number_stock,
        game.publisher,
        game.release_date
      );
      new_game.addCategory(game.category_name);
      games.push(new_game);
      show.push(game.game_id);
    }
    if (!new_game.getCategories().includes(game.category_name))
      new_game.addCategory(game.category_name);
  });
  res.render("index", { games: games });
}

module.exports = {
  getIndex,
};
