const hello = require("./hello");

if (hello("World") !== "Bonjour World") {
  console.error("Test échoué");
  process.exit(1);
}

console.log("Test réussi");