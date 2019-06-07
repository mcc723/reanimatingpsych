var totalDangers = 0;
var CorrectAns_True = 0;
var CorrectAns_False = 0;
var omissions = 0;
var errors = 0;
var startTime = 0;
var stopTime = 0;
var StartClicked = false;
var tutorialPassed = false;
var tutorialValue = 4;
var inGame = false;
var formCounter = 0;
var divTable_id = document.getElementById("divTable");
var table_id = document.getElementById("table");

function tutorial() {
    if (StartClicked == false){
        console.log("on load function");
        /*list of ids that need node-threat onload
        1-2, 2-3, 3-5, 4-3, 4-6, 5-1, 5-2, 5-5*/
        var nodeArray = ["1-2", "2-3", "3-1", "3-2", "3-5", "4-3", "4-6",
        "5-1", "5-2", "5-5", "6-0", "6-3"]
        nodeArray.forEach(item => document.getElementById(item).classList.add('node-threat'));
    }
};

$(document).ready(function(){
    //moves the position of the table to the top
    function moveTable(px) {
        var bottomTblPx = -165
        if (StartClicked == true){
            bottomTblPx = -1725
        }
        var top = 0;
        top = $('.divTable').position().top;
        var intPx = parseInt(px)
        result = top+px
        if (result < 1 && result > bottomTblPx){
            $('.divTable').css("top", result, "px");
        }
    }

    $(btnStart).bind('click', function(){
        $('.divTable').css("top", 0, "px");
    })

    $(btnDone).bind('click', function(){
        if (tutorialPassed == false) {
            console.log("done button pressed")
            console.log(tutorialValue);
            tutorial_p.innerHTML = "YOU HAVE NOT COMPLETED THE TUTORIAL! KEEP GOING"
            if (tutorialValue == 0){
                tutorial_p.innerHTML = "YOU HAVE SUCCESFULLY COMPLETED THE TUTORIAL" +
                "<br> PRESS START TO BEGIN";
                tutorialPassed = true;
                mode.innerHTML = "PRESS START"
            }
        }
    })
    
    $(document).keydown(function(e){
        if (e.keyCode == 80) {
            $('.divTable').css("top", 0, "px");
            if ((StartClicked == true) && (formCounter < 12)){
                formCounter++
                for (var i = 0; i < 25; i++){
                    if (window.currentForm.conditionsDanger[i] == true){
                        if (window.currentForm.userInputs[i] == true){
                            CorrectAns_True++;
                        }
                        else{ 
                            omissions++;
                        }
                    }
                    else{
                        if(window.currentForm.userInputs[i] == true){
                            errors++;
                        }
                        else{
                            CorrectAns_False++;
                        }
                    }
                }
                window.clearRedDots();
                window.initiate();
            }
            else {
                stopTime = Date.now();
                mode.innerHTML = "TEST COMPLETE"
                mode.classList.remove('blinking-text');
                var result = Math.floor((stopTime - startTime)/1000);
                var judgmentError = ((errors*10) + (omissions*10));
                var score = result + judgmentError;
                document.getElementById("breakdown").innerHTML = "Score breakdown: <br>" +
                "Errors: " + judgmentError.toString() + 
                "<br> + Time: " + result.toString() + "<br> = Score: " + score.toString();
                if (score < 350){
                    analysis.innerHTML = "astonishing performance";
                    excellent.classList.add('indicator-active')
                }
                else if (score < 550){
                    analysis.innerHTML = "your performance is fair";
                    fair.classList.add('indicator-active')
                }
                else{
                    analysis.innerHTML = "your performance was poor; you are unfit for service as a streetcar motorman"
                    poor.classList.add('indicator-active')
                }
            }
        }
    })

    $(document).keypress(function(e){
        console.log(e.keyCode)
        if (e.keyCode == 115) {
            for (var i = 0; i < 5; i++){
                moveTable(-1);
            }
        }
        if (e.keyCode == 119) {
            for (var i = 0; i < 5; i++){
                moveTable(1);
            }
        }
    })
});

function form() {
    this.conditionsDanger = new Array();
    this.userInputs = new Array(26).fill(false);
}

condition0.addEventListener('click', function() {
    if (StartClicked == true){
        if (currentForm.userInputs[0] == true){
            condition0.classList.remove('dot-clicked');
            currentForm.userInputs[0] = false;
        }
        else{
            condition0.classList.add('dot-clicked');
            currentForm.userInputs[0] = true;
        }
    }
})

condition1.addEventListener('click', function() {
    if (StartClicked == true){
        if (currentForm.userInputs[1] == true){
            condition1.classList.remove('dot-clicked');
            currentForm.userInputs[1] = false;
        }
        else{
            condition1.classList.add('dot-clicked');
            currentForm.userInputs[1] = true;
        }
    }
    else{
        condition1.classList.add('dot-clicked');
        tutorialValue--;
    }
})

condition1.addEventListener('mouseover', function() {
    if (StartClicked == false) {
        document.getElementById("1-2").classList.add('blinking');
    }
})

condition1.addEventListener('mouseleave', function(){
    if (StartClicked == false) {
        document.getElementById("1-2").classList.remove('blinking')
    }
})

condition2.addEventListener('click', function() {
    if (StartClicked == true){
        if (currentForm.userInputs[2] == true){
            condition2.classList.remove('dot-clicked');
            currentForm.userInputs[2] = false;
        }
        else{
            condition2.classList.add('dot-clicked');
            currentForm.userInputs[2] = true;
        }
    }
})

condition3.addEventListener('click', function() {
    if (StartClicked == true){
        if (currentForm.userInputs[3] == true){
            condition3.classList.remove('dot-clicked');
            currentForm.userInputs[3] = false;
        }
        else{
            condition3.classList.add('dot-clicked');
            currentForm.userInputs[3] = true;
        }
    }
})

condition4.addEventListener('click', function() {
    if (StartClicked ==true){
        if (currentForm.userInputs[4] == true){
            condition4.classList.remove('dot-clicked');
            currentForm.userInputs[4] = false;
        }
        else{
            condition4.classList.add('dot-clicked');
            currentForm.userInputs[4] = true;
        }
    }
    else{
        condition4.classList.add('dot-clicked');
        tutorialValue--;
    } 
})

condition4.addEventListener('mouseover', function(){
    if (StartClicked == false){
        document.getElementById("4-6").classList.add('blinking');
    }
})

condition4.addEventListener('mouseleave', function(){
    if (StartClicked == false){
        document.getElementById("4-6").classList.remove('blinking');
    }
})

condition5.addEventListener('click', function() {
    if (tutorialPassed ==true){
        if (currentForm.userInputs[5] == true){
            condition5.classList.remove('dot-clicked');
            currentForm.userInputs[5] = false;
        }
        else{
            condition5.classList.add('dot-clicked');
            currentForm.userInputs[5] = true;
        }
    }
    else{
        condition5.classList.add('dot-clicked');
        tutorialValue--;
    } 
})

condition5.addEventListener('mouseover', function(){
    if (StartClicked == false){
        document.getElementById("5-5").classList.add('blinking');
    }
})

condition5.addEventListener('mouseleave', function(){
    if (StartClicked == false){
        document.getElementById("5-5").classList.remove('blinking');
    }
})

condition6.addEventListener('click', function() {
    if (tutorialPassed ==true){
        if (currentForm.userInputs[6] == true){
            condition6.classList.remove('dot-clicked');
            currentForm.userInputs[6] = false;
        }
        else{
            condition6.classList.add('dot-clicked');
            currentForm.userInputs[6] = true;
        }
    }
    else{
        condition6.classList.add('dot-clicked');
        tutorialValue--;
    } 
})

condition6.addEventListener('mouseover', function(){
    if (StartClicked == false){
        document.getElementById("6-3").classList.add('blinking');
    }
})

condition6.addEventListener('mouseleave', function(){
    if (StartClicked == false){
        document.getElementById("6-3").classList.remove('blinking');
    }
})

condition7.addEventListener('click', function() {
    if (currentForm.userInputs[7] == true){
        condition7.classList.remove('dot-clicked');
        currentForm.userInputs[7] = false;
    }
    else{
        condition7.classList.add('dot-clicked');
        currentForm.userInputs[7] = true;
    }
})

condition8.addEventListener('click', function() {
    if (currentForm.userInputs[8] == true){
        condition8.classList.remove('dot-clicked');
        currentForm.userInputs[8] = false;
    }
    else{
        condition8.classList.add('dot-clicked');
        currentForm.userInputs[8] = true;
    }
})

condition9.addEventListener('click', function() {
    if (currentForm.userInputs[9] == true){
        condition9.classList.remove('dot-clicked');
        currentForm.userInputs[9] = false;
    }
    else{
        condition9.classList.add('dot-clicked');
        currentForm.userInputs[9] = true;
    }
})

condition10.addEventListener('click', function() {
    if (currentForm.userInputs[10] == true){
        condition10.classList.remove('dot-clicked');
        currentForm.userInputs[10] = false;
    }
    else{
        condition10.classList.add('dot-clicked');
        currentForm.userInputs[10] = true;
    }
})

condition11.addEventListener('click', function() {
    if (currentForm.userInputs[11] == true){
        condition11.classList.remove('dot-clicked');
        currentForm.userInputs[11] = false;
    }
    else{
        condition11.classList.add('dot-clicked');
        currentForm.userInputs[11] = true;
    }
})

condition12.addEventListener('click', function() {
    if (currentForm.userInputs[12] == true){
        condition12.classList.remove('dot-clicked');
        currentForm.userInputs[12] = false;
    }
    else{
        condition12.classList.add('dot-clicked');
        currentForm.userInputs[12] = true;
    }
})

condition13.addEventListener('click', function() {
    if (currentForm.userInputs[13] == true){
        condition13.classList.remove('dot-clicked');
        currentForm.userInputs[13] = false;
    }
    else{
        condition13.classList.add('dot-clicked');
        currentForm.userInputs[13] = true;
    }
})

condition14.addEventListener('click', function() {
    if (currentForm.userInputs[14] == true){
        condition14.classList.remove('dot-clicked');
        currentForm.userInputs[14] = false;
    }
    else{
        condition14.classList.add('dot-clicked');
        currentForm.userInputs[14] = true;
    }
})

condition15.addEventListener('click', function() {
    if (currentForm.userInputs[15] == true){
        condition15.classList.remove('dot-clicked');
        currentForm.userInputs[15] = false;
    }
    else{
        condition15.classList.add('dot-clicked');
        currentForm.userInputs[15] = true;
    }
})

condition16.addEventListener('click', function() {
    if (currentForm.userInputs[16] == true){
        condition16.classList.remove('dot-clicked');
        currentForm.userInputs[16] = false;
    }
    else{
        condition16.classList.add('dot-clicked');
        currentForm.userInputs[16] = true;
    }
})

condition17.addEventListener('click', function() {
    if (currentForm.userInputs[17] == true){
        condition17.classList.remove('dot-clicked');
        currentForm.userInputs[17] = false;
    }
    else{
        condition17.classList.add('dot-clicked');
        currentForm.userInputs[17] = true;
    }
})

condition18.addEventListener('click', function() {
    if (currentForm.userInputs[18] == true){
        condition18.classList.remove('dot-clicked');
        currentForm.userInputs[18] = false;
    }
    else{
        condition18.classList.add('dot-clicked');
        currentForm.userInputs[18] = true;
    }
})

condition19.addEventListener('click', function() {
    if (currentForm.userInputs[19] == true){
        condition19.classList.remove('dot-clicked');
        currentForm.userInputs[19] = false;
    }
    else{
        condition19.classList.add('dot-clicked');
        currentForm.userInputs[19] = true;
    }
})

condition20.addEventListener('click', function() {
    if (currentForm.userInputs[20] == true){
        condition20.classList.remove('dot-clicked');
        currentForm.userInputs[20] = false;
    }
    else{
        condition20.classList.add('dot-clicked');
        currentForm.userInputs[20] = true;
    }
})

condition21.addEventListener('click', function() {
    if (currentForm.userInputs[21] == true){
        condition21.classList.remove('dot-clicked');
        currentForm.userInputs[21] = false;
    }
    else{
        condition21.classList.add('dot-clicked');
        currentForm.userInputs[21] = true;
    }
})

condition22.addEventListener('click', function() {
    if (currentForm.userInputs[22] == true){
        condition22.classList.remove('dot-clicked');
        currentForm.userInputs[22] = false;
    }
    else{
        condition22.classList.add('dot-clicked');
        currentForm.userInputs[22] = true;
    }
})

condition23.addEventListener('click', function() {
    if (currentForm.userInputs[23] == true){
        condition23.classList.remove('dot-clicked');
        currentForm.userInputs[23] = false;
    }
    else{
        condition23.classList.add('dot-clicked');
        currentForm.userInputs[23] = true;
    }
})

condition24.addEventListener('click', function() {
    if (currentForm.userInputs[24] == true){
        condition24.classList.remove('dot-clicked');
        currentForm.userInputs[24] = false;
    }
    else{
        condition24.classList.add('dot-clicked');
        currentForm.userInputs[24] = true;
    }
})

condition25.addEventListener('click', function() {
    if (currentForm.userInputs[25] == true){
        condition25.classList.remove('dot-clicked');
        currentForm.userInputs[25] = false;
    }
    else{
        condition25.classList.add('dot-clicked');
        currentForm.userInputs[25] = true;
    }
})

//removes the dot-clicked css code from all buttons
function clearRedDots() {
    var conditionArray = [...Array(26).keys()];
    conditionArray.forEach(item => removeDotClicked(item));
    function removeDotClicked(item){
        id = "condition" + item
        document.getElementById(id).classList.remove("dot-clicked");
    }
}

btnStart.addEventListener('click', function() {
    if (window.StartClicked == false) {
        formCounter++;
        var conditionArray = [...Array(26).keys()];
        startTime = Date.now();
        window.StartClicked = true;
        console.log(StartClicked)
        window.clearRedDots();
        window.initiate();
        mode.innerHTML = "IN TEST";
        mode.classList.add('blinking-text');
        tutorial_p.innerHTML = "";
    }   
})

function initiate() {
    currentForm = new form();
    var totalDangers = 0;
    for (var i = 0; i < 26; i++) {
        var con1 = new condition();
        var btnid = "condition" + i.toString();
        var charCode = 65 + i;
        document.getElementById(btnid).innerHTML = String.fromCharCode(charCode)
        //console.log("condition " + i + " is dangerous?" + con1.isDanger);
        currentForm.conditionsDanger[i] = con1.isDanger;
        for (var j = 0; j < 8; j++){
            //con1 random number @ j
            var randNum = con1.nodes[j].num
            var id = i.toString() + "-" + j.toString()
            document.getElementById(id).classList.remove('node-threat');
            document.getElementById(id).classList.add('node-none-threat');
            document.getElementById(id).innerHTML = randNum;
            //Add red color to specific element id
            var isThreat = con1.nodes[j].threat
            if (isThreat == true) {
                document.getElementById(id).classList.add('node-threat');
            }
        }
    }

}

function node() {
    this.num = Math.floor(Math.random() * 3) + 1
    var num = Math.floor(Math.random() * 3)
    if (num == 0){
        this.threat = true
    }
    else {
        this.threat = false
    }
}

function condition() {
    this.isDanger = false;
    this.nodes = new Array();    
    for (var i = 0; i < 8; i++) {
        this.nodes[i] = new node();
        if (this.isDanger != true){
            if (this.nodes[i].threat == true) {
                if (this.nodes[i].num==1 && (i==3||i==4)) {
                    this.isDanger = true;
                }
                if (this.nodes[i].num==2 && (i==2||i==5)) {
                    this.isDanger = true;
                }
                if (this.nodes[i].num==3 && (i==1||i==6)) {
                    this.isDanger = true;
                }
            }
        }
    }
}
