$.get("/api/all", function(data) {
	console.log(data);
	for(var i = 0; i < data.length; i++) {
		if(data[i].eaten === false) {
			$("#uneatenBurgers").append("<li>" + data[i].name + "</li><button type='submit' class='devour' id='"+data[i].id+"'>Devour</button>");
		} else {
			$("#eatenBurgers").append("<li>" + data[i].name + "</li>");
		}
	}
});

$(document).on("click", ".devour", function(){
	$.post("/" + this.id, function(data) {
		console.log("Devoured!");
		refresh();
	});
});

$("#addBurger").click(function(){
	console.log("hey");
	var newBurger = {
		name: $("#ca").val().trim(),
		eaten: false
	};
	$.post("/api/new", newBurger)
		.done(function(data) {
			console.log("data");
		});
	//refresh();	
});

function refresh(){
	$.get("/");
}