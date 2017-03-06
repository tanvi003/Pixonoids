var canvas = document.getElementById("canvasTopLeft");
var con = canvas.getContext("2d");

var circleX = [], circleY = [], deltaX = [], deltaY = [];

for(var i = 0; i < 10; i++){
	circleX[i] = Math.floor(Math.random()*100) + 20;
	circleY[i] = Math.floor(Math.random()*200) + 30;
	deltaX[i] = Math.floor(Math.random()*3) + 1;
	deltaY[i] = Math.floor(Math.random()*3) + 1;
}

function makeParticles(){

	con.clearRect(0, 0, 200, 400);
	con.strokeStyle = "white";
	for(var i = 0; i < circleX.length; i++){
		con.fillStyle = "rgba(255, 255, 255, 0.8)";
		con.beginPath();
		con.arc(circleX[i], circleY[i], 2, 0, Math.PI/180 * 360, false);

		circleX[i] += deltaX[i];
		circleY[i] += deltaY[i];

		if(circleX[i] < 0 || circleX[i] > 200)
			deltaX[i] = (deltaX[i]<0)? (Math.floor(Math.random()*3) + 1): -(Math.floor(Math.random()*3) + 1);

		if(circleY[i] < 0 || circleY[i] > 200)
			deltaY[i] = (deltaY[i]<0)? (Math.floor(Math.random()*3) + 1): -(Math.floor(Math.random()*3) + 1);

		con.fill();
		con.closePath();

		con.beginPath();
		con.moveTo(0, 0);
		con.lineTo(circleX[i], circleY[i]);
		con.stroke();
		con.closePath();
	}

	/*for(var i = 0; i<circleX.length; i++){
		var count = 0;
		for(var j = 0; j < circleX.length; j++){
			if(circleX[i] - circleX[j] < 20 && circleY[i] - circleY[j] < 20){
				con.lineWidth = "0.5";
				con.beginPath();
				con.moveTo(circleX[i], circleY[i]);
				con.lineTo(circleX[j], circleY[j]);
				con.stroke();
				con.closePath();
					break;
			}
		}
	}*/

	setTimeout(makeParticles, 70);
}

makeParticles();