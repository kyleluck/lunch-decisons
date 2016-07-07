var lunchOptions = [
	"Farm Burger",
	"Naan Stop",
	"Chow Bing",
	"Sushi",
	"Lovies",
	"Chic-fil-a",
	"Jimmy Johns",
	"Industry Tavern",
	"Wells Fargo",
	"Red Pepper"
];

var lunchChoice = Math.floor(Math.random() * lunchOptions.length);

module.exports = function() {
  return "Your choice for lunch is: " + lunchOptions[lunchChoice];
};
