const express = require('express');
const router = express.Router();
<<<<<<< HEAD
=======
<<<<<<< HEAD

//This will be completed at a later date.
=======
>>>>>>> bdfa40613b0dd3014693d057973f2a3df751cb22
const imageRegex = /\/.+\.(svg|png|jpg|png|jpeg)$/; // You can add other image formats
const videoRegex = /\/.+\.(mp4|ogv)$/
router.get(imageRegex, (req, res) => {
  const filePath = req.path;
  res.redirect(303, `http://localhost:3000/src${filePath}`);
});
router.get(videoRegex, (req, res) => {
  const filePath = req.path;
  res.redirect(303, `http://localhost:3000/src${filePath}`);
});
<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> tristanMbugua
>>>>>>> bdfa40613b0dd3014693d057973f2a3df751cb22
