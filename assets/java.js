 
        // set global variables


        var numWins= 0;
        var numLosses =0;
        var userTotal = 0;


     $(document).ready(function(){
        // set the randomBox value to match to
        var randomNum = Math.floor(Math.random()*500+50)
   
        $("#randomNum").innerHTML(randomNum);

        // given a random number value to the button color crystal at the start of the game
        var redr= Math.floor(Math.random()*11+1)
        var bluer= Math.floor(Math.random()*11+1)
        var yellowr = Math.floor(Math.random()*11+1)
        var greenr = Math.floor(Math.random()*11+1)

        // var to store the values for each color

        var red = 0
        var blue = 0
        var yellow = 0
        var green = 0

        // variables to store counts
        // var userTotal= 0; 
        // var wins= 0;
        // var losses = 0;
        

        // $("#wins").text(wins);
        // $("#losses").text(losses);    


   

        // BUTTON AND FUNCTION FOR RED CRYSTAL
        $("#btn1").on("click", function() {

            // add the value of the red crystal to the current score
            userTotal = userTotal + red;
    
            // write the score in the total score box
            $("#totals").text(userTotal);
    
        // BUTTON AND FUNCTION FOR blue CRYSTAL
        $("#btn1").on("click", function() {

            // add the value of the blue crystal to the current score
            userTotal = userTotal + blue;
    
            // write the score in the total score box
            $("#totals").text(userTotal);    

        // BUTTON AND FUNCTION FOR yellow CRYSTAL
        $("#btn1").on("click", function() {

            // add the value of the red crystal to the current score
            userTotal = userTotal + yellow;
    
            // write the score in the total score box
            $("#totals").text(userTotal);
    
        // BUTTON AND FUNCTION FOR green CRYSTAL
        $("#btn1").on("click", function() {

            // add the value of the green crystal to the current score
            userTotal = userTotal + green;
    
            // write the score in the total score box
            $("#totals").text(userTotal);    


      // check the totals and match       
            // If the userTotal is equal to the random number, send an alert, add a win to the Wins and restart the game
            if (userTotal === randomNum) {
                alert("You won!");
                wins++;
                $("#wins").text(wins);
                reset();
            }
    
            // If the userScore goes over the random number, send an alert, add a loss to the Losses and restart the game
            else if (userScore > randomNum) {
                alert("You lose!");
                losses++;
                $("#losses").text(losses);
                reset();
            }
        });




    });
