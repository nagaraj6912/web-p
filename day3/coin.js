//fully functional coin flip game

let x;
function humanInput(){
    x=prompt("enter your move R,P,S")
    isvalidate(x)

}
let random;
function computerInput(){
    random=parseInt(Math.random()*3)+1;
    if(random==1){
        return random="R"
    }
    else if(random==2){
        return random="P"
    }else{
        return random="S"
    }

}
computer=computerInput()
function isvalidate(x){
    if(x!="R"&&x!="P"&&x!="S"){
        console.log("in-valid move",x)
        humanInput()
    }
    else{
        play(x,computer)
    }

}
function play(x,y){
    if(x=="R"&&y=="S"||x=="P"&&y=="R"||x=="S"&&y=="p"){
        alert("HUMAN WON THE MATCH")
    }else if(x==y){
        alert("oh! Draw")
    }
    else{
        alert("Computer won")
    }
    isContinue()
}
function isContinue(){
    z=prompt("enter a valid (Y or N) do you want to contine");
    if(z=="y"||z=="Y"){
        humanInput()
    }
    else{
        return 0; 
    }
}

computerInput(computer)
humanInput()
console.log("hekjei")