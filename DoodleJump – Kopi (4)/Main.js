var spillBakgrunn = document.getElementById("spillBakgrunn");
var overskriftMeny = document.getElementById("overskriftMeny")
var poengDisplay = document.getElementById("poengDisplay");
var doodler = document.createElement("div");
var startShort = document.getElementById("start")
var doodlerVenstreAvstand = 50;
var startpunkt = 100
var doodlerBunnAvstand = startpunkt;
var antPlattformer = 5;
var gameOver = true;
var plattBunn = 0;
var plattformer = [];
var hoppeTid
var nedTid
var bevegeplattformIntervall
var figurHopper = true
var figurBevegelseVenstre = false;
var figurBevegelseHoyre = false;
var figurVenstreTid
var figurHoyreTid
var poeng = 0;
var highscore = 0;
var plattformLengde
var doodlerLengde = 60;
var spillertid = 0;
var Hsensitivitet = 3;


startmeny();


if (window.width < 600) { //denne funksjonen forteller om du har for liten skjerm til å få plass til alt på. 
    alert("Du har for liten skjerm") // skriver alerten du har for liten skjerm 

}


function lagDoodler() { //denne funksjonen lager doodleren
    console.log("Dette er en doodler"); //skriver i console log at en lager doodleren 
    console.log("Dette er resulution:" + screen.width) //Skriver antall pixler vidde for utviklerformål 
    spillBakgrunn.appendChild(doodler); //legger doodler elementet i i diven spillbakgrunn
    doodler.classList.add("doodler");
    doodler.id = "doodlertest";//legger doodler i classen doodler    
    //doodler.id = "doodlertest"; //Ikke i bruk, men var visst en trengte en id også
    console.log("Figuren er laget")//skriver i consolen at den har laget figuren 
    //plassere figuren der den første plattformen er
    
    //For å plassere figuren oppå første plattformen gjør vi slik 
    doodlerVenstreAvstand = plattformer[0].left; //setter variabelen doodlerVenstre avstand til den nederste plattformen sin venstre avstand
    doodler.style.left = doodlerVenstreAvstand + "px"; //setter så doodler sin avstand til venstre til doodlerVenstreAvstand
    doodler.style.bottom = doodlerBunnAvstand + "px"; //setter doodler avstanden til doodlerBunnAvstand som er definert til 100, 
    document.getElementById("doodlertest").style.backgroundColor = figurFarger.value; // setter fargen til den fargen brukeren har valgt 
 
}



//her lager vi funksjonen som forteller hvor plattformen skal være

class Plattform {
    constructor(nyPlattformBunn) { //bruker funksjonen constructor med nyPlattformBunn fra lagplattform 
        this.bottom = plattBunn; //den plattformbunnen til plattBunn som blir definert i lagplattformer()
        this.left = Math.random() * 315; //setter lengden fra venstre til random mellom 0 og 315, 315 + 85 som er lengden på figuren er 400 som er vidden på banen
        this.plattUtseende = document.createElement("div"); //lager en div 
        //this.visual = document.createElement("div");

        var plattUtseende = this.plattUtseende; //setter plattformutseende til den plattformen som vi lager sitt utseende
        plattUtseende.classList.add('plattform'); //legger til plattformen inn i classen plattform
        plattUtseende.style.left = this.left + "px"; //legger den inn i lengden venstre
        plattUtseende.style.bottom = this.bottom + "px"; //setter lengden til bunnen til plattbunn egentlig som er definert helt øverst
        spillBakgrunn.appendChild(plattUtseende); //legger plattformen inn i spillbakgrunn diven som er banen vår
        //console.log(test);



    }
}

function lagPlattformer() {
    for (var i = 0; i < antPlattformer; i++) { //lager anall plattformer som er definert
        var plattformAvstand = 600 / antPlattformer; //Lager plattformavstand 600 eller vidden delt på antall plattformer blir gjevnt mellomrom
        //var nyPlattformBunn = 100 + i * plattformAvstand;
        plattBunn = 100 + i * plattformAvstand; //her setter vi plattbunn til 100 * den plattformen vi snakker om * plattformavstand
        var nyPlattform = new Plattform(); //nyplattform lager ny plattform i funksjonen plattform som har en constructor som gjør at det blir laget en til plattform 
        console.log(plattBunn);
        plattformer.push(nyPlattform); //legger inn plattformene 


    }
}


//bevege plattformene
function bevegPlattformer() {  //vi starter funksjonen
    console.log("vi beveger oss")//skriver i console vi beveger oss
    if (doodlerBunnAvstand > 200 && doodlerBunnAvstand < 300) { //når figuren er mellom større enn 200, men mindre enn 300 så skal det under skje
        plattformer.forEach(plattform => { //for hver av plattformene
            plattform.bottom -= 3; //synker med 3 
            var plattUtseende = plattform.plattUtseende; //setter plattutseende som plattform sin plattutseende altså i funksjonen plattform
            plattUtseende.style.bottom = plattform.bottom + "px"; //setter plattutseende til stilen til plattformen til plattform.bottom 


            if (plattform.bottom < 10) { //hvis det er mindre enn 10 fra plattform bunn, altså at den har truffet bakken
                var forstePlattform = plattformer[0].plattUtseende; //setter variabelen førsteplattform til den første plattformen i arrayen, eller den som er truffet bakken
                forstePlattform.classList.remove("plattform");//fjerner så denne fra classen
                plattformer.shift();//så fjerner vi den fra arrayet
                var nyPlattform = new Plattform(600); // lager ny plattform på toppen (600)
                plattformer.push(nyPlattform) //pusher den så inn i arrayet 
                poengPluss(); //Kjører også funksjoen poengPluss
            }

        })
    } else if (doodlerBunnAvstand > 300 ) { //hvis doodleren er mer enn 300 over så skjer akkuratt det samme bare med -8 istedenfor -3
        plattformer.forEach(plattform => {
            plattform.bottom -= 8;
            var plattUtseende = plattform.plattUtseende;
            plattUtseende.style.bottom = plattform.bottom + "px";


            if (plattform.bottom < 10) {
                var forstePlattform = plattformer[0].plattUtseende;
                forstePlattform.classList.remove("plattform");
                plattformer.shift();
                var nyPlattform = new Plattform(600);
                plattformer.push(nyPlattform)
                poengPluss();
            }

        })

    }
}


//denne setter poengene pengene og highscoren
function poengPluss() {
    poeng = poeng + 1; //setter poengene til poeng + 1
    penger += 1; //setter penger til penger + 1 skrevet på to ulike måter for vise kunnskap, de fungerer helt likt
    if (poeng > highscore) {//hvis poengen er større en highscoren så enrer en highscore til poengene. 
        highscore = poeng;
        henteRegistrerteLocal[brukerID].toppscore = highscore;
    }
    visPoeng() //kjører funsksjonen visPoeng
    console.log(poeng)
    console.log("Dette er toppscoren til brukeren: " + henteRegistrerteLocal[brukerID].toppscore);
}


function visPoeng() {
    document.getElementById("poengDisplay").innerHTML = "Poeng: " + poeng + " Highscore: " + highscore;//oppdaterer vispoeng 
    pengerShort.innerHTML = "Money: " + penger;
} 


//funksjonen for å få figuren til å hoppe
function hopp() { 
    console.log("Vi hopper") //skriver til consolet "Vi hopper"
    clearInterval(nedTid); //stopper intervallet (nedTid) som er det inervallet som startes når den faller
    figurHopper = true; //setter figurHopper til sant //kun til utviklermuligheter slik at jeg lettere kunne finne ut når den hoppet og når den falt
    hoppeTid = setInterval(function () { //starter variabelen hoppetid som er bruker en set intervall funksjon. Hvert 30 millisekund så hopper den 20 
        doodlerBunnAvstand += 20;
        doodler.style.bottom = doodlerBunnAvstand + "px"; //setter det om til px og til stilen
        if (doodlerBunnAvstand > startpunkt + 200) // når den har hoppet 200 px, så skal den falle 
        {
            fall() //kjører funksjonen fall()
            console.log("truffet") //skriver også console log(truffet)
        }
    }, 30);
    
}

function fall() { //funksjonen for fall 
    clearInterval(hoppeTid); //vi stopper intervallet hopptid som vi finner i funksjonen hopp()
    figurHopper = false; //vi setter også figurhopper til false (utviklerhjelp)
    nedTid = setInterval(function () {  //setter variabelen nedtid til intervallet doodlerBunnAvstand = doodlerAvstand - 8 
        doodlerBunnAvstand = doodlerBunnAvstand - 8; 
        doodler.style.bottom = doodlerBunnAvstand + "px"; //legger det inn i funksjonen 

        if (doodlerBunnAvstand <= 0) { //hvis doodleren har truffet bakken så kjører jeg funksjonen spillslutt();
            spillSlutt()
        }

        plattformer.forEach(plattform => { //for hver av plattformene
            if ( //hvis plattform den treffer en av plattformene så skal den kjøre det under
                (doodlerBunnAvstand >= plattform.bottom) &&
                (doodlerBunnAvstand <= plattform.bottom + 15) &&
                ((doodlerVenstreAvstand + doodlerLengde) >= plattform.left) &&
                ((doodlerVenstreAvstand) <= plattform.left + 85)
            ) {
                console.log("landet")//skriver til console at "landet"
                startpunkt = doodlerBunnAvstand; //setter startpunkt til doodlerbunnavstand 
                hopp()  // så kjører den funksjonen hopp()
            }
        })

    }, 30) //dette gjør den altså hvert 30 millisekund 
}


//denne er en timer som gjør at vi kan holde kontroll på hvor lenge en spiller har spillt.
function timerstart() {
    setInterval(function () { //dette gjør den hvert sekund
        spillertid += 1;
        console.log(spillertid);
    }, 1000);
}


//Dette er funksjonen som skjekker om du har trykket på piltastene. 


document.onkeydown = function (e) { //
    switch (e.keyCode) { //hvis du trykker på venstre 
        case 37: //som er case 37, hentet fra w3 schools
            console.log('venstre pil trykket');  //console log venstre pil trykket 
            flyttVenstre(); //så kjør funksjonen flytt venstre
            //figur.xpos = figur.xpos - 10;

            //tegnFigur();
            break;// stopper switchen slik at den ikke går videre
        case 39:
            console.log("høyre pil trykket"); //akkuratt det samme bare med høyre piltast
            flyttHoyre()
            break;

    }
}
//denne funksjonen flytter funksjonen til venstre
function flyttVenstre() {
    if (figurBevegelseHoyre = true) {//hvis den allerede beveger seg til høyre så stopper vi intervallene både venstre og høyre. Hvis ikke du tar høyre så åpner du for en bug som gjør at figuren rister mer og mer "parkingson"
        clearInterval(figurHoyreTid);
        clearInterval(figurVenstreTid);
        figurBevegelseHoyre = false; //setter også variabelen figBeHo til false
    }
    figurBevegelseVenstre = true; //så setter vi variabelen FigBevegVenstre til true
    figurVenstreTid = setInterval(function () { //vi starter intervallet figurvenstretid
        if (doodlerVenstreAvstand >= 0) { //hvis vi beveger doodlerVenstreAvstand er mindre enn 0 altså at vi går i sideveggene så skal dette skje
            doodlerVenstreAvstand = doodlerVenstreAvstand - (Hsensitivitet); //stopper slik at den ikke går noen plass
            doodler.style.left = doodlerVenstreAvstand + "px"; //gjør det om til px og legger det inn
       //     console.log(doodlerVenstreAvstand)
        } else {
            doodlerVenstreAvstand = doodlerVenstreAvstand + Hsensitivitet; //endrer hvor den går med så mye som en har stilt inn i sensitiviteten. 
        }
        //console.log("beveger seg venstre")
    }, 15)
}

function flyttHoyre() {
    if (figurBevegelseVenstre = true) {
        clearInterval(figurVenstreTid);
        clearInterval(figurHoyreTid);
        figurBevegelseVenstre = false;
    }
    figurBevegelseHoyre = true;
    figurHoyreTid = setInterval(function () {
        if (doodlerVenstreAvstand <= (400 - doodlerLengde)) {
            doodlerVenstreAvstand = doodlerVenstreAvstand + Hsensitivitet;
            doodler.style.left = doodlerVenstreAvstand + "px";
            //console.log(doodlerVenstreAvstand)
        } else {
            doodlerVenstreAvstand = doodlerVenstreAvstand - Hsensitivitet;
        }
        //console.log("beveger seg høyre")
    }, 15)
}


function start() {
    if (gameOver == false) {
        lagPlattformer();
        lagDoodler();
       clearInterval(hoppeTid);
        clearInterval(nedTid);
        bevegeplattformIntervall = setInterval(function () {
            bevegPlattformer();
            console.log("vi kjører loopen")
        } , 30)
        
        //bevegPlattformer();
        hopp();
        startmeny()
}
    
}

startKnapp.onclick = function () {
    gameOver = false
    
    start();
    
}


function spillSlutt() {
    startmeny();
    startpunkt = 100
    overskriftMeny.innerHTML = "Game over. Du fikk " + poeng + " poeng"
    gameOver = true;
    console.log("game over")
    clearInterval(nedTid); //stopper doodleren
    clearInterval(figurHoyreTid);
    clearInterval(figurVenstreTid);
    console.log(brukerID)
    console.log("dette er antall plattformer" + plattformer.length);
    for (var i = 0; i < plattformer.length + 4; i++) {
        console.log("sletter i vei")
        var forstePlattform = plattformer[0].plattUtseende; //resirkulert kode fra det oppe// putte det inn i en function?
        forstePlattform.classList.remove("plattform");
        plattformer.shift();
        console.log("sletter i vei")  
        
    }
    while (spillBakgrunn.firstChild) {
    spillBakgrunn.removeChild(spillBakgrunn.lastChild);
  }
    
    console.log("Vi har stoppet loopen");
    clearInterval(bevegeplattformIntervall);
    clearInterval(hoppeTid);
    clearInterval(nedTid);
    
    
   
    if (loggetIn === true) {
        var henteRegistrerteLocal = HentInfo();
        henteRegistrerteLocal[brukerID].toppscore = highscore;
        henteRegistrerteLocal[brukerID].Tid += spillertid;
        console.log(henteRegistrerteLocal)
    }
    poeng = 0;
    visPoeng();
    sortSpillere()
    console.log(spillertid)
    console.log(henteRegistrerteLocal)
    console.log(brukerID);
    




}



////





function startmeny(){
    if(gameOver === true){
        startShort.style.display = "block";
        console.log("Dette fungerer som en stjerne");
        //var annimasjon = startShort.animate(@keyframes Bevegstartmeny, Infinity); 
    }
    if(gameOver === false){
        startShort.style.display = "block";
        console.log("Dette fungerer som en stjerne");
        //var annimasjon = startShort.animate(@keyframes Bevegstartmeny, Infinity); 
    }
}



