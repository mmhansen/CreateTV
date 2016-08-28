
///////////////////////////////////////////////////////////
// Get Channel names => retrieve channel data from names //
///////////////////////////////////////////////////////////

$(document).ready(function(){

var getChannels = 'https://api.twitch.tv/kraken/streams?game=Creative&limit=100';
var liveStreams = [];
var streams, 
	viewers,
	displayName,
	logo,
	mature,
	status,
	videoLink,
	selfLink,
	thumbnail;
var activeChannels = [];


$.getJSON(getChannels, function(data){
	streams = data.streams;
	for (var prop in streams){
		// grab that sum'bitch!
		var channelHeld = streams[prop];

		// info for generated card

			viewers = channelHeld['viewers'],
			displayName = channelHeld['channel']['display_name'],
			logo = channelHeld['channel']['logo'],
			mature = channelHeld['channel']['mature'],
			status = channelHeld['channel']['status'],
			videoLink = 'https://player.twitch.tv/?volume=0.5&channel='+displayName,
			selfLink = 'http://api.twitch.tv/kraken/channels/' + displayName + '/profile';

			thumbnail = channelHeld['preview']['medium'];

			activeChannels.push(displayName);

		// console.log(channelHeld);

		showStreams(prop);
		// end for Each
	}
// end json
})

function showStreams(num){

$('.stream-location').append("<div id='name-"+ displayName +"' class='stream-" + num +"'></div>");

$('.stream-'+num).append("<div class='content-stream-" + num + "'></div>");

$('.content-stream-'+num).append("<img src='" + thumbnail + "'>");

$('.content-stream-'+num).append("<a target ='_blank' href='https://player.twitch.tv/?volume=0.5&channel=" + displayName + "'><div class='glyphicon glyphicon-play'></div></a>");

$('.content-stream-'+num).append("<div class='name-content-stream-" + num + "'><span>" + displayName + "</span></div>");

trimStatus()

$('.content-stream-'+num).append("<div class='hover-info-overlay'><p class='status'>" + status +"</p><p class='viewers'>" + viewers + " people are watching.</p></div>");
      
}

function trimStatus(){
	// max 25 char
	status = status.slice(0, 25) + "...";
}




//////////////////////////////////////
// Search and display by channel ID //
//////////////////////////////////////

$('input').on('input', function(){
	var searchTerm = $('input').val();
	var count = 1;
	// display only those that contain or match searchTerm
	
	// activeChannels

      



	console.log(searchResults);
})


/////////////////////////////////////////////////
// Display first 20, and have load more button //
/////////////////////////////////////////////////


// end doc ready
})


/*


from page load, show all in box

but have search bar at the top that instantly finds results and trims shown videos

show one out of first 5 as a large player

have ability to open others into large player, when one is open, close all others

*/