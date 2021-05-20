var storefront = document.getElementById("storefront");
var storefrontBakgrunn = document.getElementById("storefrontBakgrunn");
var prisShort = document.getElementById("pris");
var pengerShort = document.getElementById("penger");
var oppgraderFigur = document.getElementById("oppgraderFigur");
var oppgraderBakgrunn = document.getElementById("oppgraderBakgrunn");
var overskriftFigur = document.getElementById("overskriftFigur");

var henteRegistrerteLocal = registrerte;
console.log("du har så mye penger" + penger)

var penger = 1000;
var pris = 150;
var figurBakgrunn = 0;

var dineFargerArray = ["blue"]
var dinebakgrunnsfargerArray = ["grey"];
var oppgraderingsArray = [{
    farge: "red",
    navn: "Rød",
    pris: 50
}, {
    farge: "green",
    navn: "Grønn",
    pris: 150
}, {
    farge: "purple",
    navn: "Lilla",
    pris: 250
}, {
    farge: "orange",
    navn: "Orange",
    pris: 500
}];

var oppgraderingsArrayBakgrunn = [{
    farge: "red",
    navn: "Rød",
    pris: 50
}, {
    farge: "green",
    navn: "Grønn",
    pris: 150
}, {
    farge: "purple",
    navn: "Lilla",
    pris: 250
}, {
    farge: "orange",
    navn: "Orange",
    pris: 500
}];

fargeStorefront()
opptaterPrisOgPengerFigur()
bakgrunnsfargeStorfront()
opptaterPrisOgPengerBakgrunn()

function fargeStorefront() {
    console.log("we are in")
    storefront.style.backgroundColor = oppgraderingsArray[0].farge
}

function bakgrunnsfargeStorfront() {
    console.log("vi er inne i bakgrunnsfargen");
    storefrontBakgrunn.style.backgroundColor = oppgraderingsArrayBakgrunn[0].farge

}


function opptaterPrisOgPengerFigur() {
    oppgraderFigur.innerHTML = "oppgrader for: " + oppgraderingsArray[0].pris;
    pengerShort.innerHTML = penger;
}


function opptaterPrisOgPengerBakgrunn() {
    oppgraderBakgrunn.innerHTML = "oppgrader for: " + oppgraderingsArrayBakgrunn[0].pris;
    pengerShort.innerHTML = penger;
}



//gi allerede kjøpt til bruker 
function giTidligereKjøp() {
    console.log(loggetIn)
    if (loggetIn === true) {
        console.log("we are in")
        for (var i = 0; i < registrerte[brukerID].figur; i++) {
            nyFigurFarge()
        }
    } else if (loggetIn === true) { //denne er kun hvis brukeren klarer å klikke to ganger på log in før den forsvinner. Skjedde en gang når pcen min hang seg opp
        location.reload(); // da opptaterer siden seg og du blir logget ut
    }
}

///oppgrader figurfarge
oppgraderFigur.onclick = function () {
    if (penger > pris && oppgraderingsArray.length > 1) {
        //penger - pris;
        figurBakgrunn += 1;
        nyFigurFarge();
        opptaterPrisOgPengerFigur()
        fargeStorefront();
    } else if (oppgraderingsArray.length < 4) { //denne må oppdateres
        overskriftFigur.innerHTML = "Du har kjøpt alle oppgraderingene!"
    }


}


oppgraderBakgrunn.onclick = function () {
    if (penger > pris && oppgraderingsArrayBakgrunn.length > 1) {
        //penger
        document.getElementById("spillBakgrunn").style.backgroundColor = oppgraderingsArrayBakgrunn[0].farge;
        oppgraderingsArrayBakgrunn.shift();
        bakgrunnsfargeStorfront()
        opptaterPrisOgPengerBakgrunn()
    } else {

    }


}




function nyFigurFarge() {
    var figurFarger = document.getElementById("figurFarger");
    var option = document.createElement("option");
    option.text = oppgraderingsArray[0].navn;
    option.value = oppgraderingsArray[0].farge;
    figurFarger.add(option);
    console.log(figurFarger.value)
    oppgraderingsArray.shift();
}

//oppgrader bakgrunn 
