function test01() {
    var Projekt = Projekt || {};
    Projekt.Nastroje = {};

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
    ukolySize = ukoly.push("Nakrmit kocku.");

    console.log(ukolySize)
    console.log(ukoly.toString())

    ukoly.splice(1, 1, "Ovladnout svet");

    var mePole = new Array();
    var mePole = [4, 8, 15, 16, 23, 42];
    var ovoce = ["jablko", "pomeranc"]
    var kramy = [1, "jablko", undefined, 42, "tanky", null, []]

    var mePole = [];
    mePole["ovoce"] = "jablko";
    mePole["vozidlo"] = "tank";

    mePole.push("test")

    var profil = {
        krestniJmeno: "Hugo",
        prijemni: "Chovanec",
        auto: "Chevrolet"
    };

    console.log(profil[0])
    console.log(profil["krestniJmeno"])
    console.log(profil.krestniJmeno)

    osoba = {};
    osoba.jmeno = {};
    osoba.jmeno.krestni = "Hugo";
    osoba.jmeno.prijemni = "Reyes";
    console.log(osoba.toString())

    function pozdrav(message) {
        console.log(message);
    }

    function celeJmeno() {
        var krestniJmeno = "Hugo";

        function vypisCeleJmeno() {
            var prijmeni = "Reyes";

            console.log("Cele jmeno: " + krestniJmeno + " " + prijmeni);
        }

        vypisCeleJmeno();
    }

    var data = {
        krestniJmeno: "James",
        prijemni: "Kirk",
        povolani: {
            nazev: "Hvezdna log",
            pozice: "kapitan"
        }
    }

    for (klic in data) {
        if (data.hasOwnProperty(klic)) {
            console.log(klic + " je " + data[klic])
        }
    }

    celeJmeno();


    // console.log(document.getElementById.toString());
    console.log(celeJmeno.toString());
}

var getCelkovyPocetUkolu = function () {
    var pocetUkoluJana = 11,
        pocetUkoluJany = "42";

    return pocetUkoluJana + pocetUkoluJany;
}

function createSpanDateTimeIsoTest() {
    var el = document.createElement("span");

    el.appendChild(document.createTextNode("Cas narozeni: 17.kvetna 1976, 5:11"));
    el.dataset.iso = "1976-05-17T17:11:12";
    console.log(el.dataset.iso);

    return el;
}

function setTestClassLinks(obj) {
    if ($(obj).hasClass("test")) {
        $(obj).removeClass("test");
    } else {
        $(obj).addClass("test");
    }
}

// var buttons = document.getElementsByClassName("btn");
// for(var btn in buttons) {
//     btn.onclick = function(e) {
//         console.log(this);
//     }
// }