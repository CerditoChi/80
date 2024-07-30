var nombres = [];
function e() {
    var nuevo = document.getElementById("n").value;
    nombres.push(nuevo);
    document.getElementById("m").innerHTML = nombres.toString();
}

function m() {
    var o = nombres.sort();
    var text = o.join("<br>");
    document.getElementById("nombres").innerHTML = text.toString();
}