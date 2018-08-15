var movieDatabase = [
	{
		names:"Wall Streen",
		rating: 9.8,
		watched:true
	},
	{
		names:"Fight Club",
		rating:8.5,
		watched:true
	},
	{
		names:"Saving Private Ryan",
		rating:9.9,
		watched:false
	},
	{
		names:"Solaris",
		rating:5.5,
		watched:false
	}
];

Movie(movieDatabase);
function Movie(movieDatabase){
	for(i=0;i<movieDatabase.length;i++){
		mRate = movieDatabase[i].rating;
		mName = movieDatabase[i].names;
		mWatched = movieDatabase[i].watched;
		if(mWatched==true){
			console.log("I have watched "+mName+" - "+mRate+" stars.");
		}
		else{
			console.log("I have not watched "+mName+" - "+mRate+" stars");
		}
	}
}
