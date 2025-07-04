const pool = require("../db/queries");
const { body, validationResult } = require("express-validator");

async function postCategory(req, res) {
  console.log(req.body);
  const { name } = req.body;
  await pool.newCategory(name[0].toUpperCase() + name.slice(1));
  res.redirect("/");
}

const getCategory = (req, res) => {
  res.render("category", { title: "Add category" });
};

module.exports = {
  postCategory,
  getCategory,
};
