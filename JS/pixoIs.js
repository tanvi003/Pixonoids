setTimeout(funcChangeSpan,1000);
var span1=document.getElementById("span1");
var activeText=0,count=0,words=new Array("Passion","Creativity", "Innovation", "Coding", "Photos", "Dhadi Fun");
function funcChangeSpan(){
	if(activeText>=5) activeText=0;
	else activeText++;
	count=0;
	setTimeout(func1,500);
}

function func1(){
	span1.style.color="#8B4789";
	span1.style.backgroundColor="white";
	setTimeout(func2,500);
}

function func2(){
	span1.innerHTML="";
	span1.style.backgroundColor="#8B4789";
	span1.style.color="white";
	setTimeout(func3,500);
}

function func3(){
	count++;
	span1.innerHTML=words[activeText].substring(0,count);
	if(count<=words[activeText].length)
		setTimeout(func3,100);
	else
		setTimeout(funcChangeSpan,1000);
}

//Heart Beat ANimation
var countHeartBeat = 0;
document.getElementById("footerCopyright").addEventListener("mouseenter", beatHeart, false);
window.addEventListener("load", beatHeart, false);

function beatHeart(){
	if(countHeartBeat == 0){
		document.getElementById("footerCopyright").getElementsByTagName("i")[0].style.fontSize = "1.3em";
		countHeartBeat++;
		setTimeout(beatHeart, 200);
	}
	else if(countHeartBeat == 1){
		document.getElementById("footerCopyright").getElementsByTagName("i")[0].style.fontSize = "0.9em";
		countHeartBeat++;
		setTimeout(beatHeart, 300);
	}
	else if(countHeartBeat == 2){
		document.getElementById("footerCopyright").getElementsByTagName("i")[0].style.fontSize = "1.3em";
		countHeartBeat++;
		setTimeout(beatHeart, 200);
	}
	else if(countHeartBeat == 3){
		document.getElementById("footerCopyright").getElementsByTagName("i")[0].style.fontSize = "0.9em";
		countHeartBeat = 0;
	}
}
