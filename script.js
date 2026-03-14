const memories = [

"Integracja która miała skończyć się o 22",

"Wigilia firmowa",

"Najlepszy inside joke zespołu",

"Projekt który w końcu działał",

"Ta kawa która uratowała dzień"

];

document.getElementById("memoryBtn").onclick = function(){

let random = memories[Math.floor(Math.random()*memories.length)];

document.getElementById("memoryText").innerText = random;

}