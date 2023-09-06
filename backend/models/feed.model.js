class FeedModel {
  feeds = [];

  constructor() {
    this.feeds = [
      { username: "doni cayank dhya", scribe: "doni was here" },
      { username: "erik cinta qamue", scribe: "erik love qmue" },
    ];
  }
  // CREATE untuk nambah produk baru ke keranjang
  insert(username, scribe) {
    const newScribe = { username, scribe };
    this.feeds.push(newScribe);
    return newScribe;
  }
  // end

  // READ semua produk di keranjang
  findAll() {
    return this.feeds;
  }
  // end

  // DELETE username di keranjang
  delete(username) {
    const deleteScribe = this.feeds.find(
      (value) => value.username === username
    );
    if (!deleteScribe) return;

    this.feeds = this.feeds.filter((value) => value.username !== username);
    return deleteScribe;
  }
  // end

  // UPDATE edit produk yang sudah ada (custom username)
  edit(username, newUsername, newScribe) {
    const finnedProductIndex = this.feeds.findIndex(
      (value) => value.username === username
    );
    if (finnedProductIndex < 0) return;
    const editedProduct = {
      username: newUsername || this.feeds[finnedProductIndex].username,
      scribe: newScribe || this.feeds[finnedProductIndex].scribe,
    };
    this.feeds[finnedProductIndex] = editedProduct;
    return editedProduct;
  }
  // end
}

module.exports = FeedModel;
