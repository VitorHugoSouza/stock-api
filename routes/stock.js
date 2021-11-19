const produtos = require("../controllers/produtos");

module.exports = function (app) {
  app.get("/produtos", produtos.listAll);
  app.get("/produtos/:id", produtos.findOne);
  app.post("/produtos", produtos.create);
  app.put("/produtos/:id", produtos.update);
  app.delete("/produtos/:id", produtos.destroy);
};
