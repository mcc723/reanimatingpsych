var btnStart = document.getElementById("btnStart")

btnStart.addEventListener('click', function() {
    console.log("start button clicked");

    console.log("initiating civ object...")
    var card = new situation()
    card.civ
})

function civ(num, color) {
    this.num = Math.floor(Math.random() * 4) + 1
    this.color = Math.floor(Math.random() * 2)
}

function situation() {
    this.civs = new Array()
    this.danger = false
    this.userInput = false
    for (var i = 0; i < 8; i++) {
        this.civs[i] = new civ()
        console.log(this.civs[i])
    }
}

/*
situation.prototype.printCivs = function(){
    var StrCivs = "";
    for (var i = 1; i < 8; i++){
        StrCivs += situation.civ[i]
    }
    console.log(StrCivs)
}
*/






