var loggetIn = false;
var leaderboard = document.getElementById("leaderboard")
//var henteRegistrerteLocal = HentInfo();
//HentInfo();
var registretelagret
skrivtabell();
//var registrerteBrukere
//lagreInfo(registrerte);


var registrerte = [{

        navn: "henrik",

        Pass: "Passord123",

        toppscore: 1,

        Tid: 40,

        figur: 2,
        
        money: 100

    },

    {

        navn: "henrik2",

        Pass: "Passord123",

        toppscore: 5,

        Tid: 40,

        figur: 2,
        
        money: 100

    },

    {

        navn: "henrik3",

        Pass: "Passord123",

        toppscore: 5,

        Tid: 40,

        figur: 2,
        
        money: 100

    },

    {

        navn: "henrik4",

        Pass: "Passord123",

        toppscore: 5,

        Tid: 40,

        figur: 2,
        
        money: 100

    },

    {

        navn: "Harald",

        Pass: "Pass",

        toppscore: 5,

        Tid: 40,

        figur: 0,
        
        money: 100

    }, 

];

    

    

    //her kommer alle brukerne til å legges inn

console.log(registrerte[0].navn); //for å teste at det fungerte 

 

var brukerID

 

document.getElementById("logOut").style.display = "none";

 

logIn.onclick = function () { //når du klikker login

    logInFunksjon(); // kjør funksjonen logInFunksjon

    

}

signIn.onclick = function () {

    var henteRegistrerteLocal = HentInfo();
    //var brukernavnLowercase = brukernavn.value.toLowerCase;
    console.log(brukernavn.value)

    henteRegistrerteLocal.push({

        navn: brukernavn.value,

        Pass: passord.value,

        toppscore: 0,

        Tid: 0,

        figur: 0,
        
        money: 0

    }) //må passe på at det ikke er noen der tidligere

 
    
    brukerID = henteRegistrerteLocal.length;
    
    console.log("Sign in", henteRegistrerteLocal)
    lagreInfo(henteRegistrerteLocal);
    //HentInfo()
    logInFunksjon()
    

}
 

function logInFunksjon() { //funksjonen som logger inn

    var henteRegistrerteLocal = HentInfo();

    for (var i = 0; i < henteRegistrerteLocal.length; i++) {

        if (henteRegistrerteLocal[i].navn === brukernavn.value && henteRegistrerteLocal[i].Pass === passord.value) {

            console.log("succsess");

            brukerID = i;

            timerstart();

            loggetIn = true; 

            
            console.log("funksjonen er over ieqwrjmfoewrnkgjn34wriedfjngljtrefdgblkjverfndvbeldfkjgvnm dfkljvbnm fjkldgnm,v");
            logutVis()
            
            giTidligereKjøp();

            // lagreInfo();

            

        } 

    }

    if(loggetIn === false){

        alert("obs")

    }

}

    

    console.log(brukernavn.value + passord.value)

 



 

//funksjon som sorterer spillerne 

function sortSpillere() {
var henteRegistrerteLocal = HentInfo();
    
    henteRegistrerteLocal.sort((a, b) => {

        return b.toppscore - a.toppscore;

    });
    
    opptaterTabell()

}

 



 

//leaderboard 

 

function opptaterTabell(){
var henteRegistrerteLocal = HentInfo();
    for(var i = 0; i < 4; i++){
    leaderboard.removeChild(leaderboard.lastChild);
        
    }
    var lagTROverskrift = document.createElement("TR");
    lagTROverskrift.setAttribute("id", "leaderRow" + henteRegistrerteLocal[i].navn);

    document.getElementById("leaderboard").appendChild(lagTROverskrift)
    
    skrivtabell()
    

}

 

//fikse var document.get forkortelse under

 
function skrivtabell(){ 
    var henteRegistrerteLocal = HentInfo();
    //var henteRegistrerteLocal = HentInfo();

for (var i = 0; i < 4; i++) {

    var lagTR = document.createElement("TR");

    lagTR.setAttribute("id", "leaderRow" + henteRegistrerteLocal[i].navn);

    document.getElementById("leaderboard").appendChild(lagTR)

 

    //plassering 

    var LagTDPlassering = document.createElement("TD");

    LagTDPlassering.setAttribute("id", "LagTDPlassering" + henteRegistrerteLocal[i].navn);

    var LagPlasseringTekst = document.createTextNode(i + 1);

    LagTDPlassering.appendChild(LagPlasseringTekst);

    document.getElementById("leaderRow" + henteRegistrerteLocal[i].navn).appendChild(LagTDPlassering);

    //brukernavn

    var LagTDBrukernavn = document.createElement("TD");

    LagTDBrukernavn.setAttribute("id", "LagTDBrukernavn" + henteRegistrerteLocal[i].navn);

    var LagBrukernavnTekst = document.createTextNode(henteRegistrerteLocal[i].navn);

    LagTDBrukernavn.appendChild(LagBrukernavnTekst);

    document.getElementById("leaderRow" + henteRegistrerteLocal[i].navn).appendChild(LagTDBrukernavn);

    //topscore

    var LagTDPoeng = document.createElement("TD");

    LagTDPoeng.setAttribute("id", "LagTDPoeng" + henteRegistrerteLocal[i].navn);

    var LagBrukernavnTekst = document.createTextNode(henteRegistrerteLocal[i].toppscore);

    LagTDPoeng.appendChild(LagBrukernavnTekst);

    document.getElementById("leaderRow" + henteRegistrerteLocal[i].navn).appendChild(LagTDPoeng);

    //tid

    var LagTDTid = document.createElement("TD");

    LagTDTid.setAttribute("id", "LagTDTid" + henteRegistrerteLocal[i].navn);

    var LagBrukernavnTekst = document.createTextNode(henteRegistrerteLocal[i].Tid);

    LagTDTid.appendChild(LagBrukernavnTekst);

    document.getElementById("leaderRow" + henteRegistrerteLocal[i].navn).appendChild(LagTDTid);

 

}
}
 

//Her skal jeg lagre infoen 

function lagreInfo(nyeregistrerte) {

    //

    //// Legge et array inni localstorage

    console.log("lagrer info")

    //gjør arrayet om til string

    var JSONregistrerte = JSON.stringify(nyeregistrerte);

    console.log("JSON " + JSONregistrerte);

 

    //lagrer string i localStorage med nøkkel

    localStorage.setItem("registrerteArrayNøkkel", JSONregistrerte);

}

//

//// Hente Rekordene

//

function HentInfo() {

    if(localStorage.getItem("registrerteArrayNøkkel") === null){ 

        console.log("vi lagrer");

        lagreInfo(registrerte);

    } 

    //først hente ut arrayet med nøkkel fra localStorage

    var regestrerteText = localStorage.getItem("registrerteArrayNøkkel");

    //console.log(regestrerteText);

    //gjør string om til Array

    var registrertelagret = JSON.parse(regestrerteText);

    console.log("Dette er det lagrete" + registrertelagret);

 

    //rekordArray er nå det ferdige arrayet

    return(registrertelagret);
    
    registrerteBrukere = registrertelagret;

}

 

//Log ut funksjon 

 

//var logInEnhet = document.getElementsByClassName("logInEnhet");

 

function logutVis(){

    document.getElementById("brukernavn").style.display = "none";

    document.getElementById("passord").style.display = "none";

    document.getElementById("logIn").style.display = "none";

    document.getElementById("signIn").style.display = "none";

    document.getElementById("logOut").style.display = "block";

     

}

 

logOut.onclick = function(){

    location.reload();

}