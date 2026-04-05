// ===== CONFIG =====
const MAX_IMAGES = 39;
const images = [];

for(let i=1;i<=MAX_IMAGES;i++){
    images.push(`marek${i}.jpeg`);
}

// ===== CONFETTI =====
function launchConfetti(){

    const canvas = document.getElementById("confettiCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let confetti = [];

    for(let i=0;i<150;i++){
        confetti.push({
            x: Math.random()*canvas.width,
            y: Math.random()*canvas.height - canvas.height,
            r: Math.random()*6+4,
            dx: Math.random()*2 - 1,
            dy: Math.random()*3 + 2,
            color: `hsl(${Math.random()*360},100%,50%)`
        });
    }

    let running = true;

    function draw(){
        if(!running) return;

        ctx.clearRect(0,0,canvas.width,canvas.height);

        confetti.forEach(c=>{
            ctx.beginPath();
            ctx.arc(c.x,c.y,c.r,0,Math.PI*2);
            ctx.fillStyle=c.color;
            ctx.fill();

            c.y += c.dy;
            c.x += c.dx;

            if(c.y > canvas.height){
                c.y = -10;
                c.x = Math.random()*canvas.width;
            }
        });

        requestAnimationFrame(draw);
    }

    draw();

    setTimeout(()=>{
        running = false;
        ctx.clearRect(0,0,canvas.width,canvas.height);
    },3000);
}

// ===== PIPELINE =====
function randomMemory(){

    const img = document.getElementById("randomImage");
    const log = document.getElementById("logBox");
    const status = document.getElementById("pipelineStatus");

    img.style.opacity="0.2";
    img.src="";
    log.innerHTML="";
    status.innerText="Pipeline RUNNING...";

    function addLog(text, delay){
        setTimeout(()=>{
            const p=document.createElement("p");
            p.innerText="> "+text;
            log.appendChild(p);
        },delay);
    }

    addLog("Pipeline triggered...",0);
    addLog("Initializing data source...",300);
    addLog("Reading memory dataset...",700);
    addLog("Applying transformations...",1100);
    addLog("Sorting by fun level DESC...",1500);
    addLog("Loading output...",1900);

    setTimeout(()=>{
        const randomIndex=Math.floor(Math.random()*images.length);
        img.src="images/"+images[randomIndex];

        img.onload=()=>{ img.style.opacity="1"; }

        addLog("Pipeline SUCCESS ✔",0);

        status.innerText="✔ Deployment to Production completed";
        status.classList.add("success");

        launchConfetti();

    },2300);
}

// ===== NODE =====
function selectNode(element,message){
    document.querySelectorAll(".node").forEach(n=>n.classList.remove("active"));
    element.classList.add("active");
    document.getElementById("pipelineStatus").innerText=message;
}

// ===== GALLERY =====
let currentIndex = 0;
let galleryList = [];

function generateGallery(){

    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";

    for(let i = 1; i <= MAX_IMAGES; i++){

        const img = document.createElement("img");
        img.src = "images/marek" + i + ".jpeg";

        gallery.appendChild(img);

        img.onerror = () => {
            img.remove();
        };
    }
}

function initGalleryViewer(){

    galleryList = Array.from(document.querySelectorAll(".gallery img"));

    galleryList.forEach((img, index) => {
        img.addEventListener("click", function(e){
            e.stopPropagation();

            currentIndex = index;
            openModal(this.src);
        });
    });
}

// ===== MODAL =====
function openModal(src){
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");

    modal.style.display = "flex";
    modalImg.src = src;
}

function closeModal(){
    document.getElementById("modal").style.display = "none";
}

function nextImage(e){
    e.stopPropagation();

    if(galleryList.length === 0) return;

    currentIndex = (currentIndex + 1) % galleryList.length;
    document.getElementById("modalImg").src = galleryList[currentIndex].src;
}

function prevImage(e){
    e.stopPropagation();

    if(galleryList.length === 0) return;

    currentIndex = (currentIndex - 1 + galleryList.length) % galleryList.length;
    document.getElementById("modalImg").src = galleryList[currentIndex].src;
}

// ===== KEYBOARD =====
document.addEventListener("keydown", function(e){

    const modalOpen = document.getElementById("modal").style.display === "flex";

    if(!modalOpen) return;

    if(e.key === "ArrowRight") nextImage(e);
    if(e.key === "ArrowLeft") prevImage(e);
    if(e.key === "Escape") closeModal();
});

// ===== NAV =====
document.querySelectorAll(".nav-item").forEach(item=>{
    item.addEventListener("click", function(){
        document.querySelectorAll(".nav-item")
            .forEach(i=>i.classList.remove("active"));
        this.classList.add("active");
    });
});

// ===== LOADING =====
window.onload=function(){

    setTimeout(()=>{
        document.getElementById("bootScreen").style.display="none";
        document.body.classList.remove("loadingState");
    },2000);

    generateGallery();

    // 🔥 KLUCZ: po wyrenderowaniu galerii
    setTimeout(()=>{
        initGalleryViewer();
    },100);
};

// ===== EASTER EGG =====
document.addEventListener("keydown",function(e){
    if(e.key==="Enter"){
        console.log("sudo birthday 🎂");
    }
});