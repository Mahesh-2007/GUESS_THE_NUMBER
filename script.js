var a = document.getElementById("Number")
var b = document.getElementById("ans")
var d = document.getElementById("SCORES")
var score = 5
var ans = Math.floor(Math.random()*10+1)
function ANSWER(){
var c = a.value

if(c==ans){
    console.log("Right")
    b.textContent=("YOU ARE Right")
    alert("YOU WON!(refresh for New Game )")
   

}else{
    console.log("Wrong")
        b.textContent=("YOU ARE Wrong")
        --score
    d.textContent ="YOUR CHANCES  : " + score
}
if(score==0){
    alert("YOU LOST (refresh for New Game )")
}        
console.log(ans)
}