//fully functional rock paper scissor game with localstorage 

let HumanscPrint=document.getElementById("hs")
let ComputerscPrint=document.getElementById("cs")
let DrawPrint=document.getElementById("dr")
let ResetScore=document.getElementById("reset")

let Savedscore=localStorage.getItem("score")

let score



if(Savedscore !== null){
    score=JSON.parse(Savedscore)
}else{
    score={
        HumanScore:0,
        ComputerScore:0,
        Draw:0
    }
}
ResetScore.addEventListener("click",function(){
    score={
        HumanScore:0,
        ComputerScore:0,
        Draw:0
    }
    localStorage.removeItem("score")
    ScoreDisplay()
})
function ScoreDisplay(){
    HumanscPrint.innerHTML=score.HumanScore
    ComputerscPrint.innerHTML=score.ComputerScore
    DrawPrint.innerHTML=score.Draw
}
ScoreDisplay()
let computer

function computerInput(){
    let x=parseInt(Math.random()*3)+1
    if(x==1){
        return computer="r"
    }
    else if(x==2){
        return computer="p"
    }else{
        return computer="s"
    }
}
function play(Human){
    
    Computer=computerInput()
    if(Human=="r"&&Computer=="s"||Human=="s"&&Computer=="p"||Human=="p"&&Computer=="r"){
        score.HumanScore+=1;
        ScoreDisplay()
        alert("Human won !")
    }else if(Computer=="r"&&Human=="s"||Computer=="s"&&Human=="p"||Computer=="p"&&Human=="r"){
        score.ComputerScore+=1;
        alert("Computer won",)
        ScoreDisplay()
    }else{
        score.Draw+=1;
        alert("Draw")
        ScoreDisplay()    
    }
    localStorage.setItem("score",JSON.stringify(score))

}


let Rock=document.getElementById("rock")
Rock.addEventListener("click",function(humanChoice){
    console.log("r")
    play("r")
});
let Paper=document.getElementById("paper")
Paper.addEventListener("click",function(humanChoice){
    console.log("p")
    play("p")
});
let Scissor=document.getElementById("scissors")
Scissor.addEventListener("click",function(humanChoice){
    console.log("s")
    play("s")
});
