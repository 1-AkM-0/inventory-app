const pool = require("./pool");

async function addCategory(name) {
  await pool.query("INSERT INTO category(name) VALUES ($1)", [name]);
}

async function addGame(
  name,
  rating,
  category,
  price,
  stock,
  publisher,
  release_date
) {
  await pool.query(
    "INSERT INTO games(name, rating, category_id, price, number_stock, publisher, release_date) VALUES ($1, $2, $3, $4, $5, $6, $7)",
    [name, rating, category, price, stock, publisher, release_date]
  );
}

async function getGames() {
  const { rows } = await pool.query("SELECT * FROM games");
  return rows;
}

async function getCategories() {
  const { rows } = await pool.query("SELECT * FROM category");
  return rows;
}

module.exports = {
  addCategory,
  addGame,
  getGames,
  getCategories,
};
