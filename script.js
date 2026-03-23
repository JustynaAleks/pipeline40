
const images = [
"marek1.jpeg","marek2.jpeg","marek3.jpeg","marek4.jpeg","marek5.jpeg",
"marek6.jpeg","marek7.jpeg","marek8.jpeg","marek9.jpeg","marek10.jpeg",
"marek11.jpeg","marek12.jpeg","marek13.jpeg","marek14.jpeg","marek15.jpeg",
"marek16.jpeg","marek17.jpeg","marek18.jpeg","marek19.jpeg","marek20.jpeg",
"marek21.jpeg","marek22.jpeg","marek23.jpeg","marek24.jpeg","marek25.jpeg",
"marek26.jpeg","marek27.jpeg","marek28.jpeg","marek29.jpeg"
];

function randomMemory(){
const randomIndex = Math.floor(Math.random()*images.length);
document.getElementById("randomImage").src = "images/" + images[randomIndex];
}

window.onload = function(){
setTimeout(function(){
document.getElementById("bootScreen").style.display="none";
document.body.classList.remove("loadingState");
},2000);
}

const galleryImages = document.querySelectorAll(".gallery img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");

galleryImages.forEach(img => {
img.addEventListener("click", function(){
modal.style.display = "flex";
modalImg.src = this.src;
});
});

function closeModal(){
modal.style.display = "none";
}

