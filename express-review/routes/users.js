var express = require("express");
var router = express.Router();

const cars = [
  { id: 1, name: "Jazz", color: "Red", brand: "Honda", year: "2019" },
  { id: 2, name: "Yaris", color: "Blue", brand: "Toyota", year: "2008" },
  { id: 3, name: "Alpard", color: "White", brand: "Toyota", year: "2007" },
  {
    id: 4,
    name: "Grand Livina",
    color: "Black",
    brand: "Nissan",
    year: "2007"
  },
  { id: 5, name: "Kijang", color: "Black", brand: "Toyota", year: "1998" }
];

const result = cars.map(item => {
  return {
    ...item,
    color: item.color.toUpperCase()
  };
});

/* GET users listing. */
router.get("/", function(req, res, next) {
  const filtered = cars.filter(item => {
    if (item.brand === "Toyota") {
      return item;
    }
  });
  res.send(filtered);
});

module.exports = router;
