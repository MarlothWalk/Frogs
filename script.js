function playCall(href)
{
	if (calls[href])
	{
		calls[href].play()		
	}
}
function pauseCall(href)
{
	if (calls[href])
	{
		calls[href].pause()		
	}
}
let calls = {}
function loadCalls()
{
	$('button.play').each(function(){
		let href = $(this).attr('href')
		if (href)
		{
			calls[href] = new Audio(href)
			calls[href].loop = true
			calls[href].load()
		}
	});
}
function setYoutubeLinks()
{
	$('button.youtube').click(function(){
		let href = $(this).attr('href');

	})
}
$(document).ready(() => {
	loadCalls()
	setYoutubeLinks()
	$('button.play').click(function() { 
		let href = $(this).attr('href')
		let playing = $(this).attr('playing');
		if (playing == "true")
		{
			pauseCall(href)		
		}
		else
		{
			playCall(href) 
		}
		$(this).toggleClass('fa-play')
		$(this).toggleClass('fa-pause')
		playing = playing == 'true' ? 'false':'true'
		$(this).attr('playing',playing)		
		$(this).text(playing == 'true' ? 'Pause Call' : 'Play Call')
	})
});
