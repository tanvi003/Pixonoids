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
  document.getElementById("workcontent").innerHTML="<p>Production engineering is a combination of manufacturing technology, engineering sciences with management science. A production engineer typically has a wide knowledge of engineering practices and is aware of the management challenges related to production. The goal is to accomplish the production process in the smoothest, most-judicious and most-economic way.</p><br/><p>Production engineering encompasses the application of castings, machining processing, joining processes, metal cutting & tool design, metrology, machine tools, machining systems, automation, jigs and fixtures, die and mould design, material science, design of automobile parts, and machine designing and manufacturing. Production engineering also overlaps substantially with manufacturing engineering and industrial engineering. The names are often interchangeable.</p>";

}
function webcont(){
  document.getElementById("workheading").innerHTML="Web Designing";
  document.getElementById("workcontent").innerHTML="<p>Web design encompasses many different skills and disciplines in the production and maintenance of websites. The different areas of web design include web graphic design; interface design; authoring, including standardised code and proprietary software; user experience design; and search engine optimization. Often many individuals will work in teams covering different aspects of the design process, although some designers will cover them all.<p/><br/><p> The term web design is normally used to describe the design process relating to the front-end (client side) design of a website including writing mark up. Web design partially overlaps web engineering in the broader scope of web development. Web designers are expected to have an awareness of usability and if their role involves creating mark up then they are also expected to be up to date with web accessibility guidelines.</p>";
}
function graphcont(){
  document.getElementById("workheading").innerHTML="Graphics";
  document.getElementById("workcontent").innerHTML="<p>Graphic design, also known as communication design, is the art and practice of planning and projecting ideas and experiences with visual and textual content. The form of the communication can be physical or virtual, and may include images, words, or graphic forms. The experience can take place in an instant or over a long period of time. The work can happen at any scale, from the design of a single postage stamp to a national postal signage system, or from a company’s digital avatar to the sprawling and interlinked digital and physical content of an international newspaper. It can also be for any purpose, whether commercial, educational, cultural, or political.<p/><br/><p>Type design carries aspects of almost all of these things. While the form of a single letter has meaning, a typeface, like a brand, is also composed of the relationships between characters that work together to create meaning. And like software, typefaces are licensed and can be installed on individual computers.</p> ";
}
function animcont(){
  document.getElementById("workheading").innerHTML="Animation";
  document.getElementById("workcontent").innerHTML="<p>Animation is the process of making the illusion of motion and the illusion of change by means of the rapid display of a sequence of images that minimally differ from each other. The illusion—as in motion pictures in general—is thought to rely on the phi phenomenon. Animators are artists who specialize in the creation of animation. Animation can be recorded with either analogue media, a flip book, motion picture film, video tape, digital media, including formats with animated GIF, Flash animation, and digital video.</p><br/><p>Animation creation methods include the traditional animation creation method and those involving stop motion animation of two and three-dimensional objects, paper cutouts, puppets and clay figures. Images are displayed in a rapid succession, usually 24, 25, 30, or 60 frames per second. Computer animation processes generating animated images with the general term computer-generated imagery (CGI).</p>";
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