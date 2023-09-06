const express = require("express");
const router = express.Router();
const controller = require("../controllers/feed.controller");

const prefixPath = "api/v1/home/feed";

router.get(`/${prefixPath}/wall`, controller.getFeeds);
router.post(`/${prefixPath}/add`, controller.addFeed);
router.put(`/${prefixPath}/edit/:username`, controller.feedEdit);
router.delete(`/${prefixPath}/delete/:username`, controller.feedDelete);

module.exports = router;
