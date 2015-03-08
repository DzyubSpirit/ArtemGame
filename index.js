window.onload = function() {
	var FIELD_WIDTH = 10;
	var FIELD_HEIGHT = 10;
	var heroesList = [];
	var xmlReq = new XMLHttpRequest();
	xmlReq.open('GET', 'heroes\\heroes.txt');

	var heroOneSelect = document.getElementById('heroOneSelect');
	var heroTwoSelect = document.getElementById('heroTwoSelect');

	xmlReq.onreadystatechange = function() {
		if (this.readyState == 4) {
			if (this.status == 200) {
				var str = this.responseText;
				heroesList = str.split("\n");
				for (var t = 0; t < heroesList.length; t++) {
					var opt1 = document.createElement('option');
					opt1.innerHTML = heroesList[t];
					heroOneSelect.options.add(opt1);

					var opt2 = document.createElement('option');
					opt2.innerHTML = heroesList[t];
					heroTwoSelect.options.add(opt2);
				}
			}
		}
	}
	xmlReq.send(null);


	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	
	var timer = setInterval(timerFunc, 33);
	
	function timerFunc() {
		ctx.fillStyle = "#fff";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		
		for (var t=0; t<=FIELD_WIDTH; t++) {

		}

		for (var t1=0; t1<=FIELD_HEIGHT; t1++) {
				
		}
	}
}



