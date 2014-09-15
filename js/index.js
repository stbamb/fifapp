function loadAllClubs() 
{	
	Parse.initialize("Dv4oYn0Ri2yDSvvy5WjEDcflbUDCXwZlZvT5NReZ", "pAUAzo4IlTIXZfGSeGB4qOKgc0o2bK9ksxA84a02");
	var Teams = Parse.Object.extend("Clubs");
	var query = new Parse.Query(Teams);
	query.exists("logo");
		
	query.find({
	
		success: function(results) {
			name = '';
			imageURLs = [];

			for (var i = 0; i < results.length; i++) { 
			
				var object = results[i];
				name = object.get('name');		
				imageURLs.push(object.get('logo'));
				
				if (imageURLs.length > 0) { 
					
					$('#page-content-wrapper').append("<p><a href = javascript:retrieveClubInfo('" + object.id + "')>" + name + "</a></p>");
					$('#page-content-wrapper').append("<a href = javascript:retrieveClubInfo('" + object.id + "')><img src='" + imageURLs[i].url() + "'></a>"); 
				}	
			}
		},
		error: function(error) {
			//alert("Error: " + error.code + " " + error.message);
		}
	});
}

function retrieveClubInfo(name)
{
	window.location.href = "javascript:saveValue('" + name + "')";
}

function upload()
{
	var clubname = document.getElementById('fcname').value;
	var clubleague = document.getElementById('fcleague').value;
	var base64 = "V29ya2luZyBhdCBQYXJzZSBpcyBncmVhdCE=";
	var fileUploadControl = $("#fclogo")[0];
	
	if (fileUploadControl.files.length > 0) 
	{
		var file = fileUploadControl.files[0];
		var name = file.name;
	    var parseFile = new Parse.File(name, file);	
	}
	
	var newClub = new Parse.Object("Clubs");
	newClub.set("name", clubname);
	newClub.set("league", clubleague);	
	newClub.set("logo", parseFile);
	newClub.save();
	
	
	newClub.save(null, {success: function(sucess) 
	{
		alert(clubname + " " + " succesfully created!");
		document.location.reload(true);
  	},
  	
  	error: function(gameScore, error) { } });
}

function loadSearchResults()
{	
	window.location.href = "searchResults.html";
}

function loadUploadClub()
{	
	window.location.href = "uploadClub.html";
}

function loadMainPage()
{
	window.location.href = "index.html";
}
