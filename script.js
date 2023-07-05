function player1(){
    let image = document.querySelector(".img1");
    let random1 = Math.floor((Math.random() * 6) + 1);
    let randomImage = "images/" + "dice" + random1 + ".png";
    image.setAttribute("src",randomImage);
    return random1
}

function player2(){
    let image2 = document.querySelector(".img2");
    let random2 = Math.floor((Math.random() * 6) + 1);
    let randomImage2 = "images/" + "dice" + random2 + ".png";
    image2.setAttribute("src", randomImage2);
    return random2
}

function result(){
    let announcement = document.querySelector(".resultdeclare");
    let random1 = player1();
    let random2 = player2();
    if (random1 > random2){
        announcement.textContent = "Dice in their hand, Player 1 dominates the land!"; 
    }
    else if (random2 > random1){
        announcement.textContent = "Dice in their hand, Player 2 dominates the land!";
    }
    else if (random1 === random2){
        announcement.textContent = "Equality achieved, a draw is received!";
    }
}


