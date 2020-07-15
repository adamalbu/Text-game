var remote = 0
function Start() {
    document.getElementById("Game").innerHTML = "You are in a lounge. You can <button onclick='look1()'>look</button>, <button onclick='search1()'>search</button> or <button onclick='go1'>go</button>";
}
function look1() {
    document.getElementById("Game").innerHTML = "You can look <button onclick='up1()'>up</button>, <button onclick='down1()'>down</button>,";
}
function up1() {
    document.getElementById("Game").innerHTML = "There is a ceiling. A boring one. Just plaing grey";
}
function down1() {
    document.getElementById("Game").innerHTML = "A floor. Nothing but a floor. Made out of wood.";
}