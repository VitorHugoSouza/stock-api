const { authMiddleware } = require("../util");
const produtos = require("../controllers/produtos");

module.exports = function (app) {
  app.get("/produtos", authMiddleware, produtos.listAll);
  app.get("/produtos/:id", authMiddleware, produtos.findOne);
  app.post("/produtos", authMiddleware, produtos.create);
  app.put("/produtos/:id", authMiddleware, produtos.update);
  app.delete("/produtos/:id", authMiddleware, produtos.destroy);
};
