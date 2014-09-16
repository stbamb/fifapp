function loadClub()
{
	id = localStorage.clubID;
	Parse.initialize("Dv4oYn0Ri2yDSvvy5WjEDcflbUDCXwZlZvT5NReZ", "pAUAzo4IlTIXZfGSeGB4qOKgc0o2bK9ksxA84a02");
	var Teams = Parse.Object.extend("Clubs");
	var query = new Parse.Query(Teams);
	query.get(id, {
		success: function(result) {
			name = result.get('name');
			url = result.get('logo');
			league = result.get('league');
			info = result.get('extraInfo');
			$('#page-content-wrapper').append("<h2><font color='blue'>" + name + "</font></h2>");
			$('#page-content-wrapper').append("<img src='" + url.url() + "'/><br><br>"); 
			$('#page-content-wrapper').append("<p>" + name + " plays in " + league + ".</p>"); 
		},
		error: function(error) {
			//alert("Error: " + error.code + " " + error.message);
		} 
	});
}

function saveValue(value)
{
	if (typeof(Storage) != "undefined") 
	{
		localStorage.clubID = value;
	} 
	
	else 
	{
		//document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
	}
	window.location.href = "aboutTeam.html";
}
