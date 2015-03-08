window.onload = function() {
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	
	var timer = setInterval(paint, 33);
	
	function paint() {
		ctx.strokeRect(0, 0, canvas.width, canvas.height);
	}
}



