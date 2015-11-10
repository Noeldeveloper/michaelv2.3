$(document).ready(function() {
titleTextAdj();
markerWidth=480;
markerHeight=226;
  setTimeout(function(){
mapCenter();
topDistance=245;
eventPlacement();
  },200);
});

$( window ).resize(function() {
  titleTextAdj();
  mapCenter();
  eventPlacement();
});

function titleTextAdj() {
	if($('.message-title b').height()>50)
	{
		$('.message-title').css("padding-top","0");
		$('.message-title').css("margin-top","10px");
	}
	else if($('.message-title b').height()>25)
	{
		$('.message-title').css("padding-top","0");
		$('.message-title').css("margin-top","19px");
	}
	else
	{
		$('.message-title').css("padding-top","");
		$('.message-title').css("margin-top","");
	}
}

function eventPlacement()
{
	leftDistance=parseFloat($(".main-container").css("margin-left"))+124.5;
	Xoffset=(markerWidth-$(".marker").width())/2;
	$(".event").css("left",leftDistance+Xoffset+"px");
	Yoffset=markerHeight-$(".marker").height();
	$(".event").css("top",topDistance+Yoffset+"px");
}

function mapCenter() {
	
	if($(window).width()>750)
	{
	$(".main-container").css("width",$(".map").width());
	$(".main-container").css("margin-left",($(window).width()/2)-($(".map").width()/2));
	}	
	else
		$(".main-container").css("margin-left","0");
}