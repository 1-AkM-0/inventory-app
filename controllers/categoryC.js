const pool = require("../db/queries");
const { body, validationResult } = require("express-validator");

async function postCategory(req, res) {
  console.log(req.body);
  const { name } = req.body;
  await pool.addCategory(name);
  res.redirect("/");
}

const getCategory = (req, res) => {
  res.render("category", { title: "Add category" });
};

module.exports = {
  postCategory,
  getCategory,
};
