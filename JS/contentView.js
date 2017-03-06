var active=0,prev,x;
function funcBringContent(x){
  if(x!=active){
    document.getElementsByClassName("divBackMenuToggle")[0].className="divBackMenuToggle";
    document.getElementById("menuButton").innerHTML="| | |";
    if(active==0){
      document.getElementsByClassName("menu1")[0].className="menu menuSlide1";
      document.getElementsByClassName("menu2")[0].className="menu menuSlide2";
      document.getElementsByClassName("menu3")[0].className="menu menuSlide3";
      document.getElementsByClassName("menu4")[0].className="menu menuSlide4";
      document.getElementById("divLogoSmall").style.top="2%";
      if(menuCount!=0) menuCount++;
    }
    else if(x==0){
      document.getElementById("divLogoSmall").style.top="-10%";
      document.getElementsByClassName("menuSlide1")[0].className="menu menu1";
      document.getElementsByClassName("menuSlide2")[0].className="menu menu2";
      document.getElementsByClassName("menuSlide3")[0].className="menu menu3";
      document.getElementsByClassName("menuSlide4")[0].className="menu menu4";
      if(menuCount!=0)  menuCount++;
    }

    else {
      if(document.getElementsByClassName("menu")[0].className=="menu menuToggled menuSlide1"){
        document.getElementsByClassName("menu")[0].className="menu menuSlide1";
        document.getElementsByClassName("menu")[1].className="menu menuSlide2";
        document.getElementsByClassName("menu")[2].className="menu menuSlide3";
        document.getElementsByClassName("menu")[3].className="menu menuSlide4";
      }
      else {
        document.getElementsByClassName("menu")[0].className="menu menuSlide1";
        document.getElementsByClassName("menu")[1].className="menu menuSlide2";
        document.getElementsByClassName("menu")[2].className="menu menuSlide3";
        document.getElementsByClassName("menu")[3].className="menu menuSlide4";
      }
      if(menuCount!=0) menuCount++;
    }
    var activeDiv=document.getElementById("divBody"+active);
    var reqDiv=document.getElementById("divBody"+x);
    if(x<active) reqDiv.style.zIndex="100";
    activeDiv.style.transform="translateZ(-500px)";
    reqDiv.className="divBody divActive";
    prev=active;
    active=x;
    setTimeout(funcErr, 500);
  }
}

function funcErr(){
  var p=document.getElementById("divBody"+prev);
  var q=document.getElementById("divBody"+active);
  p.style.transform="translateZ(0px)";
  p.style.zIndex="0";
  p.className="divBody divInactive";
  q.style.zIndex="0";
}

function funcChangeColor(event){
  if (active==0) {
    event.target.style.color="#8B4789";
    event.target.querySelector(".firstLetter").style.color="#8B4789";
  }
  else if (active==1) {
    event.target.style.color="#FF6347";
    event.target.querySelector(".firstLetter").style.color="#FF6347";
  }
  else if (active==2) {
    event.target.style.color="#6cd744";
    event.target.querySelector(".firstLetter").style.color="#6cd744";
  }
  else {
    event.target.style.color="#089de3";
    event.target.querySelector(".firstLetter").style.color="#089de3";
  }
}
function funcRevertColor(event){
  event.target.style.color="white";
  event.target.querySelector(".firstLetter").style.color="white";
}

function photocont(){
  document.getElementById("workheading").innerHTML="Production";
  document.getElementById("workcontent").innerHTML="Post and Pre Production departments ki information yahan likhni hai";
}
function webcont(){
  document.getElementById("workheading").innerHTML="Web Designing";
  document.getElementById("workcontent").innerHTML="Web Designing department ki information yahan likhni hai";
}
function graphcont(){
  document.getElementById("workheading").innerHTML="Graphics";
  document.getElementById("workcontent").innerHTML="Graphics department ki information yahan likhni hai";
}
function animcont(){
  document.getElementById("workheading").innerHTML="Animation";
  document.getElementById("workcontent").innerHTML="Animation department ki information yahan likhni hai";
} 
function displaymyinfo(num){
  document.getElementById("hiddenquotes"+num).style.visibility="visible";
  document.getElementById("hi"+num).style.visibility="hidden";
}
function hidemyinfo(num){
  document.getElementById("hiddenquotes"+num).style.visibility="hidden";
  document.getElementById("hi"+num).style.visibility="visible";
}
 $(document).ready(function(){
      $(".sliderbutton0").click(function(){
        $("#fallnow0").fadeIn();
      });
      $("#fallnow0").click(function(){
        $("#fallnow0").slideUp();
      });
      $('#background').mouseParallax({ moveFactor: 10 });
      $('#foreground').mouseParallax({ moveFactor: 10 });
      $('#fore-foreground').mouseParallax({ moveFactor: 10 });
      $('#fore-fore-foreground').mouseParallax({ moveFactor: 10 });       
    });