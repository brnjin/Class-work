var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "a1423567",
	database: "top_songsdb"
});

connection.connect(function(err){
	if(err) throw err;
	askQuestions();
})

function askQuestions(){
	inquirer
		.prompt({
			name: "itemName",
			type: "list",
			message: "What would you like to do?",
			choices: [
				"Find song by artist", 
				"Find all artists who appear more than once",
				"Find data within a specific range",
				"Search for a specific song"
			]
	})
	.then(function(answer) {
      switch (answer.itemName) {
        case "Find song by artist":
          artistSearch();
          break;

        case "Find all artists who appear more than once":
          albumSearch();
          break;

        // case "Find data within a specific range":
        //   rangeSearch();
        //   break;

        // case "Search for a specific song":
        //   songSearch();
          // break;
      }

	});
};

function artistSearch() {
	inquirer
		.prompt({
			name: "artist",
			type: "input",
			message: "What artist would you like to search for?"
		})
		.then(function(data){
			var query = "SELECT  position, song, year FROM top5000 WHERE ?";
			connection.query(query, {artist: data.artist}, 
				function(err, res) {
					for (var i = 0; i < res.length; i++) {
						console.log("Position: " + res[i].position + " || Song: " 
							+ res[i].song + "|| Year: " + res[i].year);
					};
					askQuestions();
				});
		});
}

function albumSearch() {
	inquirer
		.prompt({
			name: "album",
			type: "input",
			message: "What album are you trying search?"
		})
}