window.onload = function() {
	var FIELD_WIDTH = 14;
	var FIELD_HEIGHT = 10;
	
	var mx = 0;
	var my = 0;

	//reading Heroes and Units
	var game = {};

	var xmlReq = new XMLHttpRequest();
	xmlReq.open('GET', 'heroes.json');

	var canvas = document.getElementById("canvas");
	canvasBoundingRects = canvas.getBoundingClientRect();

	var ctx = canvas.getContext("2d");

	var heroOneSelect = document.getElementById('heroOneSelect');
	var heroOneImg = document.getElementById('heroOneImg');
	heroOneImg.width = "100";
	heroOneImg.height = "100";
	var heroOneImgCtx = heroOneImg.getContext('2d');
	// makeImageNonDrag(heroOneImg);
	// var heroOneEmptyLayer = document.createElement('div');
	// heroOneEmptyLayer.style.position = "absolute";
	// document.body.appendChild(heroOneEmptyLayer);
	
	var heroOneUnitsTd  = document.getElementById('heroOneUnitsTd');
	var heroOneSelectedUnitIndex = -1;
	var heroOneUnits = [];


	var heroTwoSelect = document.getElementById('heroTwoSelect');
	var heroTwoImg = document.getElementById('heroTwoImg');
	heroTwoImg.width = "100";
	heroTwoImg.height ="100";
	var heroTwoImgCtx = heroTwoImg.getContext('2d');
	// makeImageNonDrag(heroTwoImg);
	var heroTwoUnitsTd = document.getElementById('heroTwoUnitsTd');
	var heroTwoSelectedUnitIndex = -1;
	var heroTwoUnits = [];

	heroOneSelect.onchange = function() {
		var selectedHero = this.options.selectedIndex - 1;
		if (selectedHero === -1) {
			heroOneImgCtx.fillStyle = '#fff';
			heroOneImgCtx.fillRect(0, 0, heroOneImg.width, heroOneImg.height);
			for (var t=heroOneUnitsTd.children.length-1; t>-1; t--) {
				heroOneUnitsTd.children[t].remove();
				//var divEmpty = document.getElementById('EmptyOne'+t);
				//divEmpty.remove();
			}
			return;
		} 
		
		for (var t=heroOneUnitsTd.children.length-1; t>=game.heroes[selectedHero].units.length; t--) {
			heroOneUnitsTd.children[t].remove();
			// var divEmpty = document.getElementById('EmptyOne'+t);
			// divEmpty.remove();
		}

		// heroOneImg.src = "images\\"+game.heroes[selectedHero].name+".png";
		var img = document.createElement('img');
		img.width = "100";
		img.height = "100";
		img.src = "images\\"+game.heroes[selectedHero].name+".png";
		heroOneImgCtx.drawImage(img, 0, 0, heroOneImg.width, heroOneImg.height);

		/*
		var bounds = heroOneImg.getBoundingClientRect();
		heroOneEmptyLayer.style.left = Math.floor(bounds.left)+"px";
		heroOneEmptyLayer.style.top = Math.floor(bounds.top)+"px";
		heroOneEmptyLayer.style.width = Math.floor(bounds.width)+"px";
		heroOneEmptyLayer.style.height = Math.floor(bounds.height)+"px";
		*/

		for (var t=0; t<game.heroes[selectedHero].units.length; t++) {
			var pr = heroOneUnitsTd.children[t] === undefined;
			var cvs, cvsCtx;
			// var imgEmpty;
			if (pr)	{
				// makeImageNonDrag(img);
				cvs = document.createElement('canvas');
				cvsCtx = cvs.getContext('2d');
				cvs.id = t;
				cvs.onmousedown = function() {
					heroOneSelectedUnitIndex = +this.id;
				}

				/*
				divEmpty = document.createElement('div');
				divEmpty.id = 'EmptyOne'+t;
				divEmpty.style.position = "absolute";
				*/
			}
			else {
				cvs = heroOneUnitsTd.children[t];
				//imgEmpty = document.getElementById('EmptyOne'+t);
			}
			cvs.width = Math.floor(canvas.width/FIELD_WIDTH);
			cvs.height = Math.floor(canvas.height/FIELD_HEIGHT);
			
			var img = document.createElement('img');
			img.width = Math.floor(canvas.width/FIELD_WIDTH);
			img.height = Math.floor(canvas.height/FIELD_HEIGHT);
			img.src = "images\\"+game.heroes[selectedHero].units[t].name+'.png';
			cvsCtx.drawImage(img, 0, 0, cvs.width, cvs.height);
			
			/*
			divEmpty.style.width = img.width +"px";
			divEmpty.style.height = img.height + "px";
			*/

			if (pr) {
				heroOneUnitsTd.appendChild(cvs);
				/*
				var bounds = img.getBoundingClientRect();
				divEmpty.style.left = Math.floor(bounds.left)+"px";
				divEmpty.style.top = Math.floor(bounds.top) + "px";
				document.body.appendChild(divEmpty);
				*/
			}
		}
		

		
	}

	heroTwoSelect.onchange = function() {
		var selectedHero = this.options.selectedIndex - 1;
		if (selectedHero === -1) {
			heroTwoImgCtx.fillStyle = '#fff';
			heroTwoImgCtx.fillRect(0, 0, heroTwoImg.width, heroTwoImg.height);
			for (var t=heroTwoUnitsTd.children.length-1; t>-1; t--) {
				heroTwoUnitsTd.children[t].remove();
				//var divEmpty = document.getElementById('EmptyOne'+t);
				//divEmpty.remove();
			}
			return;
		} 
		
		for (var t=heroTwoUnitsTd.children.length-1; t>=game.heroes[selectedHero].units.length; t--) {
			heroTwoUnitsTd.children[t].remove();
			// var divEmpty = document.getElementById('EmptyOne'+t);
			// divEmpty.remove();
		}

		// heroOneImg.src = "images\\"+game.heroes[selectedHero].name+".png";
		var img = document.createElement('img');
		img.width = "100";
		img.height = "100";
		img.src = "images\\"+game.heroes[selectedHero].name+".png";
		heroTwoImgCtx.drawImage(img, 0, 0, heroTwoImg.width, heroTwoImg.height);

		/*
		var bounds = heroOneImg.getBoundingClientRect();
		heroOneEmptyLayer.style.left = Math.floor(bounds.left)+"px";
		heroOneEmptyLayer.style.top = Math.floor(bounds.top)+"px";
		heroOneEmptyLayer.style.width = Math.floor(bounds.width)+"px";
		heroOneEmptyLayer.style.height = Math.floor(bounds.height)+"px";
		*/

		for (var t=0; t<game.heroes[selectedHero].units.length; t++) {
			var pr = heroTwoUnitsTd.children[t] === undefined;
			var cvs, cvsCtx;
			// var imgEmpty;
			if (pr)	{
				// makeImageNonDrag(img);
				cvs = document.createElement('canvas');
				cvsCtx = cvs.getContext('2d');
				cvs.id = t;
				cvs.onmousedown = function() {
					heroTwoSelectedUnitIndex = +this.id;
				}

				/*
				divEmpty = document.createElement('div');
				divEmpty.id = 'EmptyOne'+t;
				divEmpty.style.position = "absolute";
				*/
			}
			else {
				cvs = heroTwoUnitsTd.children[t];
				//imgEmpty = document.getElementById('EmptyTwo'+t);
			}
			cvs.width = Math.floor(canvas.width/FIELD_WIDTH);
			cvs.height = Math.floor(canvas.height/FIELD_HEIGHT);
			
			var img = document.createElement('img');
			img.width = Math.floor(canvas.width/FIELD_WIDTH);
			img.height = Math.floor(canvas.height/FIELD_HEIGHT);
			img.src = "images\\"+game.heroes[selectedHero].units[t].name+'.png';
			cvsCtx.drawImage(img, 0, 0, cvs.width, cvs.height);
			
			/*
			divEmpty.style.width = img.width +"px";
			divEmpty.style.height = img.height + "px";
			*/

			if (pr) {
				heroTwoUnitsTd.appendChild(cvs);
				/*
				var bounds = img.getBoundingClientRect();
				divEmpty.style.left = Math.floor(bounds.left)+"px";
				divEmpty.style.top = Math.floor(bounds.top) + "px";
				document.body.appendChild(divEmpty);
				*/
			}
		}
		

		
	}

	xmlReq.onreadystatechange = function() {
		if (this.readyState == 4) {
			if (this.status == 200) {
				game = JSON.parse(this.responseText);

				for (var t = 0; t < game.heroes.length; t++) {
					var opt1 = document.createElement('option');
					opt1.innerHTML = game.heroes[t].name;
					heroOneSelect.options.add(opt1);


					var opt2 = document.createElement('option');
					opt2.innerHTML = game.heroes[t].name;
					heroTwoSelect.options.add(opt2);
				}
				

			}
		}
	}
	xmlReq.send(null);
	
	window.onmousemove = function(e) {
		mx = e.pageX;
		my = e.pageY;
	}

	canvas.onmouseup = function(e) {
		if (heroOneSelectedUnitIndex !== -1) {
			var relX = e.pageX - canvasBoundingRects.left;
			var relY = e.pageY - canvasBoundingRects.top;
			var discX = Math.floor(relX*FIELD_WIDTH/canvas.width);
			var discY = Math.floor(relY*FIELD_HEIGHT/canvas.height);
			heroOneUnits.push({x:discX, y:discY, unitType: heroOneSelectedUnitIndex});
			return;
		}

		if (heroTwoSelectedUnitIndex !== -1) {
			var relX = e.pageX - canvasBoundingRects.left;
			var relY = e.pageY - canvasBoundingRects.top;
			var discX = Math.floor(relX*FIELD_WIDTH/canvas.width);
			var discY = Math.floor(relY*FIELD_HEIGHT/canvas.height);
			heroTwoUnits.push({x:discX, y:discY, unitType: heroTwoSelectedUnitIndex});
			return;	
		}
	}

	window.onmouseup = function(e) {
		heroOneSelectedUnitIndex = -1;
		heroTwoSelectedUnitIndex = -1;
			
	}
	
	var timer = setInterval(timerFunc, 33);
	
	function timerFunc() {
		ctx.fillStyle = "#fff";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		
		ctx.beginPath();
		for (var t=0; t<=FIELD_WIDTH; t++) {
			var prx = canvas.width*t/FIELD_WIDTH;
			ctx.moveTo(prx, 0);
			ctx.lineTo(prx, canvas.height);
		}

		for (var t1=0; t1<=FIELD_HEIGHT; t1++) {
			var pry = canvas.height*t1/FIELD_HEIGHT;
			ctx.moveTo(0, pry);
			ctx.lineTo(canvas.width, pry);
		}

		ctx.stroke();

		for (var t=0; t < heroOneUnits.length; t++) {
			/*
			ctx.moveTo(heroOneUnits[t].x*canvas.width/FIELD_WIDTH+30, heroOneUnits[t].y*canvas.height/FIELD_HEIGHT);
			ctx.arc(heroOneUnits[t].x*canvas.width/FIELD_WIDTH, heroOneUnits[t].y*canvas.height/FIELD_HEIGHT, 30, 0, 2*Math.PI);
			*/
			var img = document.createElement('img');
			img.width = Math.floor(canvas.width/FIELD_WIDTH);
			img.height = Math.floor(canvas.height/FIELD_HEIGHT);
			img.src = "images\\"+game.heroes[heroOneSelect.options.selectedIndex-1].units[heroOneUnits[t].unitType].name+".png";
			//alert(heroOneUnits[t].x*canvas.width/FIELD_WIDTH+' '+heroOneUnits[t].y*canvas.height/FIELD_HEIGHT);
			ctx.drawImage(img, heroOneUnits[t].x*canvas.width/FIELD_WIDTH, heroOneUnits[t].y*canvas.height/FIELD_HEIGHT, canvas.width/FIELD_WIDTH, canvas.height/FIELD_HEIGHT);
		}

		//ctx.fill();

		for (var t=0; t < heroTwoUnits.length; t++) {
			//ctx.moveTo(heroTwoUnits[t].x*canvas.width/FIELD_WIDTH+30, heroTwoUnits[t].y*canvas.height/FIELD_HEIGHT);
			//ctx.arc(heroTwoUnits[t].x*canvas.width/FIELD_WIDTH, heroTwoUnits[t].y*canvas.height/FIELD_HEIGHT, 30, 0, 2*Math.PI);
			var img = document.createElement('img');
			img.width = Math.floor(canvas.width/FIELD_WIDTH);
			img.height = Math.floor(canvas.height/FIELD_HEIGHT);
			img.src = "images\\"+game.heroes[heroTwoSelect.options.selectedIndex-1].units[heroTwoUnits[t].unitType].name+".png";
			ctx.drawImage(img, heroTwoUnits[t].x*canvas.width/FIELD_WIDTH, heroTwoUnits[t].y*canvas.height/FIELD_HEIGHT, canvas.width/FIELD_WIDTH, canvas.height/FIELD_HEIGHT);
		}


	}

	function makeImageNonDrag(img) {
		
		//img.style.pointerEvents = "none";
		img.style.MozUserSelect = "none";
		img.style.WebkitUserSelect = "none";
		img.style.MsUserSelect = "none";
		
		img.style.userSelect = "none";
		
	}

	function Unit() {

	}
}



