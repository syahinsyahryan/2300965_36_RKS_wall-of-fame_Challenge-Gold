const { responseOk, responseError } = require("../helpers/restResponse.helper");

const FeedModel = require("../models/feed.model");

const models = new FeedModel();

// Function READ/lihat semua produk di keranjang
function getFeeds(_, res) {
  const feeds = models.findAll();
  const data = { feeds, total: feeds.length };
  return res
    .status(200)
    .json(responseOk("succes get all products in feed on the wall", data));
}

// function CREATE/ADD username to feed
function addFeed(req, res) {
  const body = req.body;
  if (!body.username)
    return res.status(401).json(responseError("Product name required"));
  if (!body.scribe)
    return res.status(401).json(responseError("Product Price required"));
  const data = models.insert(body.username, body.scribe);
  return res
    .status(201)
    .json(responseOk("Succed add new scribe on the wall", data));
}

// Function UPDATE/Edit custom username
function feedEdit(req, res) {
  const username = req.params["username"];
  const body = req.body;
  const data = models.edit(username, body.username, body.scribe);
  return res.status(200).json(responseOk(`succes edit for ${username}`, data));
}

// Function DELETE username
function feedDelete(req, res) {
  const username = req.params["username"];
  const data = models.delete(username);
  if (!username)
    return res.status(401).json(responseError("username not found in feed"));
  return res
    .status(200)
    .json(responseOk(`Success deleting ${username} on wall`, data));
}

module.exports = {
  getFeeds,
  addFeed,
  feedEdit,
  feedDelete,
};
