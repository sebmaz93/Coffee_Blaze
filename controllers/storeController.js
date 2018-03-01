const mongoose = require("mongoose");
const Store = mongoose.model("Store");

exports.homePage = (req, res) => {
	res.render("index");
};

exports.addStore = (req, res) => {
	res.render("editStore", { title: "Add Store" });
};

exports.createStore = async (req, res) => {
	const store = await new Store(req.body).save();
	req.flash("success", `The ${store.name} asking for Review!`);
	res.redirect(`/store/${store.slug}`);
};

exports.getStores = async (req, res) => {
	// 1. Query the DB before render
	const stores = await Store.find();
	res.render("stores", { title: "Stores", stores });
};
