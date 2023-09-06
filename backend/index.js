//variabel untuk manggil express js
const express = require("express");
const app = express();
// var manggil cors
const cors = require("cors");

// variabel untuk manggil morgan dan bodyparser/untuk menentukan data apa yg dikirim
const morgan = require("morgan");
const bodyParser = require("body-parser");

// port di masukin ke variabel supaya dinamis
const PORT = 9000;

// ini cors supaya bisa browser ngizinin back end nge akses front end
const allowedOrigins = "*";
app.use(cors({ origin: allowedOrigins }));

// middleware untuk log request
app.use(morgan("dev"));
//data yg dikirim dalam bentuk JSON
app.use(bodyParser.json());

// Fitur Link Tree;
const carts = require("./views/feed.view");
app.use(carts);

// untuk monitor apakah server sudah berjalan atau belum
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
