function Home() {
  return <h1>Maezinha eu te amo mil milhoes!!!</h1>;
}

export default Home;

function testRoute() {
  const express = require("express");
  const router = express.Router();
  const connectDB = require("../database/db");

  router.get("/test", async (req, res) => {
    try {
      await connectDB();
      res
        .status(200)
        .json({ success: true, message: "Successfully connected!" });
    } catch (error) {
      console.error("Connection failed!", error.message);
      res.status(500).json({ success: false, error: error.message });
    }
  });

  module.exports = router;
}

testRoute();
