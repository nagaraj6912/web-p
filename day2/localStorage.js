let x=5;
console.log("hello")
console.log(x)

score={
    firstScore:10,
    SecondScore:20
}


localStorage.setItem("score",JSON.stringify(score))

console.log(typeof(JSON.parse(localStorage.getItem("score"))))
storedScore=JSON.parse(localStorage.getItem("score"))
console.log(storedScore.SecondScore)
// localStorage.getItem
