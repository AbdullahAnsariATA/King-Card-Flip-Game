var img_1 = document.querySelector("#img-1");
var img_2 = document.querySelector("#img-2");
var img_3 = document.querySelector("#img-3");
var result_msg = document.querySelector("#result-message")
var isCardFlipped = true
var winScore = document.querySelector("#win-score");
var loseScore = document.querySelector("#lose-score");
var win = 0;
var lose = 0;

function flipCard(cardNumber) {
    if (isCardFlipped) {
        var king_card = Math.ceil(Math.random() * 3 );
        if (king_card === 1) {
            img_1.src = "./images/king.png";
            img_2.src = "./images/joker.jpg";
            img_3.src = "./images/joker.jpg";
        }
        else if (king_card === 2) {
            img_1.src = "./images/joker.jpg";
            img_2.src = "./images/king.png";
            img_3.src = "./images/joker.jpg";
        }
        else if (king_card === 3) {
            img_1.src = "./images/joker.jpg";
            img_2.src = "./images/joker.jpg";
            img_3.src = "./images/king.png";
        }

        if (king_card === cardNumber) {
            result_msg.innerHTML = "<b>You Win The Game</b>";
            win++;
            }
            else {
            result_msg.innerHTML = "<b>You Lose The Game</b>";
            lose++;
            }
    }
    isCardFlipped = false;
    winScore.innerHTML = "You <b>Win</b> " + win + " Times";
    loseScore.innerHTML = "You <b>Lose</b> " + lose + " Times";
};


// Reset Flipped Card Function
function flipReset() {
    img_1.src = "./images/cardback.jpg";
    img_2.src = "./images/cardback.jpg";
    img_3.src = "./images/cardback.jpg";
    isCardFlipped = true;
    result_msg.innerHTML = "<b>Your Result Will Be Shown Here.</b>"     
};