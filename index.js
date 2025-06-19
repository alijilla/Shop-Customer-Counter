
let count = 0

//console.log(count)
let countEl = document.getElementById("count-el")
function increment(){
    count += 1
    countEl.innerText = count
    console.log("The button was clicked")
}

let saveEl = document.getElementById("save-el")
const d = new Date();
function save(){
    saveCount = count + "@" 
    saveEl.innerHTML += saveCount +" customers " + d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) + "<br>";
    countEl.textContent = 0
    count = 0
    console.log(count)
}



