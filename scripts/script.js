var d = new Date()

var clock = document.querySelector("#clock")
var color = document.querySelector("#color")
var background = document.querySelector(".colorOverlay")
var timebar = document.querySelector("#timeBarProgress")

background.style.backgroundColor = "#" +
("0" + d.getHours().toString(16)).slice(-2) +
("0" + d.getMinutes().toString(16)).slice(-2) +
("0" + d.getSeconds().toString(16)).slice(-2)

clock.textContent = 
("0" + d.getHours()).slice(-2) + ":" + 
("0" + d.getMinutes()).slice(-2) + ":" + 
("0" + d.getSeconds()).slice(-2)

timebar.style.width = parseInt(d.getSeconds()) + "%"

var time = function() {

var d = new Date()

clock.textContent = 

("0" + d.getHours()).slice(-2) + ":" + 
("0" + d.getMinutes()).slice(-2) + ":" + 
("0" + d.getSeconds()).slice(-2)

color.textContent =  

("0" + d.getHours().toString(16)).slice(-2) +
("0" + d.getMinutes().toString(16)).slice(-2) +
("0" + d.getSeconds().toString(16)).slice(-2) 

background.style.backgroundColor = 

"#" + color.textContent

timebar.style.width = parseInt(d.getSeconds()) + "%"


}

setInterval(time,1000)
