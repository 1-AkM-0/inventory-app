const pool = require("./pool");

async function newCategory(name) {
  await pool.query("INSERT INTO category(name) VALUES ($1)", [name]);
}

async function newGame(name, rating, price, stock, publisher, release_date) {
  const id = await pool.query(
    "INSERT INTO games(name, rating, price, number_stock, publisher, release_date) VALUES ($1, $2, $3, $4, $5, $6) RETURNING game_id",
    [name, rating, price, stock, publisher, release_date]
  );
  return id;
}

async function getGames() {
  const { rows } = await pool.query("SELECT * FROM games");
  return rows;
}

async function getCategories() {
  const { rows } = await pool.query("SELECT * FROM category");
  return rows;
}

async function insertGameAndCategory(game_id, category_id) {
  await pool.query(
    "INSERT INTO games_category(game_id, category_id) VALUES ($1, $2)",
    [game_id, category_id]
  );
}

async function getGameCategory(game_id) {
  const { rows } = await pool.query("SELECT * FROM games_category");
  return rows;
}

module.exports = {
  newCategory,
  newGame,
  getGames,
  getCategories,
  insertGameAndCategory,
  getGameCategory,
};
