const produtos = require("../controllers/auth");

module.exports = function (app) {
  app.post("/login", produtos.login);
};
