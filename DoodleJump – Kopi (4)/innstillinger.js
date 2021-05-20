var keyRange = document.getElementById("keyRange")
keyRange.oninput = function(){
    Hsensitivitet = Number(keyRange.value);
    console.log(keyRange.value);
    console.log(Hsensitivitet);
}