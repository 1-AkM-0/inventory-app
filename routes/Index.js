const { Router } = require("express");

const indexRouter = Router();
const indexController = require("../controllers/indexC");

indexRouter.get("/", indexController.getIndex);

module.exports = indexRouter;
