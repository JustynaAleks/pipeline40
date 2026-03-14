setTimeout(() => {

document.getElementById("loading-screen").style.display="none";
document.getElementById("main-content").style.display="block";

},3000);


const memories = [

"Integration that was supposed to end at 22:00",
"When the project finally worked",
"That one meeting",
"Best team moment",
"Coffee break that lasted 2 hours",
"Legendary office moment"

];

document.getElementById("queryBtn").onclick = function(){

let random = memories[Math.floor(Math.random()*memories.length)];

document.getElementById("queryResult").innerText = random;

};
