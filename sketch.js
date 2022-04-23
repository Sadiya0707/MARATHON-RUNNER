var trackImg;
var player1;
var player2;
var player3;
var player4;
var formBg;

var players;
var allPlayers;
var player;

var gameState=0
var playerCount=0

var form;

function preload(){
trackImg=loadImage("IMAGES/RunningTrack.jpg")
player1=loadGif("IMAGES/player1.gif")
player2=loadGif("IMAGES/player2.gif")
player3=loadGif("IMAGES/player3.gif")
player4=loadGif("IMAGES/player4.gif")
formBg=loadImage("IMAGES/BgForm.png")

}
function setup(){
 createCanvas(displayWidth,displayHeight) 
 database=firebase.database()
 game=new Game();
 game.start();
}
function draw(){
   
}