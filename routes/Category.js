const { Router } = require("express");

const categoryRouter = Router();
const categoryController = require("../controllers/categoryC");
categoryRouter.post("/add", categoryController.postCategory);
categoryRouter.get("/add", categoryController.getCategory);

module.exports = categoryRouter;
