const { Produto } = require("../models");

exports.listAll = async (req, res) => {
  const produtos = await Produto.findAll({
    order: [["name", "ASC"]],
    where: {
      usuarioId: req.user.id
    }
  });
  res.json(produtos);
};

exports.findOne = async (req, res) => {
  const { id } = req.params;

  const produto = await Produto.findOne({
    where: {
      id,
      usuarioId: req.user.id
    },
  });

  if (!!produto) {
    res.json(produto);
  } else {
    res.status(404).json({ error: "Produto não encontrado" });
  }
};

exports.create = async (req, res) => {
  const novoProduto = await Produto.create({...req.body, usuarioId: req.user.id});
  res.json(novoProduto);
};

exports.update = async (req, res) => {
  const { id } = req.params;

  const updProduto = await Produto.update(req.body, {
    where: {
      id,
      usuarioId: req.user.id
    },
  });

  res.json({ success: !!updProduto });
};

exports.destroy = async (req, res) => {
  const { id } = req.params;

  const updProduto = await Produto.destroy({
    where: {
      id,
      usuarioId: req.user.id
    },
  });

  res.json({ success: !!updProduto });
};
