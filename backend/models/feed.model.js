const knex = require("../config/knex");
const db = require("../config/knex");

class FeedModel {
  tableName = "feeds";

  constructor() {}

  // CREATE untuk nambah produk baru ke keranjang
  async insert(username, scribe) {
    const newScribe = { username, scribe };
    this.feeds.push(newScribe);
    await db(this.tableName).insert(newScribe);
    return newScribe;
  }
  // end

  // READ semua produk di keranjang
  async findAll() {
    return await db(this.tableName).select("*");
  }
  // end

  // DELETE username di keranjang
  async delete(username) {
    const findScribe = await db(this.tableName)
      .where("username", username)
      .first();
    if (!findScribe?.id) throw new Error("data tidak ada");

    await db(this.tableName).where("username", username).del();
    return findScribe;
  }
  // end

  // UPDATE edit produk yang sudah ada (custom username)
  async edit(username, scribe) {
    const existingFeed = await db(this.tableName)
      .where("username", username)
      .first();
    if (!existingFeed?.id) throw new Error("data tidak ada");

    const editedFeed = {
      username: existingFeed.username,
      scribe: scribe || existingFeed.scribe,
    };
    await db(this.tableName).update(editedFeed).where("username", username);
    return editedFeed;
  }
  // end
}

module.exports = FeedModel;
