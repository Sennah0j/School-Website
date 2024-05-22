document.getElementById('check-1');
var turnsLeft = '3';
const dices = [1, 1, 1, 1, 1];
const play1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const play1Check = [false, false , false, false, false, false, false, false , false, false, false, false, false];
const play2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const play2Check = [false, false , false, false, false, false, false, false , false, false, false, false, false];

const tempPlay1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const tempPlay2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var turn = 'player1';

document.addEventListener('DOMContentLoaded', function(){
    const nodeList = document.querySelectorAll(".play2ScoreButtons");
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].disabled = true;
        }
    const checkList = document.querySelectorAll(".largerCheckBox");
        for(let i = 0; i < checkList.length; i++){
            checkList[i].disabled = true;
        }
        document.getElementById('playerTurnText').innerHTML = turn + "'s turn";
});

document.getElementById('throwDice').addEventListener('click',function(){

    const checkList = document.querySelectorAll(".largerCheckBox");
    for(let i = 0; i < checkList.length; i++){
        checkList[i].disabled = false;
    }
    turnsLeft--;
    disableThrow();
        var num = 1;
        
        const nodeList = document.querySelectorAll(".dice");
        for (let i = 0; i < nodeList.length; i++) {
            
            
            if (document.getElementById("check-" + (i + 1)).checked != true)
            {
                var t1 = Math.floor(Math.random() * 6) +1;
                nodeList[i].src = '/js/img/dice-' + t1 + '.png';
                nodeList[i].alt = t1;
                console.log("off");
            }
            dices[i] = nodeList[i].alt;
            console.log(dices);
            console.log(i);
            
        }
        
        checkNumbs();
        chanceCalculate();
        yatzy();
        if(turn == 'player1'){
            bruh4();
        }
        else{
            bruh5();
        }
                
});

document.getElementById('ones').addEventListener('click', function(){saveNumbers(this.innerHTML, 1)});
document.getElementById('twos').addEventListener('click', function(){saveNumbers(this.innerHTML, 2)});
document.getElementById('threes').addEventListener('click', function(){saveNumbers(this.innerHTML, 3)});
document.getElementById('fours').addEventListener('click', function(){saveNumbers(this.innerHTML, 4)});
document.getElementById('fives').addEventListener('click', function(){saveNumbers(this.innerHTML, 5)});
document.getElementById('sixes').addEventListener('click', function(){saveNumbers(this.innerHTML, 6)});
document.getElementById('yhatzee').addEventListener('click', function(){saveNumbers(this.innerHTML, 13)});

document.getElementById('ones2').addEventListener('click', function(){saveNumbers(this.innerHTML, 1)});
document.getElementById('twos2').addEventListener('click', function(){saveNumbers(this.innerHTML, 2)});
document.getElementById('threes2').addEventListener('click', function(){saveNumbers(this.innerHTML, 3)});
document.getElementById('fours2').addEventListener('click', function(){saveNumbers(this.innerHTML, 4)});
document.getElementById('fives2').addEventListener('click', function(){saveNumbers(this.innerHTML, 5)});
document.getElementById('sixes2').addEventListener('click', function(){saveNumbers(this.innerHTML, 6)});
document.getElementById('yhatzee2').addEventListener('click', function(){saveNumbers(this.innerHTML, 13)});

function yatzy(){
    const allEqual = arr => arr.every(v => v === arr[0]);
    
    if(allEqual(dices)== true){
        if(turn == 'player1'){
            play1[13] = 50;
            play1Check[13] = true;
            tempPlay1[13] = 50;
        }
        else{
            play2[13] = 50;
            play2Check[13] = true;
            tempPlay2[13] = 50;
        }
    }
    else{
        tempPlay1[13] = 0;
        tempPlay2[13] = 0;
    }
    console.log(allEqual(dices)+" yazty check")
}

function chanceCalculate(){
    let temp5 = 0;
    if(turn == 'player1'){
        for(let i = 0; i < dices.length; i++){
            temp5 += parseFloat(dices[i]); 
        }
        console.log("temp5 "+ temp5 );
            tempPlay1[12] = temp5;
    }
}

function ofAKind(){
    if(turn == 'player1'){

    }
    else{
        
    }
}

function checkNumbs(){
   if(turn == 'player1'){
    for(let j = 0; j < tempPlay1.length; j++){
        var temp3 = 0;  
        if(play1Check[j] == false){
            for (let i = 0; i < dices.length; i++){
                if (dices[i] == j + 1){
                    temp3 = temp3 + 1 * j+1;
                }
            }
            tempPlay1[j] = temp3;
        }
    }
   }
   else{
        for(let j = 0; j < tempPlay2.length; j++){
            var temp3 = 0;  
            if(play2Check[j] == false){
                for (let i = 0; i < dices.length; i++){
                    if (dices[i] == j + 1){
                        temp3 = temp3 + 1 * j+1;
                    }
                }
                tempPlay2[j] = temp3;
            }
        }
    }

    console.log(temp3);
    return (temp3);
}

function saveNumbers(string, i){
    
    if(turn == 'player1'){
        play1[i-1] = string;
        play1Check[i-1] = true;
        turnsLeft = '3';
        disableThrow();
        console.log('player 1 array: ' + play1 + ' play 1 check: ' + play1Check)
        turn = 'player2'

        for(let j = 0; j < play1.length; j++){
            if(play1Check[j] == false){
                tempPlay1[j] = 0;
                console.log('test ' + j);
            }
        }
        bruh4();
        const nodeList = document.querySelectorAll(".play1ScoreButtons");
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].disabled = true;
        }
        const nodeList2 = document.querySelectorAll(".play2ScoreButtons");
        for (let i = 0; i < nodeList2.length; i++) {
            if(play2Check[i] == false){
                nodeList2[i].disabled = false;
            }
           
        }
    }

    else{
        play2[i-1] = string;
        play2Check[i-1] = true;
        turnsLeft = '3';
        disableThrow();
        console.log('player 2 array: ' + play2 + ' play 2 check: ' + play2Check)
        turn = 'player1'

        for(let j = 0; j < play2.length; j++){
            if(play2Check[j] == false){
                tempPlay2[j] = 0;
                console.log('test ' + j);
            }
        }
        bruh5();
        const nodeList = document.querySelectorAll(".play2ScoreButtons");
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].disabled = true;
        }
        const nodeList2 = document.querySelectorAll(".play1ScoreButtons");
        for (let i = 0; i < nodeList2.length; i++) {
            if(play1Check[i] == false){
                nodeList2[i].disabled = false;
            }
        }
    }
    
    const checkList = document.querySelectorAll(".largerCheckBox");
    for(let i = 0; i < checkList.length; i++){
        checkList[i].disabled = true;
        checkList[i].checked = false;
    }
    document.getElementById('playerTurnText').innerHTML = turn + "'s turn";

}

function bruh4(){
    document.getElementById('ones').innerHTML = tempPlay1[0];
    document.getElementById('twos').innerHTML = tempPlay1[1];
    document.getElementById('threes').innerHTML = tempPlay1[2];
    document.getElementById('fours').innerHTML = tempPlay1[3];
    document.getElementById('fives').innerHTML = tempPlay1[4];
    document.getElementById('sixes').innerHTML = tempPlay1[5];
    document.getElementById('chance').innerHTML = tempPlay1[12];
    document.getElementById('yhatzee').innerHTML = tempPlay1[13];


}


function bruh5(){
        document.getElementById('ones2').innerHTML = tempPlay2[0];
        document.getElementById('twos2').innerHTML = tempPlay2[1];
        document.getElementById('threes2').innerHTML = tempPlay2[2];
        document.getElementById('fours2').innerHTML = tempPlay2[3];
        document.getElementById('fives2').innerHTML = tempPlay2[4];
        document.getElementById('sixes2').innerHTML = tempPlay2[5];
        document.getElementById('chance2').innerHTML = tempPlay1[12];
        document.getElementById('yhatzee2').innerHTML = tempPlay2[13];
    
}

function disableThrow(){
    if(turnsLeft == 0){
        document.getElementById('throwDice').disabled = true;
        document.getElementById('throwDice').style.background = '#995f08';
        document.getElementById('throwDice').style.color = '#969087';
    }
    else{
        document.getElementById('throwDice').disabled = false;
        document.getElementById('throwDice').style.background = '#de8005';
        document.getElementById('throwDice').style.color = '#ffffff';
    }
    document.getElementById('counter').innerHTML = turnsLeft;
}
