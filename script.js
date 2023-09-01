
var randomno1 = Math.floor(Math.random()*6) + 1;
var randomImg1 = "images/" + ("dice" + randomno1 + ".png");

document.querySelectorAll("img")[0].setAttribute("src",randomImg1);


var randomno2 = Math.floor(Math.random()*6) + 1;
var randomImg2 = "images/" + ("dice" + randomno2 + ".png");

document.querySelectorAll("img")[1].setAttribute("src",randomImg2);

//who will win

if (randomImg1>randomImg2){
    document.querySelector("h1").innerHTML = "🚩 player1 won";
}
else if (randomImg1<randomImg2){
    document.querySelector("h1").innerHTML = "player2 won 🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}