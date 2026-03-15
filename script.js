const images = [

"images/marek (1).jpg",
"images/marek (2).jpg",
"images/marek (3).jpg",
"images/marek (4).jpg",
"images/marek (5).jpg",
"images/marek (6).jpg",
"images/marek (7).jpg",
"images/marek (8).jpg",
"images/marek (9).jpg",
"images/marek (10).jpg",
"images/marek (11).jpg",
"images/marek (12).jpg",
"images/marek (13).jpg",
"images/marek (14).jpg",
"images/marek (15).jpg",
"images/marek (16).jpg",
"images/marek (17).jpg",
"images/marek (18).jpg",
"images/marek (19).jpg",
"images/marek (20).jpg",
"images/marek (21).jpg",
"images/marek (22).jpg",
"images/marek (23).jpg",
"images/marek (24).jpg",
"images/marek (25).jpg",
"images/marek (26).jpg",
"images/marek (27).jpg",
"images/marek (28).jpg",
"images/marek (29).jpg"

]

function randomMemory(){

let random = Math.floor(Math.random()*images.length)

document.getElementById("randomImage").src = images[random]

}
