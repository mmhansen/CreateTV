
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


		// console.log('display_name : '+ displayName + '\nviewers : ' + viewers);
		// console.log(channelHeld);

		showStreams(prop);
		// end for Each
	}
// end json
})

function showStreams(num){

$('.stream-location').append("<div class='stream-" + num +"'></div>");

$('.stream-'+num).append("<div class='content-stream-" + num + "'></div>");

$('.content-stream-'+num).append("<img src='" + thumbnail + "'>");

$('.content-stream-'+num).append("<div class='profile-content-stream-" + num + "'><img src=" + logo + "></div>");

$('.content-stream-'+num).append("<div class='glyphicon glyphicon-play'></div>");

$('.content-stream-'+num).append("<div class='name-content-stream-" + num + "'><span>" + displayName + "</span></div>");

trimStatus()

$('.content-stream-'+num).append("<div class='profie-icon-hover'><span class='glyphicon glyphicon-share'></span></div>")

$('.content-stream-'+num).append("<div class='hover-info-overlay'><p class='status'>" + status +"</p><p class='viewers'>Current Views : " + viewers + "</p></div>");
      
}

function trimStatus(){
	// max 25 char
	status = status.slice(0, 25) + "...";
}







// end doc ready
})


/*


from page load, show all in box

but have search bar at the top that instantly finds results and trims shown videos

show one out of first 5 as a large player

have ability to open others into large player, when one is open, close all others

*/