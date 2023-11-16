const controller = {};

controller.show = (req, res) => {
  let { products, categories } = require("../data");

  let procductList = req.query.category
    ? products.filter((item) => item.category == req.query.category)
    : products;
  res.render("task3", {
    products: procductList,
    categories,
  });
  //res.render("task1", {emotions});
};

module.exports = controller;
