function upload()
{
	facebookUsername = localStorage.username;
	Parse.initialize("Dv4oYn0Ri2yDSvvy5WjEDcflbUDCXwZlZvT5NReZ", "pAUAzo4IlTIXZfGSeGB4qOKgc0o2bK9ksxA84a02");
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
	newClub.set("createdBy", facebookUsername);
	newClub.save();
	
	
	newClub.save(null, {success: function(sucess) 
	{
		alert(clubname + " succesfully created!");
		document.location.reload(true);
  	},
  	
  	error: function(gameScore, error) { } });
}
