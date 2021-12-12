const { Usuario } = require("./models");

const { encryptSHA256 } = require("./util");

Usuario.create({
  name: "Mateus Fontana",
  email: "mates@teste.com",
  password: encryptSHA256("123456"),
});
