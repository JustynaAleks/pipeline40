const images = [

"images/marek (1).jpeg",
"images/marek (2).jpeg",
"images/marek (3).jpeg",
"images/marek (4).jpeg",
"images/marek (5).jpeg",
"images/marek (6).jpeg",
"images/marek (7).jpeg",
"images/marek (8).jpeg",
"images/marek (9).jpeg",
"images/marek (10).jpeg",
"images/marek (11).jpeg",
"images/marek (12).jpeg",
"images/marek (13).jpeg",
"images/marek (14).jpeg",
"images/marek (15).jpeg",
"images/marek (16).jpeg",
"images/marek (17).jpeg",
"images/marek (18).jpeg",
"images/marek (19).jpeg",
"images/marek (20).jpeg",
"images/marek (21).jpeg",
"images/marek (22).jpeg",
"images/marek (23).jpeg",
"images/marek (24).jpeg",
"images/marek (25).jpeg",
"images/marek (26).jpeg",
"images/marek (27).jpeg",
"images/marek (28).jpeg",
"images/marek (29).jpeg"

]

function randomMemory(){

let random = Math.floor(Math.random()*images.length)

document.getElementById("randomImage").src = images[random]

}
