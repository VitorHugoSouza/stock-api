const { Usuario } = require("../models");
const { encryptSHA256 } = require("../util");
const jwt = require("jsonwebtoken");
const { TOKEN_SECRET } = require("../env");

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const usuario = await Usuario.findOne({
    attributes: ["id", "name", "email"],
    where: {
      email,
      password: encryptSHA256(password),
    },
    raw: true,
  });

  if (!!usuario) {
    const token = jwt.sign(usuario, TOKEN_SECRET);

    res.json({
      usuario,
      token,
      success: true,
      error: false,
    });
  } else {
    res.status(401).json({ error: "Usuário e/ou Senha inválido(s)" });
  }
};