var a = document.getElementById("Number")
var b = document.getElementById("ans")
var d = document.getElementById("SCORES")
var score = 5
var ans = Math.floor(Math.random()*10+1)
function ANSWER(){
var c = a.value

if(c==ans){
    pop2()
    console.log("Right")
    b.textContent=("YOU ARE Right")
    
    

}else{
    console.log("Wrong")
        b.textContent=("YOU ARE Wrong")
        --score
    d.textContent ="YOUR CHANCES  : " + score
    a.value="";
}
if(score==0){
   pop3()
}        
console.log(ans)
}
var popup2 = document.querySelector(".popup2")
var popup3 = document.querySelector(".popup3")
var overlay2 = document.querySelector(".overlay2")
function pop2(){

    popup2.style.display = "block"
    overlay2.style.display = "block"

}
function pop3(){
    popup3.style.display = "block"
    overlay2.style.display = "block"
}
function re(event){
    location.reload(event);
}