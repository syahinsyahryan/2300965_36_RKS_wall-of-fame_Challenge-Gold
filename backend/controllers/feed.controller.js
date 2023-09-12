// const { responseOk, responseError } = require("../helpers/restResponse.helper");

const FeedModel = require("../models/feed.model");

class FeedController {
  static async addFeed(req, res) {
    try {
      const feed = await FeedModel.addFeed(req.body);
      res.status(201).json(feed);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  static async feedDelete(req, res) {
    const username = req.params.username;
    try {
      await FeedModel.feedDelete(username);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  static async feedEdit(req, res) {
    const username = req.params.username;
    try {
      const updatedFeed = await FeedModel.feedEdit(username, req.body);
      res.status(200).json(updatedFeed);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  static async getFeeds(req, res) {
    try {
      const feeds = await FeedModel.getFeeds();
      res.status(200).json(feeds);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

// const models = new FeedModel();

// // // Function READ/lihat semua produk di keranjang
// const getFeeds = async (_, res) => {
//   const feeds = models.findAll();
//   const data = { feeds, total: feeds.length };
//   return res
//     .status(200)
//     .json(responseOk("succes get all products in feed on the wall", data));
// };

// // // function CREATE/ADD username to feed
// const addFeed = async (req, res) => {
//   const body = req.body;
//   if (!body.username)
//     return res.status(401).json(responseError("Product name required"));
//   if (!body.scribe)
//     return res.status(401).json(responseError("Product Price required"));
//   const data = models.insert(body.username, body.scribe);
//   return res
//     .status(201)
//     .json(responseOk("Succed add new scribe on the wall", data));
// };

// // // Function UPDATE/Edit custom username
// const feedEdit = async (req, res) => {
//   const username = req.params["username"];
//   const body = req.body;
//   const data = models.edit(username, body.username, body.scribe);
//   return res.status(200).json(responseOk(`succes edit for ${username}`, data));
// };

// // // Function DELETE username
// const feedDelete = async (req, res) => {
//   const username = req.params["username"];
//   const data = models.delete(username);
//   if (!username)
//     return res.status(401).json(responseError("username not found in feed"));
//   return res
//     .status(200)
//     .json(responseOk(`Success deleting ${username} on wall`, data));
// };

module.exports = FeedController;
