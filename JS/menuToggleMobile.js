var menuCount=0;

function toggleMenu(){
  menuCount++;
  if(menuCount%2==1){
    document.getElementById("menuButton").innerHTML="X";
    document.getElementsByClassName("divBackMenuToggle")[0].className="divBackMenuToggle divBackToggle";
    if(document.getElementsByClassName("menu")[0].className=="menu menuSlide1"){
      document.getElementsByClassName("menu")[0].className="menu menuToggled menuSlide1";
      document.getElementsByClassName("menu")[1].className="menu menuToggled menuSlide2";
      document.getElementsByClassName("menu")[2].className="menu menuToggled menuSlide3";
      document.getElementsByClassName("menu")[3].className="menu menuToggled menuSlide4";
    }
    else {
      document.getElementsByClassName("menu")[0].className="menu menu1 menuToggled";
      document.getElementsByClassName("menu")[1].className="menu menu2 menuToggled";
      document.getElementsByClassName("menu")[2].className="menu menu3 menuToggled";
      document.getElementsByClassName("menu")[3].className="menu menu4 menuToggled";
    }
  }

  else {
    document.getElementById("menuButton").innerHTML="| | |";
    document.getElementsByClassName("divBackMenuToggle")[0].className="divBackMenuToggle";
    if(document.getElementsByClassName("menu")[0].className=="menu menuToggled menuSlide1"){
      document.getElementsByClassName("menu")[0].className="menu menuSlide1";
      document.getElementsByClassName("menu")[1].className="menu menuSlide2";
      document.getElementsByClassName("menu")[2].className="menu menuSlide3";
      document.getElementsByClassName("menu")[3].className="menu menuSlide4";
    }
    else {
      document.getElementsByClassName("menu")[0].className="menu menu1";
      document.getElementsByClassName("menu")[1].className="menu menu2";
      document.getElementsByClassName("menu")[2].className="menu menu3";
      document.getElementsByClassName("menu")[3].className="menu menu4";
    }
  }
}
