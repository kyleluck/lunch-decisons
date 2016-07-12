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
	// if Tuesday, default to Lovies as Tuesday is 20% off
	var d = new Date();
	var today = d.getDay();
	if (today === 2) {
		return "It's Tuesday! Lovies it is!";
	}
  return "Your choice for lunch is: " + lunchOptions[lunchChoice];
};
