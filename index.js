
var random1 = Math.floor(Math.random()*6)+1;
// document.querySelector("img1").setAttribute("dice6.png","dicerandom.png");
var randomimage1 = "dice"+random1+ ".png";
var randomSource = "images/"+randomimage1;
var img = document.querySelectorAll("img")[0];
img.setAttribute("src",randomSource);
var random2 = Math.floor(Math.random()*6)+1;
var randomimage2 = "dice"+random2+".png";
var randomSource2 = "images/"+randomimage2;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",randomSource2);
if(random1>random2)
{
  document.querySelector("h1").innerHTML="player 1 wins!";
}
else if(random2>random1)
{
  document.querySelector("h1").innerHTML="player 2 wins!";
}
else{
  document.querySelector("h1").innerHTML="draw!";
}
