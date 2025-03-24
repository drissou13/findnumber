var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");

var answer = Math.floor(Math.random()*100) + 1;
var no_of_guesses = 0;
var guessed_nums = [];

function play(){
    var user_guess = document.getElementById("guess").value;
    if(user_guess < 1 || user_guess > 100){
        alert("Please enter a number between 1 and 100.");
    }
    else{
        guessed_nums.push(user_guess);
        no_of_guesses+= 1;

        if(user_guess < answer){
            msg1.textContent = "Votre estimation est trop faible.";
            msg2.textContent = "Nombre de proposition  " + no_of_guesses;
            msg3.textContent = "Les chiffres devinés sont : " +
            guessed_nums;
        }
        else if(user_guess > answer){
            msg1.textContent = "votre proposition est trop haute .";
            msg2.textContent = "nombre de proposition " + no_of_guesses;
            msg3.textContent = "les chiffres devinés sont  " +
            guessed_nums;
        }
        else if(user_guess == answer){
            msg1.textContent = "youpie tu as gagnée!!";
            msg2.textContent = "le nombre etait: " + answer;
            msg3.textContent = "tu as trouvé en  "+ no_of_guesses + " proposition";
            document.getElementById("my_btn").disabled = true;
        }
    }
}