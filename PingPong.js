var boardOne = document.getElementById("board1") ; 
var boardTwo = document.getElementById("board2") ; 
var ball = document.getElementById("ball") ; 
var tp = 200 ; 
document.addEventListener("keydown" , function(event){
    if((event.keyCode == 38 || event.keyCode == 87 || event.keyCode == 119) && boardOne.getBoundingClientRect().top >= 10){
        tp = tp - 40 ; 
        if(ball)
        boardOne.style.top = tp.toString() + "px" ;
        boardTwo.style.top = tp.toString() + "px" ;
    }
    if((event.keyCode == 40 || event.keyCode == 83 || event.keyCode == 115)&& boardOne.getBoundingClientRect().bottom <= window.innerHeight-20){
        tp = tp + 40 ; 
        boardOne.style.top = tp.toString() + "px" ;
        boardTwo.style.top = tp.toString() + "px" ; 
    }
}) ; 
function getRate(){
    var n = parseInt(Math.random()*1000)%2 ;
    console.log(n) ; 
    return n == 0 ? -10 : 10 ; 
}
var xCordStart = ball.getBoundingClientRect().left ; 
var yCordStart = ball.getBoundingClientRect().top ; 
var yRate = getRate() ; var xPosition = ball.getBoundingClientRect().left ; 
var xRate = getRate() ; var yPosition = ball.getBoundingClientRect().top; 
var ballSpeed = 30 ; 

var boolB1 = false ; 
var boolB2 = false ; 
setInterval(function(){
    ball.style.transform = "rotate(7deg)" ; 
    xPosition = xPosition + xRate ; 
    ball.style.left = xPosition.toString() + "px" ; 
    yPosition = yPosition + yRate ; 
    ball.style.top = yPosition.toString() + "px" ; 

    if(ball.getBoundingClientRect().bottom > (window.innerHeight-50)
    || ball.getBoundingClientRect().top < 50){  
        
        yRate = -yRate ; 
    }
    if((boardOne.getBoundingClientRect().top+5 < ball.getBoundingClientRect().top
    && boardOne.getBoundingClientRect().bottom-5 > ball.getBoundingClientRect().bottom)
    && boardOne.getBoundingClientRect().right > ball.getBoundingClientRect().left && !boolB1){
        boolB1 = true ; 
        boolB2 = false ; 
        xRate = -xRate ; 
    }

    if((boardTwo.getBoundingClientRect().top+5 < ball.getBoundingClientRect().top
    && boardTwo.getBoundingClientRect().bottom-5 > ball.getBoundingClientRect().bottom)
    && boardTwo.getBoundingClientRect().left < ball.getBoundingClientRect().right && !boolB2){
        xRate = -xRate ; 
        boolB2 = true ; 
        boolB1 = false; 
    }

    if(ball.getBoundingClientRect().left > window.innerWidth-10){
        xPosition = xCordStart ; yRate = getRate() ;
        yPosition = yCordStart ; xRate = getRate() ;
        ball.style.top = yPosition.toString() + "px" ; 
        ball.style.left = xPosition.toString() + "px" ; 
    }
    if(ball.getBoundingClientRect().right < 10 ){
        xPosition = xCordStart ; xRate = getRate() ;
        yPosition = yCordStart ; yRate = getRate() ;
        ball.style.top = yPosition.toString() + "px" ; 
        ball.style.left = xPosition.toString() + "px" ; 
    }
    
},ballSpeed) ; 
