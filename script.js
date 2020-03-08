 //JAVASCRIPT SSTUFF//
 var secretNumber = getRandomNumber();

 function getRandomNumber()
 {
     return Math.ceil(Math.random()*100);
     return rand;
 }

 function checkUserGuess()
 {
     //input object
        var guess = document.getElementById("user-guess")["0"].value;
        //get guess
     
        //compare it
        if (guess == secretNumber)displayOutput("win");
        else if (guess > secretNumber)displayOutput("high");
        else if (guess < secretNumber)displayOutput("low");
        else displayOutput("error");

        var guess = inputField.select();
 }

     function displayOutput(result)
 {
    var imageName = "";
    var caption = "";
    switch(result)
    {
        case "win":
            imageName = "you-win.jpg";
            caption = "YOU WIN ! bUT how do you know!?";
            break;
        case "high":
            imageName = "too-high.jpg";
            caption = "too high";
            break;
        case "low":
            imageName = "too-low.jpg";
            caption = "That's too low!!";
             break;
        case "error":
            imageName = "that's not a number.jpg";
            caption = "not a number!!!!";
           
        }
        
    document.getElementById("display-message").innerText = caption;
    document.getElementById("display-Image").src = images/ + imageName;
 } 

   function reseet()
 {}
 