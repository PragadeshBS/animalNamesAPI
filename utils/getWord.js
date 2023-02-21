const fs = require("fs");
const path = require("path");

export default function getRandomAnimalName(callback) {
  getAdjective(function (err, adjective) {
    if (err) {
      return callback(err);
    }
    getAnimal(function (err, animal) {
      if (err) {
        return callback(err);
      }
      callback(null, adjective + " " + animal);
    });
  });
}

function getAnimal(callback) {
  fs.readFile(
    path.join(process.cwd(), "utils", "animals.txt"),
    "utf8",
    function (err, data) {
      if (err) {
        return callback(err);
      }
      const animalNames = data.trim().split("\n");
      const randomIndex = Math.floor(Math.random() * animalNames.length);
      const randomAnimalName = animalNames[randomIndex];
      callback(null, randomAnimalName);
    }
  );
}

function getAdjective(callback) {
  fs.readFile(
    path.join(process.cwd(), "utils", "adjectives.txt"),
    "utf8",
    function (err, data) {
      if (err) {
        return callback(err);
      }
      const adjectives = data.trim().split("\n");
      const randomIndex = Math.floor(Math.random() * adjectives.length);
      let randomAdjective = adjectives[randomIndex];
      randomAdjective = randomAdjective.replace(
        randomAdjective[0],
        randomAdjective[0].toUpperCase()
      );
      callback(null, randomAdjective);
    }
  );
}
