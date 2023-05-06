const colors = ["Green", "Red", "Blue", "White", "Black", "Brown", "Orange", "Yellow", "Purple", "Pink"]    
const btn = document.getElementById("btn")

function change_color(){
    let conta = colors.length
    let cor = Math.floor(Math.random()*conta)
    document.getElementById("color").innerHTML = colors[cor]
    document.querySelector("body").style.backgroundColor = colors[cor]
}


