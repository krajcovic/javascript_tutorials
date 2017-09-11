var ukol1, ukol2, ukol3

ukoly = [
    "Zaplatit ucet za telefon.",
    "Napsat nejprodavanejsi roman.",
    "Jit na prochazku se psem."
];
// ukoly.pop();
var ukolySize = ukoly.length
console.log(ukolySize)
console.log(ukoly.toString())
ukolySize  = ukoly.push("Nakrmit kocku.");

console.log(ukolySize)
console.log(ukoly.toString())

ukoly.splice(1, 1, "Ovladnout svet");

var mePole = new Array();
var mePole = [4, 8, 15, 16, 23, 42];
var ovoce = ["jablko", "pomeranc"]
var kramy = [1, "jablko", undefined, 42, "tanky", null,[]]

var mePole = [];
mePole["ovoce"] = "jablko";
mePole["vozidlo"] = "tank";

mePole.push("test")