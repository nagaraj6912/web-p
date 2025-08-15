complete code of html and css for Rock Paper Scissor game

<!-- <h1>Welcome to My Page</h1>
    <p>This is a simple HTML document with a linked CSS file and JavaScript functions.</p>

    <div class="game-container">
        <h2>Rock Paper Scissors</h2>
        <div class="choices">
            <button class="button1" id="rock"><span style="color: red">Rock</span></button>
            <button class="button1" id="paper"><span style="color: black">Paper</span></button>
            <button class="button1" id="scissors"><span
                    style="color: Green">Scissors</span></button>
            <br>
        </div>
        <button id="reset">Restart</button>
        <br>
        <p>Human Score is :<span id="hs">0</span></p>
        <p>Computer Score is :<span id="cs">0</span></p>
        <p>Draw :<span id="dr">0</span></p> -->
#css
<!-- .button1{
    background-color: antiquewhite;
    border-radius: 50%;
    height: 100px;
    width: 100px;
    font-weight: bold;
    cursor: pointer;
} -->

//////--------------------------------------------------------///////

//Code for coin flip 
#Html
    <!-- <body>
    <div class="game-container">
        <h1>Welcome to My Page</h1>
        <p>Coin flip game</p>
        <div id="coin"><p id="coin-toss">Toss</p></div>
        <div class="choices">
            <button id="heads">Heads</button>
            <button id="tails">Tails</button>
        </div>
        <button id="reset">Reset</button>
        <p>Your Win <span id="won">0</span></p>
        <p>Your Loss <span id="loss">0</span></p>
    </div> -->

#css for this rich ui game of coin flip
<!-- body {
    /* Use CSS Grid to center the main container on the page */
    display: grid;
    place-items: center;   /* A shorthand for align-items: center and justify-items: center */
    min-height: 100vh;     /* Make body take up the full viewport height */
    margin: 0;             /* Remove default body margin */
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #f0f0f0; /* A light background for better contrast */
}

.game-container {
    /* Use CSS Grid to stack and center the items inside this container */
    display: grid;
    justify-items: center;  /* Center items horizontally within their grid track */
    gap: 10px;              /* Add some space between the elements */
    padding: 2rem;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
button{
    cursor:pointer;
}

.choices {
    display: flex;
    gap: 15px; /* Adds space between the Heads and Tails buttons */
}
/* Optional: Some basic styling for the coin and button to make them look nicer */
#coin {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: gold;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-weight: bold;
    border: 3px solid darkgoldenrod;
}
#flip {
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}
#flip:hover {
    background-color: #0056b3;
}

#result {
    display: flex;
    gap: 20px;
}

#reset {
    padding: 10px 20px;
    cursor: pointer;
} -->
