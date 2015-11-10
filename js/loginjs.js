$(document).ready(function() {
textAdj();
});

$( window ).resize(function() {
  textAdj();
});

function textAdj() {
	setTimeout(function(){
		$("input,button").css("width",$(".main-container p").width());
	},100);
}